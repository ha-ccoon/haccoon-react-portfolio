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
const paleBlue: MantineColorsTuple = [
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

const blueGray: MantineColorsTuple = [
  '#f3f3fe',
  '#e4e6ed',
  '#c8cad3',
  '#a9adb9',
  '#9093a4',
  '#808496',
  '#767c91',
  '#656a7e',
  '#585e72',
  '#4a5167',
];

const sweetYellow: MantineColorsTuple = [
  '#fffbe5',
  '#fff5d0',
  '#ffea9f',
  '#fede69',
  '#fed43f',
  '#fecd26',
  '#feca1a',
  '#e3b20d',
  '#c99e00',
  '#ae8800',
];

const softPink: MantineColorsTuple = [
  '#ffebf3',
  '#fad2e2',
  '#f8a0c2',
  '#f86ba1',
  '#f74386',
  '#f82f75',
  '#f9266d',
  '#de1c5c',
  '#c61352',
  '#ad0045',
];

//
export const theme = createTheme({
  black: '#585e72',
  colors: {
    paleBlue: paleBlue,
    blueGray: blueGray,
    sweetYellow: sweetYellow,
    softPink: softPink,
  },
  defaultRadius: 10,
  headings: {
    sizes: {
      h1: {
        fontWeight: '900',
        fontSize: rem(70),
        lineHeight: '1.4',
      },
      h2: {
        fontWeight: '700',
        fontSize: rem(45),
        lineHeight: '1.4',
      },
      h3: {
        fontWeight: '400',
        fontSize: rem(25),
        lineHeight: '1.4',
      },
    },
    textWrap: 'wrap',
  },
  primaryColor: 'paleBlue',
});
