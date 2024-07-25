import type { Metadata } from 'next';

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
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
