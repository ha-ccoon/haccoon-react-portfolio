import React from 'react';

import Image from 'next/image';

import style from './app.module.scss';

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

        <div>
          <Image
            className={style['circle-photo']}
            src="/haccoon.jpeg"
            alt={'haccoon image'}
            width={120}
            height={120}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
