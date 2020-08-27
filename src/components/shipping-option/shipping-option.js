import React from "react";

const ShippingOption = ({
  shippingOption,
  onChangeValue,
  description,
  price,
  btnActive,
}) => {
  return (
    <button
      className={
        btnActive
          ? "active-btn w-full lg:w-2/5"
          : "in-active-btn w-full lg:w-2/5"
      }
      onClick={() => onChangeValue(shippingOption)}
    >
      <div className="flex-1 font-body">
        <p className="mb-0 text-left">{description}</p>
      </div>
      <div>
        <p className="font-body mb-0">{price}</p>
      </div>
    </button>
  );
};

export default ShippingOption;
