import type { NextPage } from 'next';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Article/title';
import { DailyNews } from '../../components/Article/dailyNews';
import { TrendingTopics } from '../../components/Article/Trending-topics/trendingTopics';
import { Subscribe } from '../../components/Article/subscribe';

const Article: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <DailyNews />
        <TrendingTopics />
        <Subscribe />
        <Footer />
      </>
    );
  };
  
  export default Article;