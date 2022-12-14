import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../../components/Button/Button';
import { PayPalForm } from '../../components/PayPalForm/PayPalForm';

const Danke: NextPage = () => {
  return (
    <>
      <Head>
        <title>Danke | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container'>
        <h1 className='main__header'>Vielen Dank für Deine Anmeldung</h1>
        <p className='main__text'>
          Ich habe Deine Buchung bekommen und werde so schnell wie möglich antworten.
          <br />
          Hier unten findest Du die Zahlungsmöglichkeiten.
        </p>

        <h2 className='main__subheader danke__subheader'>Online-Zahlung</h2>
        <p className='main__text'>
          Bitte überweise den vollständigen Betrag mit Info für welche Wettbewerb / Fullpack / Show
          Freitag / Show Samstag, an das folgende Konto:
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
        <div className='danke__paypal-wrapper'>
          <PayPalForm onClose={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Danke;
