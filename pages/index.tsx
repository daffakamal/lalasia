import type { NextPage } from 'next'
import { Benefit } from '../components/Home-page/benefit';
import { LandingPage } from '../components/Home-page/LandingPage/landingpage';
import { Product } from '../components/Home-page/product';

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
      <Benefit />
      <Product />
    </>
  );
};

export default Home;
