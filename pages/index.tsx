import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import poster from '../public/images/poster.jpg';

const Home: NextPage = () => {
  return (
    <div className='content__container home__container'>
      <Head>
        <title>1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <h1 className='main__header'>Willkommen</h1>
      <section className='intro'>
        <p className='main__text'>
          Zu meinem fünften Orientalischen Tanz Festival 14.-16.10.2022 in Neuruppin.
        </p>
        <p className='main__text'>Dich erwarten:</p>
        <ul className='main__bullets'>
          <li className='main__bullet'>
            drei Tage /12 Stunden Workshops mit internationalen Dozenten
          </li>
          <li className='main__bullet'>
            außerdem finden Internationale Wettbewerbe Sonntag 16.10.22 mit tollen Gewinnen
          </li>
          <li className='main__bullet'>
            Highlight 1001Nacht Open Stage-Opening Show am Freitag 14.10.22 und 1001Nacht Galashow
            am Samstag 15.10.22
          </li>
          <li className='main__bullet'>Bazar mit Bauchtanz Kleidung und Training-Kostüme</li>
          <li className='main__bullet'>
            Professionelle Fotos von André Elbing und Videos von Vladimir Kluchenkov
          </li>
        </ul>
      </section>
      <div className='main__poster-container'>
        <Image
          src={poster}
          alt='1001 Nacht festival poster'
          layout='responsive'
          className='main__poster'
        />
      </div>
      <section className='stars'>
        <h3 className='main__subheader stars__subheader'>
          Unsere&nbsp;Dozenten in&nbsp;diesem&nbsp;Jahr:
        </h3>
        <ul className='stars__bullets'>
          <li className='stars__bullet'>Shalymar</li>
          <li className='stars__bullet'>Ofra Moustakis</li>
          <li className='stars__bullet'>Alice Bloom</li>
          <li className='stars__bullet'>Rayana</li>
          <li className='stars__bullet'>Ranin</li>
          <li className='stars__bullet'>Dalon</li>
        </ul>
      </section>
      <section className='info'>
        <p className='main__text info__text'>
          <span className='main__text_strong'>Organisator:</span> Nafisa
        </p>
        <p className='main__text info__text'>
          Ich freue mich von ganzem Herzen dieses außergewöhnliche Tanzwochenende wieder
          präsentieren zu dürfen und Euch wiederzusehen!
        </p>
        <h3 className='info__header'>Übernachtungsmöglichkeitenin der&nbsp;Nähe:</h3>
        <ul className='info__links'>
          <li>
            <a
              href='https://www.cafe-pension-huth.de'
              target='_blank'
              rel='noreferrer'
              className='info__link'
            >
              www.cafe-pension-huth.de
            </a>
          </li>
          <li>
            <a
              href='https://www.restaurantrosengarten.top'
              target='_blank'
              rel='noreferrer'
              className='info__link'
            >
              www.restaurantrosengarten.top
            </a>
          </li>
          <li>
            <a
              href='https://www.fiddlers-inn-neuruppin.de'
              target='_blank'
              rel='noreferrer'
              className='info__link'
            >
              www.fiddlers-inn-neuruppin.de
            </a>
          </li>
          <li>
            <a
              href='https://www.resort-mark-brandenburg.de'
              target='_blank'
              rel='noreferrer'
              className='info__link'
            >
              www.resort-mark-brandenburg.de
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
