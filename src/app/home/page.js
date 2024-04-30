import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Page() {
  const client = createClient();
  const homePage = await client.getSingle('home');

  return (
    <>
      <SliceZone slices={homePage.data.slices} components={components} />
    </>
  );
}

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata() {
  const client = createClient();
  const homePage = await client.getSingle('home');

  return {
    title: homePage.data.meta_title,
    description: homePage.data.meta_description,
  };
}
