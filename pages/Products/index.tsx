import type { NextPage } from 'next';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Products/title';
import { TotalProduct } from '../../components/Products/totalProduct';

const Products: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
        <TotalProduct />
      </>
    );
  };
  
  export default Products;