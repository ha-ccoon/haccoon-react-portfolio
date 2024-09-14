import React from 'react';

import Education from '@/app/education/page';
import Experience from '@/app/experience/page';
import Greeting from '@/components/greeting/Greeting';
import Skills from '@/app/skills/page';

import './app.scss';
import Contact from './contact/page';

export default function Main() {
  return (
    <React.Fragment>
      <Greeting />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </React.Fragment>
  );
}
