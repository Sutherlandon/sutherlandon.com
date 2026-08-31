import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import Block from "@/components/Block"
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Ad Block: The Game',
  description: 'A browser puzzle game where you play the ad blocker',
}

export default function Page() {
  return (
    <div>
      <PageHeader
        title='Ad Block: The Game'
        launchHref='https://www.adblockgame.com'
      />
      <Block className='mb-8'>
        <Image
          src='/img/showcase/ad-block-game.png'
          width='643'
          height='340'
          alt='Ad Block: The Game Showcase'
          className='max-w-full m-auto'
          fetchPriority='high'
        />
      </Block>
      <Block>
        Ad Block: The Game flips the script on the fake pop-up ad&mdash;instead of dodging it, you
        play the ad blocker and have to close it. One ad fills the screen at a time, and each one
        hides its close button behind a different puzzle: a tiny X that shrinks and fades, an X that
        drifts around the screen, a row of toggle switches, a memory-match grid, a fake &quot;I&apos;m
        not a robot&quot; checkbox, a math prompt, drag-to-trash, rapid tap, Simon-style dots, long
        press, odd-one-out&mdash;about fifteen mechanics in all. Each ad has a time limit, leftover
        time becomes bonus points, clean closes build a streak multiplier up to x1.5, and touching
        the ad itself instead of solving the puzzle ends the run instantly. It&apos;s built
        mobile-first, runs entirely in the browser, and needs no account, server, or download; high
        scores live in local storage on your own device.
      </Block>
      <Block>
        It&apos;s deliberately an affectionate museum of the dismiss-button dark patterns the web
        spent decades stamping out&mdash;part nostalgia, part satire, and not ad-blocking software
        of any kind. Every puzzle mechanic is a self-contained plugin in its own module with its own
        tests, registered through a central index, so adding a new mechanic never means touching the
        game loop. That same plugin idea carries over to monetization: the ads inside a run have to
        stay fake forever, since tiny close buttons, decoy controls, and a fail state for touching the
        ad are exactly what real ad networks prohibit. So the ad-network integration is its own
        provider interface with a no-op default, and the only place a real ad can legitimately go is
        the ordinary, fully compliant interstitial slot between a run ending and the score screen.
        Built with React Router 7 prerendered to static files, React 19, TypeScript, and Vite, tested
        with Vitest, and deployed on Vercel.
      </Block>
      <Block>
        App: <Link href='https://www.adblockgame.com' className='underline text-blue-500'>adblockgame.com</Link><br />
      </Block>
    </div>
  );
}
