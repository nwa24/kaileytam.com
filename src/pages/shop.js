import React from 'react';

import Footer from 'components/footer';
import Header from 'components/header';
import ProductListing from 'components/product-listing';

export default function ShopPage() {
  return (
    <div id="page-container" className="relative min-h-screen">
      <Header pageTitle={'Shop'} />
      <div id="content-wrap" className="pb-20 pt-24">
        <ProductListing />
      </div>
      <Footer />
    </div>
  );
}
