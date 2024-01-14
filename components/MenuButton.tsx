'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Link from "next/link";
import FAIcon from "./FAIcon";
import MenuContent from './MenuContent';

export default function MenuButton() {
  const backgroundColor = '#FAEEED';
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='p-4' style={{
        height: 87,
        marginTop: 73,
        backgroundColor,
      }}>
        <div 
          className='w-fit border border-gray-800 pt-2 pb-1 px-3 ml-auto hover:bg-yellow-100'
          onClick={() => setOpen(true)}
        >
          <FAIcon icon='bars' className='h-6 text-gray-800' />
        </div>
      </div>
      <div
        className={clsx(
          open && 'block',
          !open && 'hidden',
          'absolute p-4 shadow-2xl bg-[--bg-hex] h-[calc(100vh-73px)] right-0 top-[73px]'
        )}
      >
        <div className='flex justify-between'>
          <div className='text-3xl text-gray-800'>Apps</div>
          <div className='w-fit border border-gray-800 pt-2 pb-1 px-3 ml-auto mb-4 hover:bg-yellow-100'
            onClick={() => setOpen(false)}
          >
            <FAIcon icon='times' className='h-6 text-gray-800' />
          </div>
        </div>
        <MenuContent close={() => setOpen(false)} />
      </div>
    </>
  );
}