import { PrismicText } from '@prismicio/react';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { Button } from '@/components/Button';
import { Bounded } from '@/components/Bounded';

export async function RootHeader() {
  const client = createClient();
  const settings = await client.getSingle('settings');
  const navigation = await client.getSingle('navigation');
  const homepage = await client.getSingle('home');

  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
        <div className="w-1/12">
          <PrismicNextLink
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            <PrismicNextImage field={settings.data.logo} />
          </PrismicNextLink>
        </div>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <a href={item.link.url}>
                  <PrismicText field={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          linkField={homepage.data.contact_button[0].link}
          textField={homepage.data.contact_button[0].label}
          className="border border-slate-400"
        />
      </div>
    </Bounded>
  );
}
