import React, { useState, useRef, useEffect } from 'react';
import Img from 'gatsby-image';

import { formatPrice, calculateTotalPrice } from 'helpers/index';

export default function CartItem({ product, quantity, set, remove }) {
  const { name, id, localFiles } = product;
  const { unit_amount, currency } = product.price;

  const [totalCost, setTotalCost] = useState(calculateTotalPrice(unit_amount, quantity, currency));
  const quantityInput = useRef();

  const price = formatPrice(unit_amount, currency);

  useEffect(() => {
    quantityInput.current.value = quantity;
  }, []);

  function updateQuantity(currentQuantity) {
    set(id, parseInt(currentQuantity));
    setTotalCost(calculateTotalPrice(unit_amount, currentQuantity, currency));
  }

  return (
    <div className="flex justify-end pt-8">
      <Img className="w-48 mr-12" fluid={localFiles[0].childImageSharp.fluid} alt={name} />
      <div className="w-1/6">
        <p className="font-header1 text-darkRed tracking-widest">{name}</p>
        <button
          className="font-header1 text-lightRed tracking-widest italic text-xs"
          onClick={() => remove(id)}
        >
          Remove
        </button>
      </div>
      <p className="w-1/6 font-header2 text-darkGreen tracking-widest">{price}</p>
      <div className="w-1/6">
        <input
          type="number"
          autoComplete="off"
          ref={quantityInput}
          onChange={(e) => updateQuantity(e.target.value)}
          className="font-body text-darkGreen outline-none bg-inputBoxes h-10 w-24 p-2 text-sm"
        />
      </div>
      <p className="w-1/6 font-header2 text-darkGreen tracking-widest">{totalCost}</p>
    </div>
  );
}
