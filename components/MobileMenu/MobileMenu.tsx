import { MobileMenuProps } from './MobileMenu.types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu } from '../../utils/constants';

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const renderMenu = menu.map((item, index) => {
    return (
      <li key={index}>
        <Link href={item.link}>
          <a
            className={
              router.pathname.startsWith(item.link)
                ? 'mobile-menu__item mobile-menu__item_active'
                : 'mobile-menu__item'
            }
            onClick={onClose}
          >
            {item.name}
          </a>
        </Link>
      </li>
    );
  });

  return (
    <nav className={isOpen ? 'mobile-menu mobile-menu_open' : 'mobile-menu'}>
      <ul className='mobile-menu__items'>
        <li>
          <Link href='/'>
            <a
              className={
                router.pathname == '/'
                  ? 'mobile-menu__item mobile-menu__item_active'
                  : 'mobile-menu__item'
              }
              onClick={onClose}
            >
              Start
            </a>
          </Link>
        </li>
        {renderMenu}
      </ul>
      <button type='button' className='mobile-menu__close' onClick={onClose}></button>
    </nav>
  );
};
