import Img from 'gatsby-image';
import React, { useRef } from 'react';

import Footer from 'components/footer';
import Header from 'components/header';
import { useCartContext } from 'context/cart-provider';
import { useProductContext } from 'context/products-provider';
import { formatPrice } from 'helpers/index';
import { navigate } from 'gatsby';

export default function ProductPage({ productId }) {
  const { products } = useProductContext();
  const { set, available } = useCartContext();

  const { name, localFiles, description, id } = products[productId];
  const { unit_amount, currency } = products[productId].price;

  const price = formatPrice(unit_amount, currency);

  const quantityInput = useRef();

  return (
    <div id="page-container" className="relative min-h-screen">
      <Header pageTitle={name} />
      <div id="content-wrap" className="pb-20 pt-24 flex justify-evenly flex-wrap">
        <div className="w-full lg:w-2/6 px-2 ml-auto">
          <Img fluid={localFiles[0].childImageSharp.fluid} alt={name} />
        </div>
        <div className="w-full lg:w-2/6 px-2 mr-auto">
          <div className="font-header1 text-darkGreen tracking-widest text-4xl">{name}</div>
          <div className="font-header2 text-darkRed tracking-widest text-2xl">{price}</div>
          <div className="font-body text-darkGreen text-lg pb-8">
            Shipping is calculated at checkout
          </div>
          <label className="font-body text-darkGreen block">Quantity</label>
          <input
            type="number"
            autoComplete="off"
            ref={quantityInput}
            className="font-body text-darkGreen outline-none bg-inputBoxes h-10 w-24 p-2 text-sm"
          />
          <button
            className="mb-8 ml-8 font-header2 uppercase text-darkRed rounded-full p-2 text-sm border-darkRed border-2 hover:bg-darkRed hover:text-white"
            onClick={() => {
              set(id, parseInt(quantityInput.current.value));
              navigate(`/cart`);
            }}
            disabled={!available(id)}
          >
            {available(id) ? 'Add To Cart' : 'Sold Out'}
          </button>
          <div className="font-body text-black pb-20">{description}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
