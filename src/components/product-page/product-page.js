import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';

import Navbar from '../nav-bar';
import Footer from '../footer';
import { useProductContext } from '../../context/ProductsProvider';
import { formatPrice } from '../../helpers/index';

// TODO
//  - Style each of the individual components
//  - Position the elements properly on the page

const ProductPage = ({ productId }) => {
  const { products, prices } = useProductContext();
  const { name, localFiles, description } = products[productId];
  const { unit_amount, currency } = prices[productId];

  const price = formatPrice(unit_amount, currency);

  return (
    <div id="page-container" className="relative min-h-screen">
      <Helmet>
        <style>{'body { background-color: #f7f3e9; overflow-x:hidden }'}</style>
        <title>Kailey Tam - {name}</title>
      </Helmet>
      <Navbar />
      <div id="content-wrap" className="pb-20 pt-24">
        <Img fluid={localFiles[0].childImageSharp.fluid} alt={name} />
        <div>{name}</div>
        <div>{price}</div>
        <div>Shipping is calculated at checkout</div>
        <div id="quantity-select">
          <label>Qty</label>
          <select></select>
        </div>
        <div className="font-body text-black">{description}</div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
