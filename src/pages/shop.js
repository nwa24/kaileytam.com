import React from 'react';
import Helmet from 'react-helmet';

import Navbar from 'components/nav-bar';
import ProductListing from 'components/product-listing';
import Footer from 'components/footer';
import Header from 'components/header';

const shop = () => {
  return (
    <div id="page-container" className="relative min-h-screen">
      <Header pageTitle={'Shop'} />
      <div id="content-wrap" className="pb-20 pt-24">
        <ProductListing />
      </div>
      <Footer />
    </div>
  );
};

export default shop;
