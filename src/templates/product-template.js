import React from 'react';

import { CartProvider } from 'context/cart-provider';
import { ProductProvider } from 'context/products-provider';
import ProductPage from 'components/product-page';

export default function ProductTemplate({ pageContext: { id } }) {
  return (
    <ProductProvider>
      <CartProvider>
        <ProductPage productId={id} />
      </CartProvider>
    </ProductProvider>
  );
}
