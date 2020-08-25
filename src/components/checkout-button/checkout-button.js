import React from "react";

import { navigate } from "gatsby";

const CheckoutButton = () => {
  const redirectToShipping = () => {
    navigate(`/checkout`);
  };

  return (
    <button role="link" onClick={redirectToShipping}>
      Checkout
    </button>
  );
};

export default CheckoutButton;
