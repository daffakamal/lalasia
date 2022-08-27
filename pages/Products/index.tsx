import type { NextPage } from 'next';
import { Navbar } from '../../components/Layout/Navbar';
import { Title } from '../../components/Products/title';

const Products: NextPage = () => {
    return (
      <>
        <Navbar />
        <Title />
      </>
    );
  };
  
  export default Products;