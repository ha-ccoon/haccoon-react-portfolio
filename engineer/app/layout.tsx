import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { font, theme } from '@/utils/theme';

// Follow the order
import '@mantine/core/styles.css';
import '@/app/global.css';
import '@/app/app.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={font.className}>
        <MantineProvider withCssVariables={true} theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
