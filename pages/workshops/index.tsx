import type { NextPage } from 'next';
import Head from 'next/head';

interface Schedule {
  time: string;
  name: string;
  topic?: string;
}

interface Day {
  title: string;
  schedule: Schedule[];
}

const Workshops: NextPage = () => {
  return (
    <>
      <Head>
        <title>Workshops | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container workshops__container'>
        <h1 className='main__header'>Termine und Workshops&nbsp;2023</h1>
        <section className='workshops__section'>
          <h2 className='main__subheader workshops__white'>Freitag 06.10.2023</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>09:00-11:00</p>
              <p className='workshops__item-name'>Rayana</p>
              <p className='workshops__item-topic'>Saidi Choreografie</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>11:15-13:15</p>
              <p className='workshops__item-name'>Yela</p>
              <p className='workshops__item-topic'>Schleierfächer Choreografie</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>13:30-15:30</p>
              <p className='workshops__item-name'>Leandro Ferreyra</p>
              <p className='workshops__item-topic'>Tango oriental Choreografie</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>15:45-17:45</p>
              <p className='workshops__item-name'>Aliah </p>
              <p className='workshops__item-topic'>Lyric</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>19:30</p>
              <p className='workshops__item-name'>1001Nacht Opening Gala Show</p>
              <p className='workshops__item-place'>Ort: Am Alten Gymnasium 1, Neuruppin</p>
            </li>
          </ul>
        </section>
        <section className='workshops__section'>
          <h2 className='main__subheader workshops__white'>Samstag 07.10.2023</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>Ab 09:00-18:00</p>
              <p className='workshops__item-name'>Wettbewerbe</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>19:30</p>
              <p className='workshops__item-name'>1001Nacht Stars Gala Show</p>
              <p className='workshops__item-place'>Ort: Am alten Gymnasium 1, Neuruppin</p>
            </li>
          </ul>
        </section>
        <section className='workshops__section'>
          <h2 className='main__subheader workshops__white'>Sonntag 08.10.2023</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>09:00-11:00</p>
              <p className='workshops__item-name'>1. Rayana</p>
              <p className='workshops__item-topic'>Tabla Solo Choreografie</p>
              <p className='workshops__item-name'>2. Marina</p>
              <p className='workshops__item-topic'>Baladi Choreografie</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>11:15-13:15</p>
              <p className='workshops__item-name'>Shalymar</p>
              <p className='workshops__item-topic'>Schleier Traum Choreografie</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>13:30-15:30</p>
              <p className='workshops__item-name'>Leandro Ferreyra</p>
              <p className='workshops__item-topic'>Mejance Choreografie</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>15:45-17:45</p>
              <p className='workshops__item-name'>1. Amira</p>
              <p className='workshops__item-topic'>Pop Choreografie</p>
              <p className='workshops__item-name'>2. Aminahbanu </p>
              <p className='workshops__item-topic'>Grundschritte + kl. TrommelSolo Choreografie</p>
              <p className='workshops__item-place'>Ort: Am Alten Gymnasium 1, Neuruppin</p>
            </li>
          </ul>
        </section>
        {/* <section className='workshops__section_footnotes'>
          <p className='workshops__footnote'>
            Adresse für alle Workshops und Wettbewerbe und 1001Nacht Open Stage-Opening Gala:
            <br />
            Altes Gymnasium Neuruppin
          </p>
          <p className='workshops__footnote'>
            Adresse für Galashow:
            <br />
            Käthe-Kollwitz-Str. 2, Neuruppin
          </p>
        </section> */}
      </div>
    </>
  );
};

export default Workshops;
