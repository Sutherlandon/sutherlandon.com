'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Link from "next/link";
import FAIcon from "./FAIcon";
import MenuContent from './MenuContent';
import Button from './Button';

export default function MenuButton() {
  // const backgroundColor = '#FAEEED';
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='p-4 h-[87px] mt-[73px] bg-[--bg-hex]'>
        <Button
          className='w-fit ml-auto shadow'
          onClick={() => setOpen(true)}
        >
          <FAIcon icon='bars' className='h-6 text-gray-800' />
        </Button>
      </div>
      <div
        className={clsx(
          open && 'block',
          !open && 'hidden',
          'absolute p-4 shadow-2xl shadow-black/60 bg-[--bg-hex] h-[calc(100vh-73px)] right-0 top-[73px]'
        )}
      >
        <div className='flex justify-between'>
          <div className='text-3xl text-gray-800'>Apps</div>
          <Button className='w-fit ml-auto mb-4 shadow'
            onClick={() => setOpen(false)}
          >
            <FAIcon icon='times' className='h-6 text-gray-800' />
          </Button>
        </div>
        <MenuContent close={() => setOpen(false)} />
      </div>
    </>
  );
}