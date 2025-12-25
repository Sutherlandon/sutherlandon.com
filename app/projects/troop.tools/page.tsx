import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import Block from "@/components/Block"
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'Troop.Tools',
  description: 'An attendence tracking app for advancement and reporting in a Trail Life Troop',
}

export default function Page() {
  return (
    <div>
      <PageHeader
        title='Troop.Tools'
        launchHref='https://trooptools.sutherlandon.com'
      />
      <Block className='mb-8'>
        <Image
          src='/img/showcase/troop.tools.jpg'
          width='643'
          height='340'
          alt='Troop.Tools Showcase'
          className='max-w-full m-auto'
          fetchPriority='high'
        />
      </Block>
      <Block>
        Troop.Tools is an app for Trail Life troops to have a central, easy to read schedule,
        record attendance, and report on the advancement progress of individual troop members.
        This filled a few gaps that Trail Life Connect had at the time, but most of these features
        are now available. This app could be generalized to take on any kind of organization. If you
        have any interest in a tool like this for your organization, feel free to contact me.
        Use the links below to click around and see what the app is all about. 
      </Block>
      <Block>
        App: <Link href='https://trooptools.sutherlandon.com' className='underline text-blue-500'>troop.tools</Link><br />
        Source: <Link href='https://github.com/sutherlandon/troop.tools' className='underline text-blue-500'>Troop.Tools on Github</Link>
      </Block>
    </div>
  );
}
