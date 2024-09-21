import { ActionIcon, Container } from '@mantine/core';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';

import '@/components/contact/contact.scss';

export const actionIcons = [
  { href: process.env.LINKEDIN, icon: <IconBrandLinkedin size={40} /> },
  { href: process.env.GITHUB, icon: <IconBrandGithub size={40} /> },
  { href: process.env.TWITTER, icon: <IconBrandTwitter size={40} /> },
];

export function LinkIcons() {
  return (
    <Container
      classNames={{
        root: 'icons-container',
      }}
    >
      {actionIcons.map((value, index) => (
        <ActionIcon
          color={`var(--mantine-color-softPink-6)`}
          component="a"
          href={value.href}
          target="blank"
          key={index}
          size={50}
          variant="filled"
        >
          {value.icon}
        </ActionIcon>
      ))}
    </Container>
  );
}
