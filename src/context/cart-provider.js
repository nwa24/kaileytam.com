import React, { createContext, useState, useEffect, useContext } from 'react';

import { useProductContext } from 'context/products-provider';

export const CartContext = createContext();

/**
 * Manages the shopping cart, which is persisted in local storage
 * The cart and related methdos are shared through context
 */
function CartProvider({ children }) {
  const { products } = useProductContext();
  const [mode, setMode] = useState(false);

  const [contents, setContents] = useState(function () {
    // Load cart from local storage
    // Initialize if not present or incorrect
    let localCart;
    try {
      localCart = JSON.parse(localStorage.getItem('cart'));
    } catch (err) {
      console.error(err);
    }
    if (!localCart || !Array.isArray(localCart)) {
      return [];
    }
    return localCart;
  });

  // Save cart to local storage after load and on update
  useEffect(
    function () {
      try {
        localStorage.setItem('cart', JSON.stringify(contents));
      } catch (err) {
        console.error(err);
      }
    },
    [contents]
  );

  /**
   * An array representing cart items in the form of [{products}, quantity]
   */
  const cart = contents.map(([id, quantity]) => {
    return [products[id], quantity];
  });

  /**
   * The number of items in the cart
   */
  const count = contents.reduce((sum, [_, quantity]) => sum + quantity, 0);

  /**
   * The total cost of the items in the cart
   */
  const total = contents.reduce(
    (sum, [id, quantity]) => sum + products[id].price.unit_amount * quantity,
    0
  );

  /**
   * Returns the quantity of a price in the cart
   * @param {string} id The id of the price
   * @returns {number}
   */
  function get(id) {
    if (!contents.length) {
      return 0;
    }
    const cartItem = contents.find((item) => item[0] === id);
    return cartItem ? cartItem[1] : 0;
  }

  /**
   * Sets the quantity of a price in the cart, if available
   * @param {string} id The id the price
   * @param {number} quantity The requested quantity
   * @returns {number} The cart quantity after the operation
   */
  function set(id, quantity) {
    if (!available(id, quantity)) {
      return -1;
    }
    const index = contents.findIndex((item) => item[0] === id);
    setContents(([...state]) => {
      if (index !== -1) {
        state[index] = [id, quantity];
      } else {
        state.push([id, quantity]);
      }
      return state;
    });
    return quantity;
  }

  /**
   * Removes a price from the cart
   * @param {string} id The id of the price
   */
  function remove(id) {
    setContents((state) => {
      return state.filter((item) => item[0] !== id);
    });
  }

  /**
   * Checks whether an item is available for purchase
   * @param {string} id The id of the price
   * @param {number} [quantity=1] The requested quantity
   * @returns {boolean} Whether a purchase of the quantity would be possible
   */
  function available(id, quantity = 1) {
    return true;
  }

  const ctx = {
    contents,
    cart,
    get,
    set,
    remove,
    available,
    count,
    total,
  };

  return <CartContext.Provider value={{ ...ctx }}>{children}</CartContext.Provider>;
}

function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCartContext };
