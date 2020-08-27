import React from "react";

import CartItem from "components/cart-item";
import CheckoutButton from "components/checkout-button";
import Footer from "components/footer";
import Header from "components/header";
import { useCartContext, CartProvider } from "context/cart-provider";
import { ProductProvider } from "context/products-provider";
import { formatPrice } from "helpers/index";

function CartListing() {
  const { cart, count, set, remove, total } = useCartContext();

  const subTotal = formatPrice(total, "cad");

  return (
    <>
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
        <div className="flex justify-end text-right pb-20 lg:pr-24">
          <div className="w-2/3 lg:w-1/6 pr-8 pt-4">
            <p className="font-body text-darkGreen text-sm">Subtotal</p>
            <p className="font-header2 text-darkGreen font-semibold">
              {subTotal}
            </p>
            <p className="font-body text-darkGreen text-xs">
              Taxes and shipping calculated at checkout
            </p>
          </div>
        </div>
      )}
      <CheckoutButton cart={cart} />
    </>
  );
}

export default function CartPage() {
  return (
    <ProductProvider>
      <CartProvider>
        <div id="page-container" className="relative min-h-screen">
          <Header pageTitle={"Cart"} />
          <div id="content-wrap" className="pb-32 pt-24">
            <CartListing />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}
