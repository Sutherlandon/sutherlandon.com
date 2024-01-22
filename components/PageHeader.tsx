import Link from "next/link";
import FAIcon from "./FAIcon";
import Button from "./Button";

export default function PageHeader({
  title,
  launchHref,
}: {
  title: React.ReactNode,
  launchHref?: string,
}) {
  return (
    <div className='mb-8 flex justify-between'>
      <div className='text-4xl'>
        {title}
      </div>
      {launchHref &&
        <div>
          <Link href={launchHref}>
            <Button className='shadow md:shadow-black/60 md:bg-slate-400'>
              Launch<FAIcon icon='external-link-alt' right className='h-4 inline'/>
            </Button>
          </Link>
        </div>
      }
    </div>
  );
}