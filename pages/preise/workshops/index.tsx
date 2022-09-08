import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button/Button';

interface Fields {
  name?: string;
  email?: string;
  phone?: string;
  workshops?: string;
}

interface WorkshopsPayload {
  type: 'workshops';
  name: string;
  email: string;
  phone: string;
  workshops: string;
}

const WorkshopsRegistration: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>({ mode: 'onChange' });

  const router = useRouter();

  const [fieldsErrMsg, setFieldErrMsg] = useState<Fields>({});

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const form: HTMLFormElement | null = document.querySelector('.form__container');
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const errMessage = target.validationMessage;

    setFieldErrMsg((prev) => {
      return { ...prev, [name]: errMessage };
    });

    setIsBtnDisabled(!form!.checkValidity());
  };

  const onSubmit: SubmitHandler<Fields> = async (data) => {
    setIsFormDisabled(true);
    setIsBtnDisabled(true);
    setIsError(false);
    setMessage('');
    console.log(data);

    try {
      const res = await fetch(`/api/forms`, {
        method: 'POST',
        body: JSON.stringify(data as WorkshopsPayload),
      });
      if (res.status === 200) {
        setIsBtnDisabled(true);
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
        <title>Anmeldung Workshops | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container'>
        <h1 className='main__header'>Anmeldung Workshops</h1>
        <form className='form__container' noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className='form__input-wrapper'>
            <label htmlFor='name' className='form__label'>
              Vorname/Name
            </label>
            <input
              {...register('name', {
                required: true,
                minLength: 2,
                maxLength: 20,
                disabled: isFormDisabled,
                onChange: handleInputChange,
              })}
              name='name'
              required
              minLength={2}
              maxLength={20}
              placeholder='Deine Vorname/Name'
              className={errors.name ? 'form__input form__input_error' : 'form__input'}
            />

            <span className='form__error'>{fieldsErrMsg.name}</span>
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

          <div className='form__input-wrapper'>
            <label htmlFor='workshops' className='form__label'>
              Workshop Einzeln/FullPack
            </label>
            <input
              {...register('workshops', {
                required: true,
                onChange: handleInputChange,
                disabled: isFormDisabled,
              })}
              className={errors.workshops ? 'form__input form__input_error' : 'form__input'}
              name='workshops'
              required
              placeholder='Workshop Name/Fullpack'
            />
            <span className='form__error'>{fieldsErrMsg.workshops}</span>
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

export default WorkshopsRegistration;
