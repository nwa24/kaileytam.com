import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/nav-bar';
import ProductListing from '../components/product-listing';
import Footer from '../components/footer';

const shop = () => {
  return (
    <div id="page-container" className="relative min-h-screen">
      <Helmet>
        <style>{'body { background-color: #f7f3e9; overflow-x: hidden }'}</style>
        <title>Kailey Tam - Shop</title>
      </Helmet>
      <Navbar />
      <div id="content-wrap" className="pb-20 pt-24">
        <ProductListing />
      </div>
      <Footer />
    </div>
  );
};

export default shop;
