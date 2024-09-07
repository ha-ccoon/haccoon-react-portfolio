import React from 'react';

import Image from 'next/image';

import { ActionIcon, Button, Text, Title } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandNotion,
  IconFile,
  IconFileDescription,
  IconFileHorizontal,
  IconFileSmile,
  IconFileText,
} from '@tabler/icons-react';

import './greeting.scss';

export default function Greeting() {
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
          <div className="greeting-button-div">
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
          </div>

          {/* TODO: 20240827 find a place for the below icons */}
          {/* <div>
            <ActionIcon size={35}>
              <IconBrandGithub size={30} stroke={2} title="github" />
            </ActionIcon>
            <ActionIcon size={35}>
              <IconBrandLinkedin size={30} title="linkedin" />
            </ActionIcon>
          </div> */}
        </section>
      </div>
    </React.Fragment>
  );
}
