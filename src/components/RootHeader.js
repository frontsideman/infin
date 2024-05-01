import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { Button } from '@/components/Button';
import { Bounded } from '@/components/Bounded';
import { Nav } from '@/components/Nav';

export function RootHeader({ settings, navigation, homepage }) {
  return (
    <Bounded
      as="header"
      yPadding="sm1-" // leave wrong value
      className="sticky top-0 z-10 bg-custom-gray-light pb-2 pt-8 md:-mx-1"
    >
      <div className="flex flex-wrap items-start justify-between leading-none">
        <div className="w-1/3">
          <PrismicNextLink
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            <PrismicNextImage field={settings.data.logo} />
          </PrismicNextLink>
        </div>
        <Nav navigation={navigation} />
        <Button
          linkField={homepage.data.contact_button[0].link}
          textField={homepage.data.contact_button[0].label}
          className="border border-custom-gray-dark self-start"
        />
      </div>
    </Bounded>
  );
}
