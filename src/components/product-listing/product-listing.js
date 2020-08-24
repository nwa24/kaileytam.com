import React from 'react';

import ProductCard from 'components/product-card';
import { useProductContext, ProductProvider } from 'context/products-provider';

function Product() {
  const { listProducts } = useProductContext();
  const products = listProducts();

  return (
    <div className="flex flex-wrap items-center justify-around">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function ProductListing() {
  return (
    <ProductProvider>
      <Product />
    </ProductProvider>
  );
}
