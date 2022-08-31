import type { NextPage } from 'next';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Services/title';

const Services: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <Footer />
      </>
    );
  };
  
  export default Services;