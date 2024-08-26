import React from 'react';

import Image from 'next/image';

import './greeting.scss';
import { Button } from '@mantine/core';

export function Greeting() {
  return (
    <div className="greeting-container">
      <div>
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
        <h1 className="greeting-title">Hi, I am Minha Sohn</h1>
        <div className="greeting-subsection">
          <h2 className="greeting-subtitle">Full-Stack Engineer</h2>
          <p className="greeting-description">Specialized in Healthcare</p>
        </div>
        <Button>안녕하세요 눌러주세요</Button>
      </section>
    </div>
  );
}
