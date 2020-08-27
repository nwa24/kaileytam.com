import React, { useCallback, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import Footer from "components/footer";
import Header from "components/header";
import ShippingOption from "components/shipping-option";
import { useCartContext, CartProvider } from "context/cart-provider";
import { ProductProvider } from "context/products-provider";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const ShippingOptions = () => {
  const { cart } = useCartContext();
  const [shippingOption, setShippingOption] = useState("pickup");
  const [shippingProperties, setShippingProperties] = useState([
    {
      shippingOption: "pickup",
      description: "Pick up in Vancouver (coordinated over email)",
      price: "$0.00",
      btnActive: true,
    },
    {
      shippingOption: "canada",
      description: "Canada",
      price: "$4.00",
      btnActive: false,
    },
    {
      shippingOption: "usa",
      description: "USA",
      price: "$10.00",
      btnActive: false,
    },
  ]);

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
      localStorage.setItem("cart", "{}");
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

  const onChangeValue = useCallback(
    (value) => {
      const copyShippingProperties = shippingProperties;

      const { btnActive } = copyShippingProperties.find(
        (shipping) => shipping.shippingOption === value
      );

      copyShippingProperties.forEach((shipping) => {
        if (shipping.shippingOption == value) {
          shipping.btnActive = !btnActive;
        } else {
          shipping.btnActive = btnActive;
        }
      });

      setShippingProperties([...copyShippingProperties]);
      setShippingOption(value);
    },
    [shippingProperties]
  );

  return (
    <>
      <div>
        {shippingProperties.map((shipping) => {
          const { shippingOption, description, price, btnActive } = shipping;
          return (
            <ShippingOption
              key={shippingOption}
              shippingOption={shippingOption}
              description={description}
              price={price}
              btnActive={btnActive}
              onChangeValue={onChangeValue}
            />
          );
        })}
      </div>
      <button
        role="link"
        className="rounded-full border-darkRed border-2 p-3 font-header2 text-darkRed text-sm hover:bg-darkRed hover:text-white"
        onClick={redirectToCheckout}
      >
        Proceed to Payment
      </button>
    </>
  );
};

const CheckoutPage = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <div id="page-container" className="relative min-h-screen">
          <Header pageTitle={"Checkout"} />
          <div id="content-wrap" className="pb-32 pt-24 pl-8 pr-8">
            <h1 className="font-header2 tracking-wide pb-4">Shipping Method</h1>
            <ShippingOptions />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  );
};

export default CheckoutPage;
