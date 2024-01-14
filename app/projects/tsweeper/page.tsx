import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import Block from "@/components/Block"
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'T*Sweeper',
  description: 'A text based minsweeper game on the Sutherlandon App',
}

export default function Page() {
  return (
    <div>
      <PageHeader
        title={<>T<span className='text-red-500'>*</span>Sweeper</>}
        launchHref='https://tsweeper.sutherlandon.com'
      />
      <Block className='mb-8'>
        <Image
          src='/img/showcase/tsweeper.jpg'
          width='643'
          height='340'
          alt='T*Sweeper Showcase'
          className='max-w-full'
          fetchPriority='high'
        />
      </Block>

      <Block>
        T*Sweeper is a text based minesweeper game.  I was inspired by a terminal based
        minesweeper game that I wrote as an assignment in high school.  This game uses
        nothing but text for graphics and layout, and accepts typed commands, simulating a
        unix terminal. Built purely in React, it is also a Progressive Web App, so you can
        install it on your phone and take it with you on the go.
      </Block>
      <Block>
        App: <Link href="https://tsweeper.sutherlandon.com" className='underline text-blue-500'>tsweeper.sutherlandon.com</Link><br />
        Source: <Link href="https://github.com/sutherlandon/tsweeper" className='underline text-blue-500'>T*Sweeper on Github</Link>
      </Block>
    </div>
  );
}