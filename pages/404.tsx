import { NextPage } from 'next';
import Head from 'next/head';

const Custom404: NextPage = () => {
  return (
    <div className='content__container'>
      <Head>
        <title>1001 Nacht festival</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='1001 Nacht festival' />
      </Head>
      <h1 className='main__header'>Nicht Gefunden</h1>
    </div>
  );
};

export default Custom404;
