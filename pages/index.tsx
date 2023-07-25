import type { NextPage } from 'next';
import Head from 'next/head';
import Image, { StaticImageData } from "next/legacy/image";
import { useState } from 'react';
import { ImagePopup } from '../components/ImagePopup/ImagePopup';
import poster from '../public/images/poster1.jpg';

const Home: NextPage = () => {
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState<string | null | StaticImageData>(null);

  const clickHandler = (image: string | StaticImageData) => {
    setisPopupOpen(true);
    setPopupImage(image);
  };

  const closePopupHandler = (e: KeyboardEvent | React.MouseEvent<HTMLElement>) => {
    setisPopupOpen(false);
    setPopupImage(null);
  };

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
          Herzlich willkommen zu den 1001Nacht internationalen orientalischen Festival in Neuruppin
          am 06.-08.10.2023
        </p>
        <p className='main__text'>Dich erwarten:</p>
        <ul className='main__bullets'>
          <li className='main__bullet'>
            Zwei Tage / 20 Stunden Workshops mit internationalen Dozenten
          </li>
          <li className='main__bullet'>
            Außerdem finden internationale Wettbewerbe am Samstag 07.10.2023 mit tollen Gewinnen
            statt
          </li>
          <li className='main__bullet'>
            1001Nacht Opening Gala Show am 06.10.2023 und 1001Nacht Stars Gala Show am Samstag
            07.10.2023
          </li>
          <li className='main__bullet'>
            Basar mit internationalen Händlern für Tanz.-und Trainingskostüme und Zubehör
          </li>
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
          onClick={() => clickHandler(poster)}
          placeholder='blur'
        />
      </div>
      <section className='stars'>
        <h3 className='main__subheader stars__subheader'>
          Unsere&nbsp;Dozenten in&nbsp;diesem&nbsp;Jahr:
        </h3>
        <ul className='stars__bullets'>
          <li className='stars__bullet'>Leandro Ferreyra</li>
          <li className='stars__bullet'>Shalymar</li>
          <li className='stars__bullet'>Aliah</li>
          <li className='stars__bullet'>Rayana</li>
          <li className='stars__bullet'>Amira</li>
          <li className='stars__bullet'>Aminahbanu</li>
          <li className='stars__bullet'>Marina Nickel</li>
          <li className='stars__bullet'>Yela</li>
        </ul>
      </section>
      <section className='info'>
        <p className='main__text info__text'>
          <span className='main__text_strong'>Organisator:</span> Nafisa
        </p>
        <p className='main__text info__text'>
          Ich freue mich von ganzem Herzen diese außergewöhnliche Tanzwochenende wieder präsentieren
          zu dürfen und Euch wiederzusehen!
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
      <ImagePopup image={popupImage} isOpen={isPopupOpen} onClose={closePopupHandler} />
    </div>
  );
};

export default Home;
