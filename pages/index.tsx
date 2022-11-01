import type { NextPage } from 'next'
import Head from 'next/head'
import { Article } from '../components/Home-page/Article/article';
import { Benefit } from '../components/Home-page/Benefit/benefit';
import { JoinWithUs } from '../components/Home-page/joinWithUs';
import { LandingPage } from '../components/Home-page/LandingPage/landingpage';
import { Product } from '../components/Home-page/Product/product';
import { Quality } from '../components/Home-page/Quality/quality';
import { Testimony } from '../components/Home-page/Testimony/testimony';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lalasia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
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
