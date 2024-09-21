import { Group, rem, Title, UnstyledButton } from '@mantine/core';

import { categories } from '@/components/constant';
import { Category } from '@/components/types';

import '@/components/header/header.scss';

export default function NavigationBar() {
  return (
    <Group ml="xl" gap={rem(30)}>
      <UnstyledButton
        classNames={{
          root: 'navigation-button',
        }}
      >
        {categories.map((value: Category, index: number) => (
          <Title key={index} order={5}>
            {value.item}
          </Title>
        ))}
      </UnstyledButton>
    </Group>
  );
}
