import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { ContestFields as Fields, ContestPayload } from '../../../utils/types';

const ContestRegistration: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>({ mode: 'onChange' });

  const router = useRouter();

  const [fieldsErrMsg, setFieldErrMsg] = useState<Partial<Fields>>({});
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const form: HTMLFormElement | null = document.querySelector('.form__container');
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const errMessage = target.validationMessage;
    setFieldErrMsg((prev) => ({ ...prev, [name]: errMessage }));
    setIsBtnDisabled(!form!.checkValidity());
  };

  const onSubmit: SubmitHandler<Fields> = async (data) => {
    setIsFormDisabled(true);
    setIsBtnDisabled(true);
    setIsError(false);
    setMessage('');
    const payload: ContestPayload = { ...data, type: 'contest' };

    try {
      const res = await fetch(`/api/forms`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      if (res.status === 200) {
        setMessage('Danke, Deine Registrierung ist gesendet');
        await setTimeout(() => {
          router.push('/danke');
        }, 3000);
      }
    } catch (error) {
      setIsError(true);
      setMessage('Hoppla, etwas ist schief gelaufen, bitte versuche es nochmals');
      console.log(error);
    } finally {
      setIsBtnDisabled(false);
      setIsFormDisabled(false);
    }
  };

  return (
    <>
      <Head>
        <title>Anmeldung Wettbewerbe | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container'>
        <h1 className='main__header'>Anmeldung Wettbewerbe</h1>

        <form className='form__container' noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className='form__input-wrapper'>
            <label htmlFor='gruppenname' className='form__label'>
              Künstlernahme/Gruppenname
            </label>
            <input
              {...register('gruppenname', {
                required: true,
                maxLength: 30,
                onChange: handleInputChange,
              })}
              name='gruppenname'
              required
              maxLength={30}
              placeholder='Deine Kunstlername'
              className={errors.gruppenname ? 'form__input form__input_error' : 'form__input'}
            />
            <span className='form__error'>{fieldsErrMsg.gruppenname}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='name' className='form__label'>
              Echte Name/Vorname
            </label>
            <input
              {...register('name', {
                required: true,
                maxLength: 20,
                onChange: handleInputChange,
              })}
              name='name'
              required
              maxLength={20}
              placeholder='Deine Name/Vorname'
              className={errors.name ? 'form__input form__input_error' : 'form__input'}
            />
            <span className='form__error'>{fieldsErrMsg.name}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='kategorie' className='form__label'>
              Kategorie
            </label>
            <input
              {...register('kategorie', {
                required: true,
                maxLength: 50,
                onChange: handleInputChange,
              })}
              name='kategorie'
              required
              maxLength={50}
              placeholder='Profi/Semi/Ladies/Gruppe/Duo/Kinder'
              className={errors.kategorie ? 'form__input form__input_error' : 'form__input'}
            />
            <span className='form__error'>{fieldsErrMsg.kategorie}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='tanzstil' className='form__label'>
              Tanzstil
            </label>
            <input
              {...register('tanzstil', {
                required: true,
                maxLength: 20,
                onChange: handleInputChange,
              })}
              name='tanzstil'
              required
              maxLength={20}
              placeholder='Klassik,Folklore,Fusion…'
              className={errors.tanzstil ? 'form__input form__input_error' : 'form__input'}
            />
            <span className='form__error'>{fieldsErrMsg.tanzstil}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='musiktitel' className='form__label'>
              Musiktitel/Interpret
            </label>
            <input
              {...register('musiktitel', {
                required: true,
                maxLength: 50,
                onChange: handleInputChange,
              })}
              name='musiktitel'
              required
              maxLength={50}
              placeholder='Musikname und Länge'
              className={errors.musiktitel ? 'form__input form__input_error' : 'form__input'}
            />
            <span className='form__error'>{fieldsErrMsg.musiktitel}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='email' className='form__label'>
              Email
            </label>
            <input
              {...register('email', {
                required: true,
                onChange: handleInputChange,
                disabled: isFormDisabled,
              })}
              className={fieldsErrMsg.email ? 'form__input form__input_error' : 'form__input'}
              type='email'
              name='email'
              required
              placeholder='email@zumbeispiel.com'
            />
            <span className='form__error'>{fieldsErrMsg.email}</span>
          </div>

          <div className='form__input-wrapper'>
            <label htmlFor='phone' className='form__label'>
              Telefonnummer
            </label>
            <input
              {...register('phone', {
                required: true,
                minLength: 7,
                maxLength: 20,
                onChange: handleInputChange,
                disabled: isFormDisabled,
              })}
              className={errors.phone ? 'form__input form__input_error' : 'form__input'}
              type='tel'
              name='phone'
              required
              minLength={7}
              maxLength={20}
              placeholder='+4999999999'
            />
            <span className='form__error'>{fieldsErrMsg.phone}</span>
          </div>

          <Button type='submit' className='button' isDisabled={isBtnDisabled}>
            Absenden
          </Button>
          <span className={isError ? 'form__message form__message_error' : 'form__message'}>
            {message}
          </span>
        </form>
      </div>
    </>
  );
};

export default ContestRegistration;
