'use client';

import React from 'react';

import Image from 'next/image';

import {
  ActionIcon,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Burger,
  Group,
  rem,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Greeting from '@/components/greeting/Greeting';
import Education from '@/app/education/page';
import Experience from '@/app/experience/page';
import Skills from '@/app/skills/page';
import Contact from '@/app/contact/page';

import '@/app/app.scss';

export default function Main() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: rem(90) }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShellHeader>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group
            classNames={{
              root: 'header-group',
            }}
            justify="space-between"
            style={{ flex: 1 }}
          >
            <ActionIcon
              component="a"
              href={'/'}
              size={60}
              variant="transparent"
            >
              <Image
                src="/haccoon.png"
                alt={'logo'}
                width={60}
                height={60}
              ></Image>
            </ActionIcon>
            <Group ml="xl" gap={rem(30)}>
              <UnstyledButton>Skills</UnstyledButton>
              <UnstyledButton>Experience</UnstyledButton>
              <UnstyledButton>Education</UnstyledButton>
              <UnstyledButton>Contact</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShellHeader>
      <AppShellMain>
        {/* <NavigationBar /> */}
        <Greeting />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </AppShellMain>
    </AppShell>
  );
}
