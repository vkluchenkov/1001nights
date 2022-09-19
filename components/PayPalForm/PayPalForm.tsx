import { FormEvent, useEffect, useState } from 'react';
import { payPalMeLink } from '../../utils/constants';
import { Button } from '../Button/Button';

interface PayPalProps {
  onClose: () => void;
}

export const PayPalForm: React.FC<PayPalProps> = ({ onClose }) => {
  const [sum, setSum] = useState(0);
  const [fee, setFee] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    setFee(Math.round((sum * 100 * 5) / 100) / 100);
  }, [sum]);

  useEffect(() => {
    if (fee > 0) setIsBtnDisabled(false);
    else setIsBtnDisabled(true);
  }, [isBtnDisabled, fee]);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSum(parseFloat(target.value));
  };

  const PayPalLinkHandler = () => {
    window.open(`${payPalMeLink}${sum + fee}eur`, '_blank');
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    PayPalLinkHandler();
    setSum(0);
    setFee(0);
    setIsBtnDisabled(true);
    onClose();
  };

  const handleFocus = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.select();
  };

  return (
    <form className='PayPal' noValidate onSubmit={submitHandler}>
      <h2 className='main__subheader danke__subheader'>PayPal</h2>
      <label htmlFor='sum' className='PayPalLabel'>
        Enter your amount
      </label>
      <input
        type='number'
        className='PayPalInput'
        onChange={handleInputChange}
        value={sum}
        min={0}
        onFocus={handleFocus}
      />
      {sum > 0 ? <p className='main__text'>PayPal handling fee (5%): €{fee}</p> : <></>}
      <Button type='submit' isDisabled={isBtnDisabled}>
        {sum > 0 ? `Pay €${sum + fee} with PayPal` : 'Pay with PayPal'}
      </Button>
    </form>
  );
};
