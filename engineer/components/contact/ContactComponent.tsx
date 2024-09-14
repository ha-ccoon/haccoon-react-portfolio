import React from 'react';

import { ActionIcon, Container, Text, Title } from '@mantine/core';

import '@/components/contact/contact.scss';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailHeart,
  IconRecordMail,
} from '@tabler/icons-react';

export default function ContactComponent() {
  return (
    <section className="contact-section">
      <Title
        classNames={{
          root: 'title',
        }}
        order={3}
      >
        Get in touch
      </Title>

      <Container
        classNames={{
          root: 'container',
        }}
      >
        <ActionIcon size={50} variant="filled">
          <IconBrandLinkedin size={40} />
        </ActionIcon>
        <ActionIcon size={50} variant="filled">
          <IconBrandGithub size={40} />
        </ActionIcon>
        <ActionIcon size={50} variant="filled">
          <IconMailHeart size={40} />
        </ActionIcon>
      </Container>
    </section>
  );
}
