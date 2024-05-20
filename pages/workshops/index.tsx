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
        <h1 className='main__header'>Termine und Workshops&nbsp;2024</h1>
        <section className='workshops__section'>
          <h2 className='main__subheader workshops__white'>Freitag 11.10.2024</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>12:00-14:00</p>
              <p className='workshops__item-name'>Leandro Ferreyra</p>
              <p className='workshops__item-topic'>Saidi</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>14:15-16:15</p>
              <p className='workshops__item-name'>Sofiia Varshavskaia</p>
              <p className='workshops__item-topic'>Pop</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>16:30-18:30</p>
              <p className='workshops__item-name'>Aliah</p>
              <p className='workshops__item-topic'>Mejansé</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>18:45-20:45</p>
              <p className='workshops__item-name'>Nadine Etlah</p>
              <p className='workshops__item-topic'>Balady</p>
            </li>
          </ul>
        </section>
        <section className='workshops__section'>
          <h2 className='main__subheader workshops__white'>Samstag 12.10.2024</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>Ab 09:00-16:00</p>
              <p className='workshops__item-name'>Wettbewerbe</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>18:00</p>
              <p className='workshops__item-name'>1001Nacht Stars Gala Show</p>
            </li>
          </ul>
        </section>
        <section className='workshops__section'>
          <h2 className='main__subheader workshops__white'>Sonntag 13.10.2024</h2>
          <ul className='workshops__items'>
            <li className='workshops__item'>
              <p className='workshops__item-time'>10:00-12:00</p>
              <p className='workshops__item-name'>Leandro Ferreyra</p>
              <p className='workshops__item-topic'>Trommel Solo</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>12:30-14:30</p>
              <p className='workshops__item-name'>Svetare</p>
              <p className='workshops__item-topic'>Fächerschleier</p>
            </li>
            <li className='workshops__item'>
              <p className='workshops__item-time'>16:00</p>
              <p className='workshops__item-name'>1001Nacht Closing Gala</p>
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
