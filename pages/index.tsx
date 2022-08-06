import type { NextPage } from 'next'
import { Benefit } from '../components/Home-page/benefit';
import { LandingPage } from '../components/Home-page/LandingPage/landingpage';
import { Product } from '../components/Home-page/product';
import { Quality } from '../components/Home-page/quality';

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
      <Benefit />
      <Product />
      <Quality />
    </>
  );
};

export default Home;
