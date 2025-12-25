import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import Block from "@/components/Block"
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'QWIXX',
  description: 'A fully playable QWIXX game on the Sutherlandon App',
}

export default function Page() {
  return (
    <div>
      <PageHeader
        title='QWIXX'
        launchHref='https://qwixx.sutherlandon.com'
      />
      <Block className='mb-8'>
        <Image
          src='/img/showcase/qwixx-app.jpg'
          width='643'
          height='340'
          alt='QWIXX App Showcase'
          className='max-w-full m-auto'
          fetchPriority='high'
        />
      </Block>
      <Block>
        QWIXX is a table top game played with six dice and score cards.  I enjoyed the game so much
        that I built this web app as a passion project. The main goal of this project was to make the
        game more accessible because it is not always practical to roll dice, for example, in the car
        or on an airplane.  To support that goal, this app scales to any size screen gracefully and
        is a Progressive Web App so you can install it on your device to have offline access to it
        everywhere. You&apos;ll find a link to the rules in the app.
      </Block>
      <Block>
        App: <Link href='https://qwixx.sutherlandon.com' className='underline text-blue-500'>qwixx.sutherlandon.com</Link><br />
        Source: <Link href='https://github.com/sutherlandon/qwixx-app' className='underline text-blue-500'>QWIXX App on Github</Link>
      </Block>
    </div>
  );
}