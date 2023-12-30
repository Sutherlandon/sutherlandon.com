import Image from "next/image";
import Link from "next/link";
import Block from "@/components/Block"

export default function Page() {
  return (
    <div>
      <div className='text-4xl mb-8'>
        Cribbage Board
      </div> 
      <Block className='mb-8'>
        <Image
          src='/img/showcase/cribbage.jpg'
          width='643'
          height='340'
          alt='Cribbage Board Showcase'
          className='max-w-full'
        />
      </Block>
      <Block>
        Cribbage is a classic game that can be traced back to the 1700&apos;s. There are many different types of
        boards out there. There are even many electronic versions where you can play against other players
        online or against a computer. But what if you want to play with another person, you have your own
        cards, and you want to be able to do that anywhere? This project solves that use case.
      </Block>
      <Block>
        Cribbage Board is simply that, a board to keep score in your own game of Cribbage. It is a progressive
        web app so you can install it to your computer or mobile device and have it anywhere you go. The
        controls are intuative and keep the board font and center. There are also serveral options to change
        the experience including themes and cotrol orientations. There is even a scoring cheat sheet in the
        menu as well as a link to the rules of play in case you need a reference.
      </Block>
      <Block>
        App: <Link href='https://crib.sutherlandon.com' className='underline text-blue-500'>crib.sutherlandon.com</Link><br />
        Source: <Link href='https://github.com/sutherlandon/cribbage-board' className='underline text-blue-500'>Cribbage Board on Github</Link>
      </Block>
    </div>
  );
}