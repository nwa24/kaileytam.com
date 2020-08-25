import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import Header from "components/header";
import { useCartContext, CartProvider } from "context/cart-provider";
import { ProductProvider } from "context/products-provider";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const ShippingOptions = () => {
  const { cart } = useCartContext();
  const [shippingOption, setShippingOption] = useState("");

  const redirectToCheckout = () => {
    const lineItems = cart.map(([product, quantity]) => ({
      price: product.price.id,
      quantity,
    }));

    switch (shippingOption) {
      case "canada":
        lineItems.push({
          price: "price_1HKBSLC9QrVK31WjXfsmDhsW",
          quantity: 1,
        });
        break;

      case "usa":
        lineItems.push({
          price: "price_1HKBSLC9QrVK31WjkPcH6Txs",
          quantity: 1,
        });
        break;

      default:
        // Pickup option has no cost associated with it
        break;
    }

    fetch("/.netlify/functions/createCheckoutSession", {
      method: "POST",
      body: JSON.stringify(lineItems),
    }).then(async (response) => {
      const { id } = await response.json();
      // Set the local storage cart to be empty
      // Get Stripe.js instance
      const stripe = await stripePromise;
      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({ sessionId: id });

      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        console.error(result.error.message);
      }
    });
  };

  const onChangeValue = (event) => {
    setShippingOption(event.target.value);
  };

  // TODO: Disable the "Proceed to Payment" button if there are no shipping options selected
  return (
    <>
      <div onChange={onChangeValue}>
        <input type="radio" value="pickup" name="shipping" />
        Pick up in Vancouver (coordinated over email) - $0.00
        <br />
        <input type="radio" value="canada" name="shipping" />
        Canada - $4.00
        <br />
        <input type="radio" value="usa" name="shipping" />
        USA - $10.00
      </div>
      <button role="link" onClick={redirectToCheckout}>
        Proceed to Payment
      </button>
    </>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <Header pageTitle={"Checkout"} />
      <ProductProvider>
        <CartProvider>
          <h1>Shipping Method</h1>
          <ShippingOptions />
        </CartProvider>
      </ProductProvider>
    </>
  );
};

export default CheckoutPage;
