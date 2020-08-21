import Img from 'gatsby-image';
import React from 'react';

import Footer from 'components/footer';
import Header from 'components/header';
import { useCartContext } from 'context/cart-provider';
import { useProductContext } from 'context/products-provider';
import { formatPrice } from 'helpers/index';

export default function ProductPage({ productId }) {
  const { products } = useProductContext();
  const { add, toggle, available } = useCartContext();

  const { name, localFiles, description, id } = products[productId];
  const { unit_amount, currency } = products[productId].price;

  const price = formatPrice(unit_amount, currency);

  return (
    <div id="page-container" className="relative min-h-screen">
      <Header pageTitle={name} />
      <div id="content-wrap" className="pb-20 pt-24 flex justify-evenly">
        <div className="sm:w-full md:w-2/6 lg:w-2/6 px-2 ml-auto">
          <Img fluid={localFiles[0].childImageSharp.fluid} alt={name} />
        </div>
        <div className="sm:w-full md:w-2/6 lg:w-2/6 px-2 mr-auto">
          <div className="font-header1 text-darkGreen tracking-widest text-4xl">{name}</div>
          <div className="font-header2 text-darkRed tracking-widest text-2xl">{price}</div>
          <div className="font-body text-darkGreen text-lg pb-8">
            Shipping is calculated at checkout
          </div>
          <label className="font-body text-darkGreen uppercase block">Qty</label>
          <input
            type="number"
            autoComplete="off"
            className="font-body text-darkGreen outline-none bg-inputBoxes h-10 w-24 p-2 text-sm"
          />
          <button
            className="mb-8 ml-8 font-header2 uppercase text-darkRed rounded-full p-2 text-sm border-darkRed border-2 hover:bg-darkRed hover:text-white"
            onClick={() => {
              add(id);
              toggle(true);
            }}
            disabled={!available(id)}
          >
            {available(id) ? 'Add To Cart' : 'Sold Out'}
          </button>
          <div className="font-body text-black">{description}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
