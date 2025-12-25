import Block from '@/components/Block';
import Card from '@/components/Card';

export default function Page() {
  return (
    <div>
      <Block className='text-4xl'>
        &quot;I build the things I wish already existed.&quot;
      </Block>
      <Block>
        I&apos;m a software engineer from who enjoys turning messy problems into clean, reliable systems. 
        I build things that are meant to last—thoughtful interfaces, well-structured APIs, and tools 
        that make life easier for the people using them. Code is my medium, but clarity is the goal.
      </Block>
      <Block>
        Click the app icons below to explore my favorite projects.
      </Block>
      <Block className='mb-20'>
        Hi, my name is Landon. 👋
      </Block>
      <Block className="flex flex-wrap gap-8 mb-16 justify-center md:justify-start">
        <Card
          title="Retrograde"
          description="Mission control for Retrospectives"
          imageUrl="/img/app-icons/retrograde-192.png"
          imageAlt="Retrograde Showcase"
          imageBg="bg-gradient-to-b from-black to-sky-400"
          linkUrl="/projects/retrograde"
        />
        <Card
          title="Lunar Landon"
          description="An old board game recreated in the browser."
          imageUrl="/img/app-icons/lunar-landon-192.png"
          imageAlt="Lunar Landon Showcase"
          linkUrl="/projects/lunar-landon"
        />
        <Card
          title="Troop Tools"
          description="An attendance and advancement tracker for Scout leaders."
          imageUrl="/img/app-icons/troop.tools-192.png"
          imageAlt="Troop Tools Showcase"
          linkUrl="/projects/troop.tools"
        />
        <Card 
          title="Cribbage Board"
          description="A digital cribbage board."
          imageUrl="/img/app-icons/cribbage-192.png"
          imageAlt="Cribbage Board Showcase"
          linkUrl="/projects/cribbage"
        />
        <Card
          title="QWIXX"
          description="A digital version of the popular dice game."
          imageUrl="/img/app-icons/qwixx-192.png"
          imageAlt="QWIXX Showcase"
          linkUrl="/projects/qwixx"
        />
        <Card
          title="T*Sweeper"
          description="A text based Minesweeper game."
          imageUrl="/img/app-icons/tsweeper-192.png"
          imageAlt="T*Sweeper Showcase"
          linkUrl="/projects/tsweeper"
        />
      </Block>
    </div>
  );
}
