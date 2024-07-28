import type { Metadata } from 'next';
import { IBM_Plex_Sans_KR } from 'next/font/google';
import React from 'react';

import NavigationBar from '@/components/navigation/navigation-bar';

import '@/styles/globals.scss';
import '@/styles/index.scss';
import './stars.scss';
import style from './app.module.scss';

const inter = IBM_Plex_Sans_KR({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kyujin Ko',
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
        <div id="stars"></div>
        <main className={style.section}>{children}</main>
      </body>
    </html>
  );
}
