import type { NextPage } from 'next';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button/Button';

interface WorkshopsPayload {
  type: 'workshops';
  name: string;
  email: string;
  phone: string;
  ws: string;
}

const WorkshopsRegistration: NextPage = () => {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [nameValidationMsg, setNameValidationMsg] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailValidationMsg, setEmailValidationMsg] = useState('');

  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [phoneValidationMsg, setPhoneValidationMsg] = useState('');

  const [ws, setWs] = useState('');
  const [isWsValid, setIsWsValid] = useState(true);
  const [wsValidationMsg, setWsValidationMsg] = useState('');

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const [isError, setIsError] = useState('');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const form: HTMLFormElement | null = document.querySelector('.form__container');
    const target = e.target as HTMLInputElement;

    if (target.name === 'name') {
      setName(target.value);
      setIsNameValid(target.checkValidity());
      setNameValidationMsg(target.validationMessage);
    }

    if (target.name === 'email') {
      setEmail(target.value);
      setIsEmailValid(target.checkValidity());
      setEmailValidationMsg(target.validationMessage);
    }

    if (target.name === 'phone') {
      setPhone(target.value);
      setIsPhoneValid(target.checkValidity());
      setPhoneValidationMsg(target.validationMessage);
    }

    if (target.name === 'workshops') {
      setWs(target.value);
      setIsWsValid(target.checkValidity());
      setWsValidationMsg(target.validationMessage);
    }
    setIsBtnDisabled(!form!.checkValidity());
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError('');
    const payload: WorkshopsPayload = {
      type: 'workshops',
      name,
      email,
      phone,
      ws,
    };

    try {
      const res = await fetch(`/api/forms`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      if (res.status === 200) {
        console.log(await res.json());
        setName('');
        setEmail('');
        setPhone('');
        setWs('');
        setIsBtnDisabled(true);
      }
    } catch (error) {
      setIsError('Something went wrong... Please try again later');
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Anmeldung Workshops | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container'>
        <h1 className='main__header'>Anmeldung Workshops</h1>
        <form className='form__container' noValidate onSubmit={submitHandler}>
          <div className='form__input-wrapper'>
            <label htmlFor='name' className='form__label'>
              Vorname/Name
            </label>
            <input
              className={isNameValid ? 'form__input' : 'form__input form__input_error'}
              type='text'
              name='name'
              required
              minLength={2}
              maxLength={40}
              value={name}
              onChange={handleInputChange}
              placeholder='Input your name'
            />
            <span className='form__error'>{nameValidationMsg}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='email' className='form__label'>
              Email
            </label>
            <input
              className={isEmailValid ? 'form__input' : 'form__input form__input_error'}
              type='email'
              name='email'
              required
              value={email}
              onChange={handleInputChange}
              placeholder='email@example.com'
            />
            <span className='form__error'>{emailValidationMsg}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='phone' className='form__label'>
              Telefonnummer
            </label>
            <input
              className={isPhoneValid ? 'form__input' : 'form__input form__input_error'}
              type='tel'
              name='phone'
              required
              value={phone}
              onChange={handleInputChange}
              minLength={7}
              maxLength={20}
              placeholder='+49 999 99 99'
            />
            <span className='form__error'>{phoneValidationMsg}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='workshops' className='form__label'>
              Workshop Einzeln/FullPack
            </label>
            <input
              className={isWsValid ? 'form__input' : 'form__input form__input_error'}
              type='text'
              name='workshops'
              required
              value={ws}
              onChange={handleInputChange}
              placeholder='Workshops name / FullPack'
            />
            <span className='form__error'>{wsValidationMsg}</span>
          </div>
          <Button type='submit' className='button' isDisabled={isBtnDisabled}>
            Absenden
          </Button>
          <span className='form__submit-error'>{isError}</span>
        </form>
      </div>
    </>
  );
};

export default WorkshopsRegistration;
