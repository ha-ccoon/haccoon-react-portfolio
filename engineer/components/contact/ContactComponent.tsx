import React from 'react';

import { ActionIcon, Container, Space, Text, Title } from '@mantine/core';

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
      <Container
        classNames={{
          root: 'contact-container',
        }}
        fluid={true}
      ></Container>

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
        <ActionIcon
          color={`var(--mantine-color-softPink-6)`}
          component="a"
          href={process.env.LINKEDIN}
          target="blank"
          size={50}
          variant="filled"
        >
          <IconBrandLinkedin size={40} />
        </ActionIcon>
        <ActionIcon
          color={`var(--mantine-color-softPink-6)`}
          component="a"
          href={process.env.GITHUB}
          target="blank"
          size={50}
          variant="filled"
        >
          <IconBrandGithub size={40} />
        </ActionIcon>
        <ActionIcon
          color={`var(--mantine-color-softPink-6)`}
          component="a"
          href={process.env.EMAIL}
          target="blank"
          size={50}
          variant="filled"
        >
          <IconMailHeart size={40} />
        </ActionIcon>
      </Container>

      <Text>&copy; 2024 by haccoon. All Rights Reserved.</Text>

      <Space h="md" />
    </section>
  );
}
