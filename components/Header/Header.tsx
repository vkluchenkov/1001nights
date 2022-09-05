import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo.png';
import { useEffect, useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Menu } from '../Menu/Menu';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // close mobile menu on window width above 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className='header'>
        <div className='header__logo'>
          <Link href='/'>
            <a>
              <Image src={logo} alt='1001 Nacht logo' layout='fill' priority />
            </a>
          </Link>
        </div>
        <button type='button' className='header__menu-button' onClick={openMenu}></button>
      </header>
      <Menu />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};
