import Link from "next/link";
import Image from "next/image"

function MenuItem({
  href,
  image,
  text,
  onClick,
}: {
  href: string,
  image: string,
  text: string,
  onClick?: () => void,
}) {
  return (
    <Link href={href} onClick={onClick}>
      <div className='border border-gray-800 flex p-2 px-4 mb-4 items-center hover:bg-yellow-100'>
        <div className='rounded mr-4 bg-white' style={{ boxShadow: '#717171 1px 1px 5px 0px' }}>
          <Image
            src={image}
            className='rounded'
            width='30'
            height='30'
            alt='cribbage icon'
          />
        </div>
        <div className='text-gray-800'>{text}</div>
      </div>
    </Link>
  );
}

export default function MenuContent({
  close,
}: {
  close?: () => void,
}) {
  return (
    <>
      <MenuItem
        href='/'
        image='/img/app-icons/home-192.png'
        text='Home'
        onClick={close}
      />
      <MenuItem
        href='/projects/cribbage'
        image='/img/app-icons/cribbage-192.png'
        text='Cribbage'
        onClick={close}
      />
      <MenuItem
        href='/projects/qwixx'
        image='/img/app-icons/qwixx-192.png'
        text='QWIXX'
        onClick={close}
      />
      <MenuItem
        href='/projects/tsweeper'
        image='/img/app-icons/tsweeper-192.png'
        text='T*Sweeper'
        onClick={close}
      />
    </>
  );
}