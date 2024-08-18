import React from 'react';

import Image from 'next/image';

import style from './app.module.scss';
import Footer from '@/components/footer/footer';
import AboutMe from './aboutme';

export default function Home() {
  return (
    <React.Fragment>
      <div className={style.container}>
        <article>
          <h1 className={style.greeting}>
            Hello,
            <br /> I am Kyujin Ko
          </h1>
          <h4 className={style.occupation}>Assistant Researcher</h4>
        </article>

        <div className={style['photo-container']}>
          <Image
            className={style['circle-photo']}
            src="/haccoon.jpeg"
            alt={'haccoon image'}
            width={120}
            height={120}
          />
        </div>
      </div>
      <div id={style.gap} />
      <div className={style.layout}>
        <AboutMe />
        <Footer />
      </div>
    </React.Fragment>
  );
}
