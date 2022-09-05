import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu: React.FC = () => {
  const router = useRouter();
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
        <li>
          <Link href='/workshops'>
            <a
              className={
                router.pathname == '/workshops' ? 'menu__item menu__item_active' : 'menu__item'
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
                router.pathname == '/wettbewerbe' ? 'menu__item menu__item_active' : 'menu__item'
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
                router.pathname == '/preise' ? 'menu__item menu__item_active' : 'menu__item'
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
                router.pathname == '/fotogalerie' ? 'menu__item menu__item_active' : 'menu__item'
              }
            >
              Fotogalerie
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
