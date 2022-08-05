import type { NextPage } from 'next'
import { Benefit } from '../components/Home-page/benefit';
import { LandingPage } from '../components/Home-page/LandingPage/landingpage';

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
      <Benefit />
    </>
  );
};

export default Home;
