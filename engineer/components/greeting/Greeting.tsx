import React from 'react';

import Image from 'next/image';

import { Text, Title } from '@mantine/core';

import './greeting.scss';

export function Greeting() {
  return (
    <React.Fragment>
      <Title className="greeting-title" order={1}>
        Hi, I am &nbsp;<span className="name">Minha Sohn</span>
      </Title>

      <div className="greeting-container">
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

        <section className="greeting-section">
          <div className="greeting-sub-div">
            <Title order={2}>Full-Stack Engineer</Title>
            <Title order={3}>Specialized in Healthcare</Title>
            <Text className="greeting-description-text">
              Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
              facilis perspiciatis corporis nulla aspernatur. Autem eligendi
              rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque
              perspiciatis! Maiores minima consectetur.
            </Text>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
