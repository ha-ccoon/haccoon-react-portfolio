import React from 'react';

import style from './aboutme.module.scss';

export default function AboutMe() {
  return (
    <div className={style.container}>
      <h2 id={style.title}>About Me</h2>

      <h5>
        Sure, here is an example text in English: Once upon a time in a small
        village nestled between rolling hills and dense forests, there lived a
        young girl named Eliza. Eliza was known for her curious nature and her
        love for exploring the unknown. Every day after school, she would
        venture into the woods, discovering new paths, hidden clearings, and
        fascinating wildlife.
      </h5>
    </div>
  );
}
