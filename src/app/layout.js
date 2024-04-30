import './globals.css';

import { Hanken_Grotesk } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { RootHeader } from '@/components/RootHeader';
import { Splash } from '@/components/Splash';
import localFont from 'next/font/local';

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
  return (
    <html lang="en" className={neueHaasDisplay.className}>
      <body className="overflow-x-hidden antialiased bg-custom-gray-light overflow-hidden fixed w-screen h-screen">
        <Splash />
        <div className="container mx-auto">
          <RootHeader />
          {children}
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
