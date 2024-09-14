import React from 'react';

import { ActionIcon, Container, Text, Title } from '@mantine/core';

import '@/components/contact/contact.scss';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailHeart,
} from '@tabler/icons-react';
import Image from 'next/image';

export default function ContactComponent() {
  return (
    <section className="contact-section">
      <Title
        classNames={{
          root: 'title',
        }}
        order={3}
      >
        Contact
      </Title>

      <div className="image-div">
        <Image
          className="image"
          src="/haccoon.jpg"
          alt={'haccoon image'}
          height={120}
          width={120}
          priority={true}
        />
      </div>

      <Text>Minha Sohn</Text>
      <Text>Seoul, South Korea</Text>
      <Text>Full Stack Engineer specialized in Healthcare</Text>
      {/* <Text>True Korean, Honorary Canadian</Text> */}

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
