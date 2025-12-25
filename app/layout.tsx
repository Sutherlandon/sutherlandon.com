import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import './globals.css'
import MenuContent from '@/components/MenuContent';
import MenuButton from '@/components/MenuButton';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { absolute: 'Sutherlandon', template: '%s - Sutherlandon App' },
  description: 'Sutherlandon App',
  icons: //[{ rel: 'icon', url: '/img/web-icons/Gg-logo-32.png' }],
  {
    icon: [
      { url: '/img/web-icons/Gg-logo-16.png', sizes: "16x16", type: 'image/png' },
      { url: '/img/web-icons/Gg-logo-32.png', sizes: "32x32", type: 'image/png' }
    ],
    shortcut: '/img/web-icons/Gg-logo-32.png',
    apple: '/img/web-icons/Gg-logo-192.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />

        {/* Small- Layout */}
        <div id='sm-layout' className='block md:hidden'>
          <div
            id='header'
            className='flex w-full bg-forest bg-cover bg-center h-[--sm-header-height]'
          >
            <div className='h-full w-[100px]'>
              <div className='h-full px-4 pt-[25px] m-auto bg-vGradientSm'>
                <Link href='/' className='cursor-pointer'>
                  <Image
                    src='/img/Gg-1.1.svg'
                    width='250'
                    height='375'
                    alt='Gg Logo'
                    className='logo-color'
                  />
                </Link>
              </div>
            </div>
            <div className='grow'>
              <MenuButton />
            </div>
          </div>
          <div id='content' className='p-4 pt-8 text-gray-800'>
            <div className='max-w-[60rem]'>
              {children}
            </div>
          </div>
        </div>

        {/* Medium+ Layout */}
        <div id='md-layout' className='hidden md:block'>
          <div
            id='header'
            className='bg-forest bg-cover bg-center h-[--md-header-height]'
          >
            <div className='h-full w-[--drawer-width]'>
              <div className='h-full px-4 pt-8 m-auto bg-vGradientMd'>
                <Link href='/' className='cursor-pointer'>
                <Image
                  src='/img/Gg-1.1.svg'
                  width='250'
                  height='375'
                  alt='Gg Logo'
                  className='logo-color'
                />
                </Link>
              </div>
            </div>
            <div id='menu' className='p-2 pt-8 w-[--drawer-width]'>
              <MenuContent />
            </div>
          </div>
          <div id='content' className={`p-8 text-gray-800 ml-[--drawer-width] -mt-[calc(var(--md-header-height)/2+10px)] bg-[--bg-hex]`}>
            <div className='max-w-[60rem]'>
              {children}
            </div>
          </div>
        </div>
        <div id='footer' className={`flex flex-wrap flex-col md:flex-row gap-4 justify-between p-4 text-gray-800 bg-[--bg-hex] border-t border-slate-300`}>
          <div id='contact-info' className='flex gap-6 justify-center md:justify-start flex-col md:flex-row text-center md:text-left'>
            <Link href='mailto:hi@sutherlandon.com' target='_blank' className='hover:underline cursor-pointer'>
              <Image
                src='/img/web-icons/email.png'
                width='24'
                height='24'
                alt='Email Icon'
                className='inline-block mr-2'
              />
              hi@sutherlandon.com
            </Link>
            <Link href='https://github.com/sutherlandon' target='_blank' className='hover:underline cursor-pointer'>
              <Image
                src='/img/web-icons/github-mark.svg'
                width='20'
                height='20'
                alt='Github Icon'
                className='inline-block mr-2 mb-1'
              /> Sutherlandon
            </Link>
          </div>
          <div className='text-center text-sm'>
            &copy; {new Date().getFullYear()} Sutherlandon, LLC. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  );
}
