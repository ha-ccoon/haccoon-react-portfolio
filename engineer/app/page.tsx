import React from 'react';

import Education from '@/app/education/page';
import Experience from '@/app/experience/page';
import Greeting from '@/components/greeting/Greeting';
import Skills from '@/app/skills/page';
import NavigationBar from '@/components/navigation/NavigationBar';
import Contact from '@/app/contact/page';

export default function Main() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Greeting />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </React.Fragment>
  );
}
