import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../../components/Layout/Footer';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Products/title';
import { TotalProduct } from '../../components/Products/totalProduct';

const Products: NextPage = () => {
    return (
      <>
        <Head>
          <title>Products</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <Title />
        <TotalProduct />
        <Footer />
      </>
    );
  };
  
  export default Products;