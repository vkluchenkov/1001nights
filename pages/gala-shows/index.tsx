import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { PayPalForm } from '../../components/PayPalForm/PayPalForm';
import { Payment } from '../../components/Payment';

const GalaShows: NextPage = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isBtnHidden, setIsBtnHidden] = useState(false);

  const paymentBtnHandler = () => {
    setIsPaymentOpen(!isPaymentOpen);
    setIsBtnHidden(!isBtnHidden);
  };

  return (
    <>
      <Head>
        <title>Gala shows | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <h1 className='main__header'>Gala shows</h1>
      <div className='content__container gala__container'>
        <section className='price__text-container'>
          <h2 className='main__subheader'>1001Nacht Opening Gala Show</h2>
          <h3 className='price__show-header'>Freitag 06.10.2023</h3>
          <p className='main__text price__text'>
            Einlass: <span className='main__text_strong'>19:00</span>
          </p>
          <p className='main__text price__text'>
            Beginn: <span className='main__text_strong'>19:30</span>
          </p>
          <p className='main__text price__text'>
            Eintritt: <span className='main__text_strong'>20€</span>
          </p>
          <p className='main__text price__text'>Ort: Am alten Gymnasium 1, Neuruppin</p>
        </section>
        <section className='price__text-container'>
          <h2 className='main__subheader'>1001Nacht Stars Gala Show</h2>
          <h3 className='price__show-header'>Samstag 07.10.2023</h3>
          <p className='main__text price__text'>
            Einlass: <span className='main__text_strong'>19:00</span>
          </p>
          <p className='main__text price__text'>
            Beginn: <span className='main__text_strong'>19:30</span>
          </p>
          <p className='main__text price__text'>
            Eintritt: <span className='main__text_strong'>30€</span>
          </p>
          <p className='main__text price__text'>Ort: Virchowstr. 41, Neuruppin</p>
        </section>

        <section className='price__text-container gala__section_span'>
          <p className='main__text price__text'>
            Fullback Shows: <span className='main__text_strong'>45€</span>
          </p>
          <Payment isOpen={isPaymentOpen} onClick={paymentBtnHandler} isBtnHidden={isBtnHidden} />
        </section>
      </div>
    </>
  );
};

export default GalaShows;
