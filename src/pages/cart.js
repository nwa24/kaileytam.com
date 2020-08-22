import React, { useEffect } from 'react';

import CartItem from 'components/cart-item';
import Footer from 'components/footer';
import Header from 'components/header';
import { useCartContext, CartProvider } from 'context/cart-provider';
import { ProductProvider } from 'context/products-provider';
import { calculateTotalPrice, formatPrice } from 'helpers/index';

function CartListing() {
  const { cart, count, set, remove } = useCartContext();

  const quantityTotalCost = [];
  let subTotal = 0;

  if (count > 0) {
    const { currency } = cart[0][0].price;
    cart.forEach(([product, quantity]) => {
      const { unit_amount } = product.price;
      quantityTotalCost.push(unit_amount * quantity);
    });

    quantityTotalCost.forEach((totalCost) => {
      subTotal = subTotal + totalCost;
    });

    subTotal = formatPrice(subTotal, currency);
  }

  return (
    <>
      {count > 0 && (
        <div id="grid-headings" className="flex justify-end">
          <div className="w-1/6 font-header2 text-darkGreen tracking-widest">Price</div>
          <div className="w-1/6 font-header2 text-darkGreen tracking-widest">Quantity</div>
          <div className="w-1/6 font-header2 text-darkGreen tracking-widest">Total</div>
        </div>
      )}
      {count > 0 &&
        cart.map(([product, quantity]) => (
          <CartItem
            key={product.id}
            product={product}
            quantity={quantity}
            set={set}
            remove={remove}
          />
        ))}
      {count === 0 && (
        <div className="flex flex-col pl-8">
          <p className="font-body">Your cart is currently empty.</p>
        </div>
      )}
      {count > 0 && (
        <div className="flex justify-end">
          <div className="pr-40">
            <p className="font-body text-darkGreen text-sm text-right">Subtotal</p>
            <p className="font-header2 text-darkGreen font-semibold text-right">{subTotal}</p>
            <p className="font-body text-darkGreen text-xs text-right">
              Taxes and shipping calculated at checkout
            </p>
          </div>
        </div>
      )}
      {/* Need to add Checkout Button (and any other buttons) */}
    </>
  );
}

export default function CartPage() {
  return (
    <ProductProvider>
      <CartProvider>
        <div id="page-container" className="relative min-h-screen">
          <Header pageTitle={'Cart'} />
          <div id="content-wrap" className="pb-20 pt-24">
            <CartListing />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}
