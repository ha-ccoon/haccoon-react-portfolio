import Link from 'next/link';
import { navigationItems } from '../contants';

import style from './navigation.module.scss';

export default function NavigationBar() {
  return (
    <nav className={style.nav}>
      {navigationItems.map((element) => (
        <Link className={style.navItems} key={element.key} href={element.route}>
          {element.item}
        </Link>
      ))}
    </nav>
  );
}
