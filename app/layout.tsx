import type { Metadata } from 'next';
import { IBM_Plex_Sans_KR } from 'next/font/google';

import NavigationBar from '@/components/navigation/navigation-bar';

import '../styles/globals.scss';
import style from '../components/navigation/navigation.module.scss';

const inter = IBM_Plex_Sans_KR({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kujin Ko',
  description: 'Resume',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
