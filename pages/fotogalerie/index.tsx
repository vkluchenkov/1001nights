import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import path from 'path';
import { promises as fs } from 'fs';
import Image from 'next/image';
import { useState } from 'react';
import { ImagePopup } from '../../components/ImagePopup/ImagePopup';

interface FotoProps {
  fileList: string[];
}

const Fotogalerie: NextPage<FotoProps> = ({ fileList }) => {
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const clickHandler = (image: string) => {
    setisPopupOpen(true);
    setPopupImage(image);
  };

  const closePopupHandler = (e: KeyboardEvent | React.MouseEvent<HTMLElement>) => {
    setisPopupOpen(false);
    setPopupImage(null);
  };

  const imageList = fileList.map((file, index) => {
    const url = '/images/gallery/' + file;
    return (
      <li key={'photo' + index} className='photo__wrapper'>
        <Image
          src={url}
          alt=''
          className='photo'
          layout='fill'
          objectFit='cover'
          objectPosition='top center'
          sizes='
          (max-width: 768px) 450px,
          80vw'
          onClick={() => clickHandler(url)}
        />
      </li>
    );
  });

  return (
    <>
      <Head>
        <title>Fotogalerie | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container'>
        <h1 className='main__header'>Fotogalerie</h1>
        <ul className='photos'>{imageList}</ul>
      </div>
      <ImagePopup image={popupImage} isOpen={isPopupOpen} onClose={closePopupHandler} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const galleryFolder = path.resolve(__dirname, '../../../public/images/gallery');
  const fileList = await fs.readdir(galleryFolder);

  return {
    props: {
      fileList,
    },
  };
};

export default Fotogalerie;
