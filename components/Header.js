import Image from 'next/image';

export default function Header() {

  const headerHeight = 490;
  const drawerWidth = 280;

  return (
    <div id='header'>
      <div
        className='h-72 bg-cover bg-center flex'
        style={{
          height: headerHeight,
          backgroundImage: 'url(/img/forest-faded.jpg)',
          // maskImage: 'url(/img/dip-mask.svg)',
          // maskPosition: 'center bottom',
          // maskRepeat: 'no-repeat'
        }}
      >
        <div className='h-full' style={{ width: drawerWidth }}>
          <div className='h-full px-4 pt-8 m-auto' style={{
            background: 'linear-gradient(-60deg, black 25%, transparent 25%), linear-gradient(60deg, black 25%, transparent 25%)',
          }}>
            <Image
              src='/img/Gg-1.1.svg'
              width='250'
              height='375'
              alt='Gg Logo'
            />
          </div>
        </div>
        <div className='' style={{ width: `calc(100% - ${drawerWidth}px)` }}>
          <div className='' style={{ height: headerHeight/2 }}>

          </div>
          <div className='' style={{ background: 'black'  }}>

          </div>
        </div>
      </div>
      <div id='content' style={{ 
        marginLeft: drawerWidth,
        marginTop: -headerHeight/2,
        background: 'black',
        minHeight: `calc(100vh - (${headerHeight}px/2))`
      }}>
      </div>
    </div>
  );
}
