import React from "react";

import { navigate } from "gatsby";

const CheckoutButton = () => {
  const redirectToShipping = () => {
    navigate(`/checkout`);
  };

  return (
    <div className="flex justify-end lg:pr-32">
      <button
        role="link"
        onClick={redirectToShipping}
        className="rounded-full border-darkRed border-2 p-3 font-header2 text-darkRed text-sm hover:bg-darkRed hover:text-white"
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;
