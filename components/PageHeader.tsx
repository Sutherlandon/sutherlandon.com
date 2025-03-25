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
            <Button className='border border-slate-400 shadow md:shadow-black/60 bk-amber-500 hover:bg-amber-600 text-black'>
              Launch<FAIcon icon='external-link-alt' right className='h-4 inline'/>
            </Button>
          </Link>
        </div>
      }
    </div>
  );
}