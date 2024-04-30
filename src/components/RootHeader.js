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
      <div className="flex flex-wrap items-start justify-between leading-none">
        <div className="w-1/3">
          <PrismicNextLink
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            <PrismicNextImage field={settings.data.logo} />
          </PrismicNextLink>
        </div>
        <nav className="self-start">
          <ul className="flex flex-col">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <a href={item.link.url} className="text-sm font-light">
                  <PrismicText field={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          linkField={homepage.data.contact_button[0].link}
          textField={homepage.data.contact_button[0].label}
          className="border border-custom-gray-dark self-start"
        />
      </div>
    </Bounded>
  );
}
