import Link from 'next/link';

import { Group, rem, Title } from '@mantine/core';

import { categories } from '@/components/constant';
import { Category } from '@/components/types';

import '@/components/header/header.scss';

export default function NavigationBar() {
  return (
    <Group ml="xl" gap={rem(30)}>
      {categories.map((value: Category, index: number) => {
        return (
          <Link href={value.route} key={index}>
            <Title order={5}>{value.item}</Title>
          </Link>
        );
      })}
    </Group>
  );
}
