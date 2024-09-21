'use client';

import React from 'react';

import { AppShell, AppShellMain, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Greeting from '@/components/greeting/Greeting';
import Education from '@/app/education/page';
import Experience from '@/app/experience/page';
import Skills from '@/app/skills/page';
import Contact from '@/app/contact/page';
import Header from '@/components/header/Header';

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
      <Header />

      <AppShellMain>
        <Greeting />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </AppShellMain>
    </AppShell>
  );
}
