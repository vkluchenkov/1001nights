import '../styles/vendor/fonts.css';
import '../styles/vendor/normalize.css';
import '../styles/globals.css';
import '../styles/home.css';
import '../styles/header.css';
import '../styles/mobileMenu.css';
import '../styles/footer.css';
import '../styles/menu.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
