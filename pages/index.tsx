import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className='main'></main>
    </>
  );
};

export default Home;
