import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../../components/Button/Button';

const Wettbewerbe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wettbewerbe | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container'>
        <h1 className='main__header'>Wettbewerbe</h1>
        {/* <h2 className='main__subheader'>Achtung!</h2>
        <p className='main__text'>
          Die Teilnahme an Wettbewerben möglich nur mit Verbindung der Buchung mind. 2 Workshops
        </p> */}

        <h2 className='main__subheader contest__subheader'>1. Kategorien</h2>
        <h3 className='contest__category'>Baby (4-8)</h3>
        <ul className='contest__items'>
          <li className='contest__item'>Solo (alle Stile)</li>
        </ul>

        <h3 className='contest__category'>Kinder (9-11)</h3>
        <ul className='contest__items'>
          <li className='contest__item'>Solo (alle Stile)</li>
          <li className='contest__item'>Duo (alle Stile)</li>
          <li className='contest__item'>Gruppe (alle Stile)</li>
        </ul>

        <h3 className='contest__category'>Junior (12-17)</h3>
        <ul className='contest__items'>
          <li className='contest__item'>Solo klassisch</li>
          <li className='contest__item'>Solo Folklore</li>
          <li className='contest__item'>Solo Tabla CD</li>
          <li className='contest__item'>Solo Fusion</li>
          <li className='contest__item'>Solo Modern</li>
          <li className='contest__item'>Duo (alle Stile)</li>
          <li className='contest__item'>Gruppe (alle Stile)</li>
        </ul>

        <h3 className='contest__category'>Erwachsene Professional (18+)</h3>
        <ul className='contest__items'>
          <li className='contest__item'>Solo klassisch</li>
          <li className='contest__item'>Solo Folklore</li>
          <li className='contest__item'>Solo Tabla CD</li>
          <li className='contest__item'>Solo Fusion</li>
          <li className='contest__item'>Solo Modern (Pop/Lyrik)</li>
          <li className='contest__item'>Duo (alle Stile)</li>
          <li className='contest__item'>Gruppe (alle Stile)</li>
        </ul>

        <h3 className='contest__category'>Erwachsene Semi-Professional (18+)</h3>
        <ul className='contest__items'>
          <li className='contest__item'>Solo klassisch</li>
          <li className='contest__item'>Solo Folklore</li>
          <li className='contest__item'>Solo Tabla CD</li>
          <li className='contest__item'>Solo Fusion</li>
          <li className='contest__item'>Solo Modern (Pop/Lyrik)</li>
        </ul>

        <h3 className='contest__category'>Ladys (40+)</h3>
        <ul className='contest__items'>
          <li className='contest__item'>Solo klassisch</li>
          <li className='contest__item'>Solo Folklore</li>
          <li className='contest__item'>Solo Tabla CD</li>
          <li className='contest__item'>Solo Fusion</li>
          <li className='contest__item'>Solo Modern</li>
        </ul>

        <h2 className='main__subheader contest__subheader'>2. Musik Länge</h2>
        <ul className='contest__items'>
          <li className='contest__item'>Solo (alle Stile ) bis 3.30 Minuten</li>
          <li className='contest__item'>Gruppen und Duos: bis 4 Minuten</li>
        </ul>

        <h2 className='main__subheader contest__subheader'>3. Preise</h2>
        <p className='main__text'>
          Der Gewinner der Kategorie klassisch Professional wird nächstes Jahr an der 1001Nacht
          GalaShow teilnehmen, und einen Workshop anbieten. Die Gewinner der anderen Kategorien
          Bereich Solo können sich auf Kronen, Medaillen , Zertifikate und Geschenke von Sponsoren
          freuen.
        </p>
        <p className='main__text'>
          Bitte Musik an <a href='mailto:nafisa@mac.com'>nafisa@mac.com</a> senden. Mit Name,
          Musiktitel, Musiklänge, für welche Show/Wettbewerb
        </p>
      </div>
    </>
  );
};

export default Wettbewerbe;
