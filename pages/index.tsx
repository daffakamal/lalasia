import type { NextPage } from 'next'
import { Article } from '../components/Home-page/Article/article';
import { Benefit } from '../components/Home-page/Benefit/benefit';
import { JoinWithUs } from '../components/Home-page/joinWithUs';
import { LandingPage } from '../components/Home-page/LandingPage/landingpage';
import { Product } from '../components/Home-page/product';
import { Quality } from '../components/Home-page/Quality/quality';
import { Testimony } from '../components/Home-page/Testimony/testimony';
import { Footer } from '../components/Layout/Footer';

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
      <Benefit />
      <Product />
      <Quality />
      <Testimony />
      <Article />
      <JoinWithUs />
      <Footer />
    </>
  );
};

export default Home;
