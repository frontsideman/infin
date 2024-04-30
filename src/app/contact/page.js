import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

export default async function Page() {
  const client = createClient();
  const { data } = await client.getSingle('contact');

  return (
    <>
      <PrismicRichText field={data.title} />
      <PrismicNextLink field={data.link}>Link</PrismicNextLink>
    </>
  );
}

// export async function generateMetadata() {
//   const client = createClient();
//   const page = await client.getSingle('contact');

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }
