import { anthropic } from '@ai-sdk/anthropic';
import { streamText, convertToModelMessages } from 'ai';
import { NextRequest } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

const SYSTEM_PROMPT = readFileSync(
  join(process.cwd(), 'docs', 'interviewBot.md'),
  'utf-8',
);

// Simple in-memory rate limiting
const ipCounts = new Map<string, { count: number; resetAt: number }>();

const DAILY_GLOBAL_CAP = 500;
const HOURLY_IP_CAP = 30;
const MAX_MESSAGES_PER_REQUEST = 20;

let globalDailyCount = 0;
let globalDailyDate = new Date().toDateString();

function checkRateLimits(ip: string): string | null {
  const today = new Date().toDateString();

  // Reset global daily count
  if (globalDailyDate !== today) {
    globalDailyCount = 0;
    globalDailyDate = today;
  }

  if (globalDailyCount >= DAILY_GLOBAL_CAP) {
    return 'The interview bot has reached its daily conversation limit. Please try again tomorrow.';
  }

  // Per-IP hourly limit
  const now = Date.now();
  const ipData = ipCounts.get(ip);
  if (ipData && ipData.resetAt > now) {
    if (ipData.count >= HOURLY_IP_CAP) {
      return 'You\'ve asked a lot of questions — take a breather and come back in a bit.';
    }
    ipData.count++;
  } else {
    ipCounts.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
  }

  globalDailyCount++;
  return null;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || req.headers.get('x-real-ip')
    || 'unknown';

  const rateLimitError = checkRateLimits(ip);
  if (rateLimitError) {
    return new Response(JSON.stringify({ error: rateLimitError }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { messages } = await req.json();

  // Only send the last N messages to keep token usage bounded
  const trimmedMessages = messages.slice(-MAX_MESSAGES_PER_REQUEST);

  const result = streamText({
    model: anthropic('claude-haiku-4-5-20251001'),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(trimmedMessages),
    maxOutputTokens: 600,
  });

  return result.toUIMessageStreamResponse();
}
