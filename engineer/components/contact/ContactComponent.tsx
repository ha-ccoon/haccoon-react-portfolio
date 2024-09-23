import React from 'react';

import Image from 'next/image';

import { Container, Space, Text, Title } from '@mantine/core';

import { LinkIcons } from './LinkIcons';

import '@/components/contact/contact.scss';

export default function ContactComponent() {
  return (
    <section id="contact" className="contact-section">
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

      {/* <LinkIcons /> */}

      <Text>&copy; 2024 by haccoon. All Rights Reserved.</Text>

      <Space h="md" />
    </section>
  );
}
