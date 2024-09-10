import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import NavigationBar from '@/components/navigation/NavigationBar';
import { font, theme } from '@/utils/theme';

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
        <NavigationBar />
        <MantineProvider withCssVariables={true} theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
