import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('home').catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle('home').catch(() => notFound());

  return {
    title: page.data.title,
    description: page.data.meta_description,
  };
}
