import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu } from '../../utils/constants';

export const Menu: React.FC = () => {
  const router = useRouter();

  const renderMenu = menu.map((item, index) => {
    return (
      <li key={index}>
        <Link href={item.link}>
          <a
            className={
              router.pathname.startsWith(item.link) ? 'menu__item menu__item_active' : 'menu__item'
            }
          >
            {item.name}
          </a>
        </Link>
      </li>
    );
  });

  return (
    <nav className='menu'>
      <ul className='menu__items'>
        <li>
          <Link href='/'>
            <a className={router.pathname == '/' ? 'menu__item menu__item_active' : 'menu__item'}>
              Start
            </a>
          </Link>
        </li>
        {renderMenu}
      </ul>
    </nav>
  );
};
