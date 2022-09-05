import '../styles/vendor/fonts.css';
import '../styles/vendor/normalize.css';
import '../styles/globals.css';
import '../styles/home.css';
import '../styles/header.css';
import '../styles/mobileMenu.css';
import '../styles/footer.css';
import '../styles/menu.css';
import '../styles/button.css';
import '../styles/price.css';
import '../styles/workshops.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
