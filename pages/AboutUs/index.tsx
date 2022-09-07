import type { NextPage } from 'next';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/About/title';
import { OurMission } from '../../components/About/ourMission';

const About: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <OurMission />
        <Footer />
      </>
    );
  };
  
  export default About;