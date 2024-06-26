import Link from 'next/link';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className='footer'>
        <p className='footer__address'>Ort: Am Alten Gymnasium 1, Neuruppin</p>
        <div className='footer__content'>
          <div className='footer__legal'>
            <p className='footer__text'>
              <Link href='/datenschutz' legacyBehavior>
                <a className='footer__link'>Datenschutz</a>
              </Link>
            </p>
          </div>
          <div className='footer__copyright'>
            <p className='footer__text'>
              Copyright ©{year} 1001NachtBellydanceFestival. Alle&nbsp;Rechte&nbsp;vorbehalten.
            </p>
            <p className='footer__text'>
              <a className='footer__link' href='mailto:nafisa@mac.com'>
                nafisa@mac.com
              </a>{' '}
              / +4916098244407
            </p>
            <p className='footer__text'>
              Created by{' '}
              <a
                className='footer__link'
                href='https://github.com/vkluchenkov'
                target='_blank'
                rel='noreferrer'
              >
                Vladimir Kluchenkov
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
