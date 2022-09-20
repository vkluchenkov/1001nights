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
    const pattern = /[0-9]/g;
    if (target.value.match(pattern) || target.value == '') setSum(parseInt(target.value));
  };

  const PayPalLinkHandler = () => {
    window.open(`${payPalMeLink}${sum + fee}eur`, '_blank');
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    PayPalLinkHandler();
    setSum(0);
    setFee(0);
    setIsBtnDisabled(true);
    onClose();
  };

  return (
    <form className='PayPal' noValidate onSubmit={submitHandler}>
      <h2 className='main__subheader danke__subheader'>PayPal</h2>
      <label htmlFor='sum' className='PayPalLabel'>
        Gebe Deine Betrag ein
      </label>
      <div className='PayPal__input-wrapper'>
        <span className='PayPal__euro-sign'>€</span>
        <input
          type='number'
          className='PayPalInput'
          onChange={handleInputChange}
          value={isNaN(sum) ? '' : sum}
          min={0}
        />
      </div>
      {sum > 0 ? <p className='main__text'>PayPal Gebühren (5%): €{fee}</p> : <></>}
      <Button type='submit' isDisabled={isBtnDisabled}>
        {sum > 0 ? `Bezahle €${sum + fee} mit Paypal` : 'Bezahle mit Paypal'}
      </Button>
    </form>
  );
};
