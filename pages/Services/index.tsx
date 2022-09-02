import type { NextPage } from 'next';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Services/title';
import { Portfolio } from '../../components/Services/Portfolio/portfolio';
import { Interested } from '../../components/Services/interested';

const Services: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <Portfolio />
        <Interested />
        <Footer />
      </>
    );
  };
  
  export default Services;