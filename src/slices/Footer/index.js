import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const Footer = async ({ slice }) => {
  const client = createClient();
  const navForBusiness = await client
    .getByUID('nav_for_business', 'nav_for_business')
    .catch(() => notFound());
  const navContact = await client
    .getByUID('nav_for_business', 'nav_contact')
    .catch(() => notFound());
  const navSocialMedia = await client
    .getByUID('nav_for_business', 'nav_social_media')
    .catch(() => notFound());
  const navForIndividuals = await client
    .getByUID('nav_for_business', 'nav_for_individuals')
    .catch(() => notFound());
  const navPages = await client
    .getByUID('nav_for_business', 'nav_pages')
    .catch(() => notFound());

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-12 pb-6"
    >
      <div className="flex gap-2 justify-between mb-32">
        <div className="w-1/4">
          <PrismicRichText field={slice.primary.text} />
        </div>

        <ul className="">
          {navForBusiness.data.links.map((link, index) => (
            <li key={index} className="">
              <PrismicNextLink field={link.link}>
                <PrismicRichText field={link.label} />
              </PrismicNextLink>
            </li>
          ))}
        </ul>

        <ul className="">
          {navPages.data.links.map((link, index) => (
            <li key={index} className="">
              <PrismicNextLink field={link.link}>
                <PrismicRichText field={link.label} />
              </PrismicNextLink>
            </li>
          ))}
        </ul>

        <ul className="">
          {navForIndividuals.data.links.map((link, index) => (
            <li key={index} className="">
              <PrismicNextLink field={link.link}>
                <PrismicRichText field={link.label} />
              </PrismicNextLink>
            </li>
          ))}
        </ul>

        <ul className="">
          {navContact.data.links.map((link, index) => (
            <li key={index} className="">
              <PrismicNextLink field={link.link}>
                <PrismicRichText field={link.label} />
              </PrismicNextLink>
            </li>
          ))}
        </ul>

        <ul className="">
          {navSocialMedia.data.links.map((link, index) => (
            <li key={index} className="">
              <PrismicNextLink field={link.link}>
                <PrismicRichText field={link.label} />
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>

      <PrismicNextImage field={slice.primary.footer_logo} alt="" />
      <div className="flex">
        <div className="mr-2">
          <PrismicNextImage field={slice.primary.copyright_logo} alt="" />
        </div>
        <div className="no-underline text-slate-500">
          <PrismicRichText field={slice.primary.copyright} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
