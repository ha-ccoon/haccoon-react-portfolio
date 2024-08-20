import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavigationBar from '@/components/navigation/NavigationBar';

import '@/app/global.scss';
import './app.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Minha Sohn',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="app-container">
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
