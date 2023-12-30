import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image';

import Header from '@/components/Header';
import MenuContent from '@/components/MenuContent';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sutherlandon',
  description: 'Sutherlandon App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headerHeight = 490;
  const drawerWidth = 280;
  const gradientEdge = 25;
  const backgroundColor = '#FAEEED';

  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor }}>
        <div
          id='header'
          className='bg-cover bg-center'
          style={{
            height: headerHeight,
            backgroundImage: 'url(/img/forest-faded.jpg)',
          }}
        >
          <div className='h-full' style={{ width: drawerWidth }}>
            <div className='h-full px-4 pt-8 m-auto' style={{
              background: `linear-gradient(-60deg, ${backgroundColor} ${gradientEdge}%, transparent ${gradientEdge}%), ` +
                          `linear-gradient(60deg, ${backgroundColor} ${gradientEdge}%, transparent ${gradientEdge}%)`,
            }}>
              <Image
                src='/img/Gg-1.1.svg'
                width='250'
                height='375'
                alt='Gg Logo'
              />
            </div>
          </div>
          <div id='menu' className='p-2 pt-8' style={{
              width: drawerWidth,
              height: `calc(100vh - ${headerHeight}px)`,
              backgroundColor
          }}>
            <MenuContent />
          </div>
        </div>
        <div 
          id='content'
          className='p-8 text-gray-800'
          style={{
            marginLeft: drawerWidth,
            marginTop: -headerHeight / 2,
            background: backgroundColor,
            minHeight: `calc(100vh - (${headerHeight}px/2))`
          }}
        >
          <div style={{ maxWidth: '60rem' }}>
            {children}
          </div>
        </div>
      </body >
    </html >
  )
}
