import type { NextPage } from 'next'
import { Benefit } from '../components/Home-page/Benefit/benefit';
import { LandingPage } from '../components/Home-page/LandingPage/landingpage';
import { Product } from '../components/Home-page/product';
import { Quality } from '../components/Home-page/quality';
import { Testimony } from '../components/Home-page/testimony';

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
      <Benefit />
      <Product />
      <Quality />
      <Testimony />
    </>
  );
};

export default Home;
