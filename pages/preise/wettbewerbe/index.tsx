import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button/Button';

interface ContestResults {
  gruppenname?: string;
  name?: string;
  kategorie?: string;
  tanzstil?: string;
  musiktitel?: string;
  choreograf?: string;
  email?: string;
  phone?: string;
}

interface FieldError {
  isValid: boolean;
  message: string;
}

interface FieldErrors {
  gruppenname?: FieldError;
  name?: FieldError;
  kategorie?: FieldError;
  tanzstil?: FieldError;
  musiktitel?: FieldError;
  choreograf?: FieldError;
  email?: FieldError;
  phone?: FieldError;
}

const ContestRegistration: NextPage = () => {
  const router = useRouter();

  const [results, setResults] = useState<ContestResults>({});
  const [errors, setErrors] = useState<FieldErrors>({
    gruppenname: {
      isValid: true,
      message: '',
    },
    name: {
      isValid: true,
      message: '',
    },
    kategorie: {
      isValid: true,
      message: '',
    },
    tanzstil: {
      isValid: true,
      message: '',
    },
    musiktitel: {
      isValid: true,
      message: '',
    },
    choreograf: {
      isValid: true,
      message: '',
    },
    email: {
      isValid: true,
      message: '',
    },
    phone: {
      isValid: true,
      message: '',
    },
  });

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const [message, setMessage] = useState('');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const form: HTMLFormElement | null = document.querySelector('.form__container');
    const target = e.target as HTMLInputElement;

    setResults((prev) => {
      const copy: ContestResults = JSON.parse(JSON.stringify(prev));
      copy[target.name as keyof ContestResults] = target.value;
      console.log(copy);
      return copy;
    });

    setErrors((prev) => {
      const copy: FieldErrors = JSON.parse(JSON.stringify(prev));
      copy[target.name as keyof FieldErrors] = {
        isValid: target.checkValidity(),
        message: target.validationMessage,
      };
      console.log(copy);
      return copy;
    });

    setIsBtnDisabled(!form!.checkValidity());
  };

  // const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setIsFormDisabled(true);
  //   setIsBtnDisabled(true);
  //   // setIsError(false);
  //   // setMessage('');

  //   try {
  //     const res = await fetch(`/api/forms`, {
  //       method: 'POST',
  //       body: JSON.stringify(results),
  //     });
  //     if (res.status === 200) {
  //       setIsBtnDisabled(true);
  //       setMessage('Danke, Deine Registrierung ist gesendet');

  //       await setTimeout(() => {
  //         router.push('/danke');
  //       }, 3000);
  //     }
  //   } catch (error) {
  //     // setIsError(true);
  //     setMessage('Hoppla, etwas ist schief gelaufen, bitte versuche es nochmals');
  //     console.log(error);
  //   } finally {
  //     setIsBtnDisabled(false);
  //     setIsFormDisabled(false);
  //   }
  // };

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

        <form className='form__container' noValidate /*onSubmit={submitHandler}*/>
          <div className='form__input-wrapper'>
            <label htmlFor='name' className='form__label'>
              Vorname/Name
            </label>
            <input
              className={errors.name?.isValid ? 'form__input' : 'form__input form__input_error'}
              type='text'
              name='name'
              required
              minLength={2}
              maxLength={40}
              value={results.name || ''}
              onChange={handleInputChange}
              placeholder='Deine Vorname/Name'
              disabled={isFormDisabled}
            />
            <span className='form__error'>{errors.name?.message || ''}</span>
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
