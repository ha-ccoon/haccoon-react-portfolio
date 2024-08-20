import React from 'react';

import Image from 'next/image';

import './greeting.scss';

export function Greeting() {
  return (
    <div className="greeting-container">
      <div>
        <Image
          className="greeting-image"
          src="/haccoon.jpg"
          alt={'haccoon image'}
          width={120}
          height={120}
        />
      </div>

      <section className="greeting-section">
        <h1 className="greeting-title">Hi, I am Minha Sohn</h1>
        <div className="greeting-subsection">
          <h2 className="greeting-subtitle">Full-Stack Engineer</h2>
          <p className="greeting-description">Specialized in Healthcare</p>
        </div>
      </section>
    </div>
  );
}
