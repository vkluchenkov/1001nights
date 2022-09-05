import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../../components/Button/Button';

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
        <h1 className='main__header'>Termine und Workshops&nbsp;2022</h1>
        <section className='workshops__section'>
          <h2 className='main__subheader'>Freitag</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>11:00-13:00</p>
              <p className='workshops__item-name'>Alice Bloom</p>
              <p className='workshops__item-topic'>Mystischer Tribal (Choreografie)</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>13:30-15:30</p>
              <p className='workshops__item-name'>Dalon</p>
              <p className='workshops__item-topic'>Fächer Schleier (Choreografie)</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>16:00-18:00</p>
              <p className='workshops__item-name'>Ofra Moustakis</p>
              <p className='workshops__item-topic'>Yoga für Tänzerinnen</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>19:00</p>
              <p className='workshops__item-name'>1001Nacht Open Stage — Opening&nbsp;Gala</p>
              <p className='workshops__item-topic'>Gala mit Festival Teilnehmerinnen</p>
            </li>
          </ul>
        </section>
        <section className='workshops__section'>
          <h2 className='main__subheader'>Samstag</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>10:00-12:00</p>
              <p className='workshops__item-name'>Shalymar</p>
              <p className='workshops__item-topic'>Klassisches Mejanse (Choreografie)</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>12:30-14:30</p>
              <p className='workshops__item-name'>Rayana</p>
              <p className='workshops__item-topic'>Shaabi nach ukrainischer Art (Choreografie)</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>15:00-17:00</p>
              <p className='workshops__item-name'>Ranin</p>
              <p className='workshops__item-topic'>
                Trommel Solo mit Doppel Schleier (Choreografie)
              </p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>18:30</p>
              <p className='workshops__item-name'>1001Nacht Galashow</p>
              <p className='workshops__item-topic'>Gala Show mit Dozenten</p>
            </li>
          </ul>
        </section>
        <section className='workshops__section'>
          <h2 className='main__subheader'>Sonntag</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>ab 10:00-17:00</p>
              <p className='workshops__item-name'>Wettbewerbe</p>
            </li>
          </ul>
        </section>
        <section className='workshops__section_footnotes'>
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
        </section>
      </div>
    </>
  );
};

export default Workshops;
