import React from 'react';

import { ProductProvider } from 'context/ProductsProvider';
import ProductPage from 'components/product-page';

export default function ProductTemplate({ pageContext: { id } }) {
  return (
    <ProductProvider>
      <ProductPage productId={id} />
    </ProductProvider>
  );
}
