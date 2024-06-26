import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
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
          <h2 className='main__subheader'>1001Nacht Stars Gala Show</h2>
          <h3 className='price__show-header'>Samstag 12.10.2024</h3>
          <p className='main__text price__text'>
            Einlass: <span className='main__text_strong'>17:30</span>
          </p>
          <p className='main__text price__text'>
            Beginn: <span className='main__text_strong'>18:00</span>
          </p>
          <p className='main__text price__text'>
            Eintritt: <span className='main__text_strong'>35€</span>
          </p>
        </section>
        <section className='price__text-container'>
          <h2 className='main__subheader'>1001Nacht Closing Gala</h2>
          <h3 className='price__show-header'>Sonntag 13.10.2024</h3>
          <p className='main__text price__text'>
            Einlass: <span className='main__text_strong'>15:30</span>
          </p>
          <p className='main__text price__text'>
            Beginn: <span className='main__text_strong'>16:00</span>
          </p>
          <p className='main__text price__text'>
            Eintritt: <span className='main__text_strong'>25€</span>
          </p>
        </section>
        <section className='price__text-container gala__section_span'>
          <p className='main__text price__text'>
            Fullpack Shows: <span className='main__text_strong'>55€</span>
          </p>
          {/* <Payment isOpen={isPaymentOpen} onClick={paymentBtnHandler} isBtnHidden={isBtnHidden} /> */}
        </section>
      </div>
    </>
  );
};

export default GalaShows;
