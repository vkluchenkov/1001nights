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
import '../styles/datenschutz.css';
import '../styles/wettbewerbe.css';
import '../styles/forms.css';
import '../styles/danke.css';
import '../styles/photo.css';
import '../styles/image-popup.css';
import '../styles/payPal.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
