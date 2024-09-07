import React from 'react';

import Greeting from '@/components/greeting/Greeting';
import Skills from '@/app/skills/page';
import Experience from '@/app/experience/page';

import './app.scss';

export default function Main() {
  return (
    <React.Fragment>
      <Greeting />
      <Skills />
      <Experience />
    </React.Fragment>
  );
}
