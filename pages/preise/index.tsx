import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { PayPalForm } from '../../components/PayPalForm/PayPalForm';

const Price: NextPage = () => {
  const router = useRouter();

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isBtnHidden, setIsBtnHidden] = useState(false);

  const paymentBtnHandler = () => {
    setIsPaymentOpen(!isPaymentOpen);
    setIsBtnHidden(!isBtnHidden);
  };

  return (
    <>
      <Head>
        <title>Preise | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container price__container'>
        <h1 className='main__header'>Preise</h1>
        <section className='price__section price__section_worksops'>
          <h2 className='main__subheader'>1. Workshops</h2>
          <p className='main__text price__text'>
            Workshop einzeln: <span className='main__text_strong'>50€</span>
          </p>
          <p className='main__text price__text'>
            Fullpack bis 18.09.22: <span className='main__text_strong'>195€</span>, danach:{' '}
            <span className='main__text_strong'>250€</span>
          </p>
          <p className='main__text price__text'>Kinder unter 12 Jahren 30% Ermäßigung</p>
          <Button
            type='button'
            className='price__button'
            onClick={() => router.push('/preise/workshops')}
          >
            Registrierung zu Workshops
          </Button>
        </section>

        <section className='price__section price__section_wettbewerbe'>
          <h2 className='main__subheader'>2. Wettbewerbe</h2>
          <div className='price__text-container'>
            <p className='main__text price__text'>
              Kategorie Solo: <span className='main__text_strong'>30€</span>
            </p>
            <p className='main__text price__text'>
              Kinder und Juniors: <span className='main__text_strong'>20€</span>
            </p>
            <p className='main__text price__text'>
              Gruppe ab 3 Personen: <span className='main__text_strong'>15€ p.p.</span>
            </p>
            <p className='main__text price__text'>
              Duo: <span className='main__text_strong'>20€ p.p.</span>
            </p>
            <p className='main__text price__text'>
              Fullpack für Wettbewerbe: <span className='main__text_strong'>80€</span>
            </p>
          </div>
          <Button
            type='button'
            className='price__button'
            onClick={() => router.push('/preise/wettbewerbe')}
          >
            Registrierung zum Wettbewerb
          </Button>
        </section>

        <section className='price__section price__section_gala-show'>
          <div className='price__text-container'>
            <h2 className='main__subheader'>3.Gala Shows Tickets</h2>
            <h3 className='price__show-header'>1001Nacht OpenStage - Opening Gala</h3>
            <p className='main__text price__text'>
              am Freitag: <span className='main__text_strong'>15€</span>
            </p>
            <h3 className='price__show-header'>1001Nacht Galashow</h3>
            <p className='main__text price__text'>
              am Samstag: <span className='main__text_strong'>25€</span>
            </p>
            <p className='main__text price__text price__text_padded'>
              Für Freitag und Samstag zusammen: <span className='main__text_strong'>30€</span>
            </p>
          </div>

          <div className={isPaymentOpen ? 'payment-form payment-form_open' : 'payment-form'}>
            <h2 className='main__subheader danke__subheader'>Online-Zahlung</h2>
            <p className='main__text'>
              Bitte überweise den vollständigen Betrag mit Info für welche Wettbewerb / Fullpack /
              Show Freitag / Show Samstag, an das folgende Konto:
            </p>
            <p className='main__text'>
              Nafisa Teichmann
              <br />
              Deutsche Bank
              <br />
              IBAN: DE18 1207 0024 0356 0117 01
              <br />
              BIС: DEUTDEDB160
            </p>
            <PayPalForm onClose={paymentBtnHandler} />
          </div>

          <Button
            type='button'
            className='price__button'
            onClick={paymentBtnHandler}
            isHidden={isBtnHidden}
          >
            Zur Kasse
          </Button>

          <p className='main__text price__text price__text_padded price__large-footnote'>
            Bitte Musik an <a href='mailto:nafisa@mac.com'>nafisa@mac.com</a> senden. Mit Name,
            Musiktitel, Musiklänge, für welche Show/Wettbewerb
          </p>
        </section>

        <p className='price__footnote'>
          Aufgrund des Kleinunternehmerstatus gem.§19 UStG erhebe ich keine Mehrwertsteuer und weise
          diese daher nicht aus.
          <br /> Alle Zahlungen für die Teilnahme am Festival sind in jedem Fall nicht
          erstattungsfähig, außer Absage des Festivals. Wenn Sie unser Festival nicht besuchen
          können, dürfen Sie Ihr Paket mit einer obligatorischen Benachrichtigung der Veranstalter
          übertragen. In diesem Fall könnten Wettbewerbskategorien in andere innerhalb der Zahlung
          geändert werden. Neue Kategorien zu dieser Registrierung hinzuzufügen, ist nur möglich,
          wenn freie Plätze übrig sind.
        </p>
      </div>
    </>
  );
};

export default Price;
