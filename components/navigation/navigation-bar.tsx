import Link from 'next/link';
import { navigationItems } from '../constants';

import style from './navigation.module.scss';

export default function NavigationBar() {
  return (
    <div className={style['nav-container']}>
      {/* TODO: 20240626 change to icon */}
      <Link href={'/'}>Kyujin Ko</Link>
      <nav>
        {navigationItems.map((element) => (
          <Link
            className={style.navItems}
            key={element.key}
            href={element.route}
          >
            {element.item}
          </Link>
        ))}
      </nav>
    </div>
  );
}
