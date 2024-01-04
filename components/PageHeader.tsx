import Link from "next/link";
import FAIcon from "./FAIcon";

export default function PageHeader({
  title,
  launchHref,
}: {
  title: JSX.Element | string,
  launchHref?: string,
}) {
  return (
    <div className='mb-8 flex justify-between'>
      <div className='text-4xl'>
        {title}
      </div>
      {launchHref ? (
        <div>
          <Link href={launchHref}>
            <div className='border border-gray-800 p-2 px-4 hover:bg-yellow-100'>
              Launch<FAIcon icon='external-link-alt' right className='h-4 inline'/>
            </div>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}