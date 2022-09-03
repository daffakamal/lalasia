import type { NextPage } from 'next';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Article/title';

const Article: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <Footer />
      </>
    );
  };
  
  export default Article;