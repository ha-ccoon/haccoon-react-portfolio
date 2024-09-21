import React from 'react';

import Image from 'next/image';

import { Button, Container, Text, Title } from '@mantine/core';

import { IconBrandNotion, IconFileDescription } from '@tabler/icons-react';

import './greeting.scss';

export default function Greeting() {
  return (
    <section>
      <Title className="greeting-title" order={1}>
        Hi, I am &nbsp;<span className="name">Minha Sohn</span>
      </Title>

      <Container className="greeting-container" fluid={true}>
        <div className="greeting-image-div">
          <Image
            className="greeting-image"
            src="/haccoon.jpg"
            alt={'haccoon image'}
            height={120}
            width={120}
            priority={true}
          />
        </div>

        <Container className="greeting-section">
          <div className="greeting-sub-div">
            <Title order={2}>Full-Stack Engineer</Title>
            <Title order={4}>Specialized in Healthcare</Title>
            <Text className="greeting-description-text">
              Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
              facilis perspiciatis corporis nulla aspernatur. Autem eligendi
              rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque
              perspiciatis! Maiores minima consectetur.
            </Text>
          </div>

          <Container className="greeting-button-div">
            <Button
              className="greeting-button"
              leftSection={<IconFileDescription title="resume" />}
              variant="light"
            >
              Resume
            </Button>
            <Button
              className="greeting-button"
              leftSection={<IconBrandNotion title="portfolio" />}
              variant="light"
            >
              Portfolio
            </Button>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
