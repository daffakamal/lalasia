import type { NextPage } from 'next';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/About/title';
import { OurMission } from '../../components/About/ourMission';
import { OurTeam } from '../../components/About/OurTeam/ourTeam';

const About: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <OurMission />
        <OurTeam />
        <Footer />
      </>
    );
  };
  
  export default About;