import type { NextPage } from 'next'
import { Article } from '../components/Home-page/Article/article';
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
      <Article />
    </>
  );
};

export default Home;
