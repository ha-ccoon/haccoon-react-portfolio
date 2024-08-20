import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import NavigationBar from '@/components/navigation/NavigationBar';

import '@/app/global.scss';
import './app.scss';

const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

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
