import type { NextPage } from 'next';
import { Footer } from '../../../components/Layout/Footer';
import { Navbar } from '../../../components/Layout/Navbar';
import { Title } from '../../../components/Article/DetailArticle/bedroom_design/title';
import { Content } from '../../../components/Article/DetailArticle/bedroom_design/content';

const Bedroom: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <Content />
        <Footer />
      </>
    );
  };
  
  export default Bedroom;