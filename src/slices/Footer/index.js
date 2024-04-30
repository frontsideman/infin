import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { Text } from '@/components/Text';

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
          <Text
            field={slice.primary.text}
            className="text-lg font-thin text-custom-gray-dark"
          />
        </div>

        <div className="">
          <Text
            field={navForBusiness.data.title}
            className="text-xs font-thin text-custom-gray-dark mb-4"
          />
          <ul className="">
            {navForBusiness.data.links.map((link, index) => (
              <li key={index} className="">
                <PrismicNextLink field={link.link}>
                  <Text field={link.label} className="text-sm font-thin" />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Text
            field={navPages.data.title}
            className="text-xs font-thin text-custom-gray-dark mb-4"
          />
          <ul className="">
            {navPages.data.links.map((link, index) => (
              <li key={index} className="">
                <PrismicNextLink field={link.link}>
                  <Text field={link.label} className="text-sm font-thin" />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Text
            field={navPages.data.title}
            className="text-xs font-thin text-custom-gray-dark mb-4"
          />
          <ul className="">
            {navPages.data.links.map((link, index) => (
              <li key={index} className="">
                <PrismicNextLink field={link.link}>
                  <Text field={link.label} className="text-sm font-thin" />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Text
            field={navContact.data.title}
            className="text-xs font-thin text-custom-gray-dark mb-4"
          />
          <ul className="">
            {navContact.data.links.map((link, index) => (
              <li key={index} className="">
                <PrismicNextLink field={link.link}>
                  <Text field={link.label} className="text-sm font-thin" />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Text
            field={navSocialMedia.data.title}
            className="text-xs font-thin text-custom-gray-dark mb-4"
          />
          <ul className="">
            {navSocialMedia.data.links.map((link, index) => (
              <li key={index} className="">
                <PrismicNextLink field={link.link}>
                  <Text field={link.label} className="text-sm font-thin" />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PrismicNextImage field={slice.primary.footer_logo} alt="" />
      <div className="flex -mt-3 text-custom-gray-dark font-thin">
        <div className="mr-2">
          <PrismicNextImage field={slice.primary.copyright_logo} alt="" />
        </div>
        <div className="no-underline">
          <PrismicRichText field={slice.primary.copyright} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
