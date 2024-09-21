import Image from 'next/image';

import { ActionIcon, AppShellHeader, Group } from '@mantine/core';

import NavigationBar from './NavigationBar';

export default function Header() {
  return (
    <AppShellHeader
      classNames={{
        header: 'header',
      }}
    >
      <Group h="100%" px="md">
        <Group
          classNames={{
            root: 'header-group',
          }}
          justify="space-between"
          style={{ flex: 1 }}
        >
          <ActionIcon component="a" href={'/'} size={60} variant="transparent">
            <Image
              src="/haccoon.png"
              alt={'logo'}
              width={60}
              height={60}
            ></Image>
          </ActionIcon>

          <NavigationBar />
        </Group>
      </Group>
    </AppShellHeader>
  );
}
