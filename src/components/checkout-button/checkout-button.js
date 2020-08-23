import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

const CheckoutButton = ({ cart }) => {
  const formatLineItems = () => {
    const lineItems = [];
    cart.forEach((item) => {
      const price = item[0].price.id;
      const quantity = item[1];
      lineItems.push({ price: price, quantity: quantity });
    });

    return lineItems;
  };

  const redirectToCheckout = async (event) => {
    event.preventDefault();

    const lineItems = formatLineItems();

    const stripe = await getStripe();
    stripe
      .redirectToCheckout({
        mode: 'payment',
        lineItems: lineItems,
        successUrl: `http://localhost:8000`,
        cancelUrl: `http://localhost:8000/cart`,
        billingAddressCollection: 'required',
        shippingAddressCollection: {
          allowedCountries: ['US', 'CA'],
        },
      })
      .then((result) => {
        if (result.error) {
          console.warn('Error: ', error);
        }
      });
  };

  return <button onClick={redirectToCheckout}>Checkout</button>;
};

export default CheckoutButton;
