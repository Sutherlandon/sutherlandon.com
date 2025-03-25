import Link from "next/link";
import Image from "next/image"
import Button from "./Button";

function MenuItem({
  href,
  image,
  text,
  onClick,
  noHome,
}: {
  href: string,
  image: string,
  text: string,
  noHome?: boolean,
  onClick?: () => void,
}) {
  return (
    <Link href={href} onClick={onClick} prefetch>
      <Button className={noHome ? 'pl-0' : ''}>
        <div className='rounded mr-4 bg-white shadow-md shadow-black/25'>
          <Image
            src={image}
            className='rounded'
            width='30'
            height='30'
            alt='cribbage icon'
          />
        </div>
        <div>{text}</div>
      </Button>
    </Link>
  );
}

export default function MenuContent({
  noHome = false,
  close,
}: {
  noHome?: boolean,
  close?: () => void,
}) {
  return (
    <>
      {!noHome &&
        <MenuItem
          href='/'
          image='/img/app-icons/home-192.png'
          text='Home'
          onClick={close}
        />
      }
      <MenuItem
        href='/projects/lunar-landon'
        image='/img/app-icons/lunar-landon-192.png'
        text='Lunar Landon'
        onClick={close}
        noHome={noHome}
      />
      <MenuItem
        href='/projects/troop.tools'
        image='/img/app-icons/troop.tools-192.png'
        text='Troop.Tools'
        onClick={close}
        noHome={noHome}
      />
      <MenuItem
        href='/projects/cribbage'
        image='/img/app-icons/cribbage-192.png'
        text='Cribbage'
        onClick={close}
        noHome={noHome}
      />
      <MenuItem
        href='/projects/qwixx'
        image='/img/app-icons/qwixx-192.png'
        text='QWIXX'
        onClick={close}
        noHome={noHome}
      />
      <MenuItem
        href='/projects/tsweeper'
        image='/img/app-icons/tsweeper-192.png'
        text='T*Sweeper'
        onClick={close}
        noHome={noHome}
      />
    </>
  );
}