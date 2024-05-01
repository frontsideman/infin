import './globals.css';

import localFont from 'next/font/local';
import { Hanken_Grotesk } from 'next/font/google';
import { repositoryName } from '@/prismicio';
import { createClient } from '@/prismicio';
import { RootHeader } from '@/components/RootHeader';
import { PrismicPreview } from '@prismicio/next';
import { Splash } from '@/components/Splash';

const neueHaasDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplayLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayMedium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'fallback',
  variable: '--font-hanken-grotesk',
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  const client = createClient();
  const settings = await client.getSingle('settings');
  const navigation = await client.getSingle('navigation');
  const homepage = await client.getSingle('home');

  return (
    <html lang="en" className={neueHaasDisplay.className}>
      <body className="overflow-x-hidden antialiased bg-custom-gray-light">
        <Splash />
        <div className="container mx-auto">
          <RootHeader
            settings={settings}
            navigation={navigation}
            homepage={homepage}
          />
          {children}
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
