import { MobileMenuProps } from './MobileMenu.types';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

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
            >
              Start
            </a>
          </Link>
        </li>
        <li>
          <Link href='/workshops'>
            <a
              className={
                router.pathname == '/workshops'
                  ? 'mobile-menu__item mobile-menu__item_active'
                  : 'mobile-menu__item'
              }
            >
              Workshops
            </a>
          </Link>
        </li>
        <li>
          <Link href='/wettbewerbe'>
            <a
              className={
                router.pathname == '/wettbewerbe'
                  ? 'mobile-menu__item mobile-menu__item_active'
                  : 'mobile-menu__item'
              }
            >
              Wettbewerbe
            </a>
          </Link>
        </li>
        <li>
          <Link href='/preise'>
            <a
              className={
                router.pathname == '/preise'
                  ? 'mobile-menu__item mobile-menu__item_active'
                  : 'mobile-menu__item'
              }
            >
              Registrierung / Preise
            </a>
          </Link>
        </li>
        <li>
          <Link href='/fotogalerie'>
            <a
              className={
                router.pathname == '/fotogalerie'
                  ? 'mobile-menu__item mobile-menu__item_active'
                  : 'mobile-menu__item'
              }
            >
              Fotogalerie
            </a>
          </Link>
        </li>
      </ul>
      <button type='button' className='mobile-menu__close' onClick={onClose}></button>
    </nav>
  );
};
