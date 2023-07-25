import Image, { StaticImageData } from "next/legacy/image";
import { useEffect } from 'react';

interface ImagePopupProps {
  image: string | null | StaticImageData;
  isOpen: boolean;
  onClose: (e: KeyboardEvent | React.MouseEvent<HTMLElement>) => void;
}

export const ImagePopup: React.FC<ImagePopupProps> = ({ image, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => e.key === 'Escape' && onClose(e);
    if (image) {
      document.addEventListener('keydown', handleEscClose);
      document.body.classList.add('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [image, onClose]);

  return (
    <div className={isOpen ? 'image-popup image-popup_open' : 'image-popup'} onClick={onClose}>
      <div className='image-popup__image-wrapper'>
        <Image
          src={image || '/'}
          alt=''
          layout='fill'
          objectFit='contain'
          objectPosition='center'
          className='image-popup__image'
        />
      </div>
    </div>
  );
};
