import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import Block from "@/components/Block"
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Cribbage Board',
  description: 'The Cribbage Board game on the Sutherlandon App',
}

export default function Page() {
  return (
    <div>
      <PageHeader
        title='Retrograde'
        launchHref='https://retrograde.sh'
      />
      <Block className='mb-8'>
        <Image
          src='/img/showcase/retrograde.png'
          width='643'
          height='340'
          alt='Retrograde Showcase'
          className='max-w-full m-auto'
          fetchPriority='high'
        />
      </Block>
      <Block>
        Retrograde is a simple, focused retrospective tool built to help teams have better 
        conversations and leave with clear outcomes. It strips away unnecessary complexity 
        and provides just enough structure to keep discussions organized—so teams can focus 
        on what actually matters: what&#39;s working, what isn&#39;t, and what to improve next. 
        Whether for agile sprints or project wrap-ups, Retrograde makes retrospectives 
        easy to run and easy to follow.
      </Block>
      <Block>
        Retrograde solves the problem of messy, unfocused retros that generate noise instead 
        of insight. By keeping feedback organized and discussion intentional, it helps teams 
        collaborate more effectively and turn reflection into action. Teams choose Retrograde 
        because it&#39;s fast, intuitive, and respectful of their time—offering a clean space for 
        honest discussion without the overhead of bloated tools or distracting features.
      </Block>
      <Block>
        App: <Link href='https://retrograde.sh' className='underline text-blue-500'>retrograde.sh</Link><br />
      </Block>
    </div>
  );
}