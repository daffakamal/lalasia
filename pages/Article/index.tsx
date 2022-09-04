import type { NextPage } from 'next';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Article/title';
import { DailyNews } from '../../components/Article/dailyNews';

const Article: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <DailyNews />
        <Footer />
      </>
    );
  };
  
  export default Article;