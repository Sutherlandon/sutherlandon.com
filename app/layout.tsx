import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import FAIcon from '@/components/FAIcon';

import './globals.css'
import MenuContent from '@/components/MenuContent';
import MenuButton from '@/components/MenuButton';

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
  const drawerWidth = 280;
  const backgroundColor = '#FAEEED';

  const layout = {
    sm: {
      headerHeight: 160,
      gradientEdge: 26,
    },
    md: {
      headerHeight: 490,
      gradientEdge: 25,
    },
  }

  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor }}>
        {/* Small- Layout */}
        <div id='sm-layout' className='block md:hidden'>
          <div
            id='header'
            className='flex w-full bg-cover bg-center'
            style={{
              height: 160,
              backgroundImage: 'url(/img/forest-faded.jpg)',
            }}
          >
            <div className='h-full' style={{ width: 100 }}>
              <div className='h-full px-4 m-auto' style={{
                paddingTop: 25,
                background: `linear-gradient(-60deg, ${backgroundColor} ${layout.sm.gradientEdge}%, transparent ${layout.sm.gradientEdge}.2%), ` +
                  `linear-gradient(60deg, ${backgroundColor} ${layout.sm.gradientEdge}%, transparent ${layout.sm.gradientEdge}.2%)`,
              }}>
                <Image
                  src='/img/Gg-1.0.svg'
                  width='250'
                  height='375'
                  alt='Gg Logo'
                />
              </div>
            </div>
            <div className='grow'>
              <MenuButton />
            </div>
            {/* <div id='menu' className='p-2 pt-8' style={{
              width: drawerWidth,
              height: `calc(100vh - ${headerHeight}px)`,
              backgroundColor
            }}>
              <MenuContent />
            </div> */}
          </div>
          <div
            id='content'
            className='p-4 pt-8 text-gray-800'
            style={{
              background: backgroundColor,
              minHeight: `calc(100vh - (${layout.sm.headerHeight}px/2))`
            }}
          >
            <div style={{ maxWidth: '60rem' }}>
              {children}
            </div>
          </div>
        </div>

        {/* Medium+ Layout */}
        <div id='md-layout' className='hidden md:block'>
          <div
            id='header'
            className='bg-cover bg-center'
            style={{
              height: layout.md.headerHeight,
              backgroundImage: 'url(/img/forest-faded.jpg)',
            }}
          >
            <div className='h-full' style={{ width: drawerWidth }}>
              <div className='h-full px-4 pt-8 m-auto' style={{
                background: `linear-gradient(-60deg, ${backgroundColor} ${layout.md.gradientEdge}%, transparent ${layout.md.gradientEdge}.2%), ` +
                  `linear-gradient(60deg, ${backgroundColor} ${layout.md.gradientEdge}%, transparent ${layout.md.gradientEdge}.2%)`,
              }}>
                <Image
                  src='/img/Gg-1.0.svg'
                  width='250'
                  height='375'
                  alt='Gg Logo'
                />
              </div>
            </div>
            <div id='menu' className='p-2 pt-8' style={{
              width: drawerWidth,
              height: `calc(100vh - ${layout.md.headerHeight}px)`,
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
              marginTop: -layout.md.headerHeight / 2,
              background: backgroundColor,
              minHeight: `calc(100vh - (${layout.md.headerHeight}px/2))`
            }}
          >
            <div style={{ maxWidth: '60rem' }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
