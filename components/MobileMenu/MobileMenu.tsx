import { MobileMenuProps } from './MobileMenu.types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu } from '../../utils/constants';
import { useEffect } from 'react';

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const renderMenu = menu.map((item, index) => {
    return (
      <li key={index}>
        <Link href={item.link} legacyBehavior>
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
          <Link href='/' legacyBehavior>
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
