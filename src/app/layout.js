import './globals.css';

import { Hanken_Grotesk } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { RootHeader } from '@/components/RootHeader';
import { SplashScreen } from '@/components/SplashScreen';

const hankenGrotesk = Hanken_Grotesk({
  weight: ['300', '600'],
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
    <html lang="en" className={hankenGrotesk.variable}>
      <body className="overflow-x-hidden antialiased">
        <SplashScreen />
        <div className="container mx-auto">
          <RootHeader />
          {children}
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
