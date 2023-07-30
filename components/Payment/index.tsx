import { Button } from '../Button/Button';
import { PayPalForm } from '../PayPalForm/PayPalForm';

interface PaymentProps {
  isOpen: boolean;
  isBtnHidden: boolean;
  onClick: () => void;
}

export const Payment: React.FC<PaymentProps> = ({ isOpen, onClick, isBtnHidden }) => {
  return (
    <>
      <div className={isOpen ? 'payment-form payment-form_open' : 'payment-form'}>
        <h2 className='main__subheader danke__subheader'>Online-Zahlung</h2>
        <p className='main__text'>
          Bitte überweise den vollständigen Betrag mit Info für welche Wettbewerb / Fullpack / Show
          Freitag / Show Samstag, an das folgende Konto:
        </p>
        <p className='main__text'>
          Nafisa Teichmann
          <br />
          Deutsche Bank
          <br />
          IBAN: DE18 1207 0024 0356 0117 01
          <br />
          BIС: DEUTDEDB160
        </p>
        <PayPalForm onClose={onClick} />
      </div>
      <Button type='button' className='price__button' onClick={onClick} isHidden={isBtnHidden}>
        Zur Kasse
      </Button>
    </>
  );
};
