/* A card component with a image, title, description, and link. */
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageBg?: string;
  linkUrl: string;
}

export default function Card({
  title,
  description,
  imageUrl,
  imageAlt,
  imageBg = 'white',
  linkUrl,
}: CardProps) {
  return (
    <Link href={linkUrl}>
      <div className="block w-[15rem] md:w-[12rem] h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer hover:scale-105 bg-white hover:bg-gray-100 border border-slate-800">
        <div className={imageBg}>
          <Image
            src={imageUrl}
            width='192'
            height='192'
            alt={imageAlt}
            className='w-full'
            fetchPriority='high'
          />
        </div>
        <div className="p-3">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
}