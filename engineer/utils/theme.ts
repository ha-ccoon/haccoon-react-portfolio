import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

//
export const metadata: Metadata = {
  title: 'Minha Sohn',
  description: 'Software Engineer',
};

//
export const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

//
const defaultColor: MantineColorsTuple = [
  '#eef3ff',
  '#dce4f5',
  '#b9c7e2',
  '#94a8d0',
  '#748dc1',
  '#5f7cb8',
  '#5474b4',
  '#44639f',
  '#39588f',
  '#2d4b81',
];

export const theme = createTheme({
  colors: {
    paleBlue: defaultColor,
  },
  headings: {
    sizes: {
      h1: { fontSize: rem(4) },
      h2: { fontSize: rem(2.5) },
      h3: { fontSize: rem(1.5) },
    },
  },
  primaryColor: 'paleBlue',
});
