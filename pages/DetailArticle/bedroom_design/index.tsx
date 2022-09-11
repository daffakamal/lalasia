import type { NextPage } from 'next';
import { Footer } from '../../../components/Layout/Footer';
import { Navbar } from '../../../components/Layout/Navbar';
import { Title } from '../../../components/Article/DetailArticle/bedroom_design/title';
import { Content } from '../../../components/Article/DetailArticle/bedroom_design/content';
import { SimilarTopics } from '../../../components/Article/DetailArticle/similarTopics';
import { Subscribe } from '../../../components/Article/subscribe';

const Bedroom: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <Content />
        <SimilarTopics />
        <Subscribe />
        <Footer />
      </>
    );
  };
  
  export default Bedroom;