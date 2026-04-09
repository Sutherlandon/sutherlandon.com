'use client';

import { useChat } from '@ai-sdk/react';
import { useRef, useEffect, useState, type FormEvent } from 'react';

const SUGGESTIONS = [
  'What tech stack do you work with?',
  'Tell me about a project you\'re proud of.',
  'What\'s your leadership experience?',
  'Why are you looking for new opportunities?',
];

function getTextContent(parts: Array<{ type: string; text?: string }>): string {
  return parts
    .filter((p) => p.type === 'text' && p.text)
    .map((p) => p.text)
    .join('');
}

export default function InterviewChat() {
  const { messages, setMessages, sendMessage, status, error } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const [rateLimited, setRateLimited] = useState('');
  const [expanded, setExpanded] = useState(false);

  const isLoading = status === 'submitted' || status === 'streaming';
  const hasMessages = messages.length > 0;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (error) {
      setRateLimited(error.message);
    }
  }, [error]);

  // Expand on first interaction
  useEffect(() => {
    if (hasMessages && !expanded) {
      setExpanded(true);
    }
  }, [hasMessages, expanded]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading || rateLimited) return;
    setInput('');
    sendMessage({ text });
  }

  function submitSuggestion(text: string) {
    if (isLoading || rateLimited) return;
    sendMessage({ text });
  }

  function handleReset() {
    setMessages([]);
    setRateLimited('');
    setInput('');
  }

  return (
    <div className={`w-full mx-auto transition-all duration-500 ${expanded ? 'max-w-4xl' : 'max-w-2xl'}`}>
      {/* Chat area */}
      <div
        ref={scrollRef}
        className={`overflow-y-auto transition-all duration-500 ${
          expanded
            ? 'h-[calc(100vh-320px)] min-h-[400px] border border-slate-300 rounded-lg mb-3 p-4 md:p-6 bg-white'
            : ''
        }`}
      >
        {!hasMessages && expanded && (
          <div className="h-full flex items-center justify-center">
            <div className="flex flex-wrap gap-2 justify-center max-w-[800px]">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submitSuggestion(s)}
                  className="text-sm px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 hover:border-slate-400 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {!hasMessages && !expanded && (
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => submitSuggestion(s)}
                className="text-sm px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 hover:border-slate-400 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {messages.map((m) => (
          <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'text-right' : ''}`}>
            <div
              className={`inline-block max-w-[85%] px-4 py-2 rounded-2xl text-sm md:text-base leading-relaxed text-left ${
                m.role === 'user'
                  ? 'bg-slate-700 text-white rounded-br-sm'
                  : 'bg-slate-100 text-slate-800 rounded-bl-sm'
              }`}
            >
              <div className="whitespace-pre-wrap">{getTextContent(m.parts)}</div>
            </div>
          </div>
        ))}

        {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
          <div className="mb-4">
            <div className="inline-block px-4 py-2 rounded-2xl bg-slate-100 text-slate-400 rounded-bl-sm text-sm">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Error / rate limit */}
      {rateLimited && (
        <div className="text-sm text-red-600 mb-2 text-center">{rateLimited}</div>
      )}

      {/* Input row */}
      <div className="flex gap-2">
        <form onSubmit={handleSubmit} className="flex gap-2 flex-1">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            disabled={!!rateLimited}
            className="flex-1 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim() || !!rateLimited}
            className="px-5 py-3 rounded-lg bg-slate-700 text-white text-sm font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
        {expanded && (
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-3 rounded-lg border border-slate-300 text-slate-500 text-sm font-medium hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
