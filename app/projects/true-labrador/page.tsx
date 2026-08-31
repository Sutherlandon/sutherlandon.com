import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import Block from "@/components/Block"
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: 'True Labrador',
  description: 'A Labrador Retriever pedigree registry tracking dilute bloodlines',
}

export default function Page() {
  return (
    <div>
      <PageHeader
        title='True Labrador'
        launchHref='https://truelabrador.com'
      />
      <Block className='mb-8'>
        <Image
          src='/img/showcase/true-labrador.jpg'
          width='643'
          height='340'
          alt='True Labrador Showcase'
          className='max-w-full m-auto'
          fetchPriority='high'
        />
      </Block>
      <Block>
        True Labrador is a Labrador Retriever pedigree registry that makes dilute (dd) bloodlines
        visible, so breeders can avoid Color Dilution Alopecia and make informed, ethical breeding
        decisions. It has two halves: a public, read-only site where anyone can search the registry
        of over 625,000 registered dogs and walk a pedigree back through its ancestors, and an
        authenticated admin app for data import, lineage tracking, breeder records, and an audited
        edit history. This is a client project I built through Sutherlandon, LLC.
      </Block>
      <Block>
        The registry replaced a legacy system built on a single flat table that deduplicated dogs by
        name, which failed constantly&mdash;a single data load could produce up to 800 duplicate
        records that a human then had to clean up by hand. The rebuild normalized the schema into six
        to eight tables and switched identity from the dog&apos;s name to its AKC number. A CSV
        ingestion pipeline now handles a load in about eight seconds instead of 800 manual dedupes,
        and an exception queue surfaces only the one to five genuine edge cases per load, each with
        enough context for an administrator to decide. Background import jobs keep a large load from
        blocking the site, and the admin app adds automated breeder identity resolution, anomaly
        detection feeding a review queue, and a full audit trail on every edit. Built with React
        Router 7 server-side rendering, TypeScript, React 19, Tailwind CSS 4, PostgreSQL, and Vite,
        with OAuth 2.0 via Auth0, tested with Vitest, and deployed on Vercel.
      </Block>
      <Block>
        App: <Link href='https://truelabrador.com' className='underline text-blue-500'>truelabrador.com</Link><br />
      </Block>
    </div>
  );
}
