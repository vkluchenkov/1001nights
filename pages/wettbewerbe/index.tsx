import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../../components/Button/Button';

const Wettbewerbe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wettbewerbe | 1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <div className='content__container'>
        <h1 className='main__header'>Wettbewerbe</h1>
      </div>
    </>
  );
};

export default Wettbewerbe;
