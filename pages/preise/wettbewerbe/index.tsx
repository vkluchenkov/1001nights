import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button/Button';

interface Fields {
  gruppenname?: string;
  name?: string;
  kategorie?: string;
  tanzstil?: string;
  musiktitel?: string;
  choreograf?: string;
  email?: string;
  phone?: string;
}

const ContestRegistration: NextPage = () => {
  const [fieldsErrMsg, setFieldErrMsg] = useState<Fields>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>({ mode: 'all' });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log(data);
  };

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

  const router = useRouter();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const [message, setMessage] = useState('');

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
            <label htmlFor='name' className='form__label'>
              Vorname/Name
            </label>
            <input
              {...register('name', {
                required: true,
                minLength: 2,
                maxLength: 20,
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

          <Button type='submit' className='button' isDisabled={isBtnDisabled}>
            Absenden
          </Button>
          <span className={errors ? 'form__message form__message_error' : 'form__message'}>
            {message}
          </span>
        </form>
      </div>
    </>
  );
};

export default ContestRegistration;
