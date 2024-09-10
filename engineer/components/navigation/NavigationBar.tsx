import Link from 'next/link';
import React from 'react';
import { categories } from '../constant';

import '@/components/navigation/navigation.scss';

export default function NavigationBar() {
  return (
    <React.Fragment>
      <div className="nav-container">
        <Link href={'/'}>MS</Link>
        <nav>
          {categories.map((element) => (
            <Link className="element" key={element.key} href={element.route}>
              {element.item}
            </Link>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
}
