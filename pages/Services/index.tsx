import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Services/title';
import { Portfolio } from '../../components/Services/Portfolio/portfolio';
import { Interested } from '../../components/Services/interested';

const Services: NextPage = () => {
    return (
      <>
        <Head>
          <title>Services</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <Title />
        <Portfolio />
        <Interested />
        <Footer />
      </>
    );
  };
  
  export default Services;