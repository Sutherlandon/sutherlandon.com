import Image from "next/image"

function MenuItem({
  image,
  text
}: {
  image: string,
  text: string,
}) {
  return (
    <div className='border border-gray-800 flex p-2 px-4 mb-4 items-center'>
      <div className='rounded mr-4' style={{ boxShadow: '#717171 1px 1px 5px 0px' }}>
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
  );
}

export default function MenuContent() {
  return (
    <>
      <MenuItem image='/img/app-icons/home-192.png' text='Home' />
      <MenuItem image='/img/app-icons/cribbage-192.png' text='Cribbage' />
      <MenuItem image='/img/app-icons/qwixx-192.png' text='QWIXX' />
      <MenuItem image='/img/app-icons/tsweeper-192.png' text='T*Sweeper' />
    </>
  );
}