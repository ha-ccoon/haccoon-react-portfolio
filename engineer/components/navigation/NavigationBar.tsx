import React from 'react';

import Link from 'next/link';

import { Container } from '@mantine/core';

import { categories } from '../constant';

import '@/components/navigation/navigation.scss';

export default function NavigationBar() {
  return (
    <section>
      <Container className="nav-container">
        <Link href={'/'}>MS</Link>
        <nav>
          {categories.map((element) => (
            <Link className="element" key={element.key} href={element.route}>
              {element.item}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
