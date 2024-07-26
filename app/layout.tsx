import type { Metadata } from 'next';
import { IBM_Plex_Sans_KR } from 'next/font/google';

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
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
