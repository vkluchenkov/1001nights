import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import Image from 'next/legacy/image';
import { useEffect, useState } from 'react';
import { ImagePopup } from '../../components/ImagePopup/ImagePopup';

interface Image {
  caption: string | null;
  altText: string;
  large: string;
  small: string;
}

interface GalleryProps {
  images: Image[];
}

const Fotogalerie: NextPage<GalleryProps> = ({ images }) => {
  const [fileList, setFileList] = useState<Image[]>([]);

  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState<string | null>(null);

  useEffect(() => {
    if (images) setFileList(images);
  }, [images]);

  const clickHandler = (image: string) => {
    setisPopupOpen(true);
    setPopupImage(image);
  };

  const closePopupHandler = (e: KeyboardEvent | React.MouseEvent<HTMLElement>) => {
    setisPopupOpen(false);
    setPopupImage(null);
  };

  const imageList = fileList.map((image: Image, index: number) => {
    return (
      <li key={'photo' + index} className='photo__wrapper'>
        <Image
          src={image.small}
          alt={image.altText}
          className='photo'
          layout='fill'
          objectFit='cover'
          objectPosition='top center'
          sizes='
          (max-width: 768px) 450px,
          80vw'
          onClick={() => clickHandler(image.large)}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsbOusBwAFUQIZBX2digAAAABJRU5ErkJggg=='
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
  const { BACKEND } = process.env;
  console.log(BACKEND);

  const client = new ApolloClient({
    uri: BACKEND,
    cache: new InMemoryCache(),
  });

  const GALLERY = gql`
    query {
      gallery(id: 7, idType: DATABASE_ID) {
        galleryImages {
          ...GalleryFields
        }
      }
    }

    fragment GalleryFields on Gallery_Galleryimages {
      images {
        caption
        altText
        large: sourceUrl
        small: sourceUrl(size: MEDIUM)
      }
    }
  `;

  const res = await client.query({
    query: GALLERY,
  });

  if (res?.data) {
    const images = res.data.gallery.galleryImages.images;
    return { props: { images }, revalidate: 30 };
  }

  return { props: { images: [] }, revalidate: 30 };
};

export default Fotogalerie;
