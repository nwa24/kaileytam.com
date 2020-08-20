import React from 'react';

import ProductCard from 'components/product-card';
import { useProductContext, ProductProvider } from 'context/ProductsProvider';

function mapPriceToProduct(products, prices) {
  const productsAndPrices = products;

  Object.keys(productsAndPrices).forEach((key) => {
    const productId = productsAndPrices[key].id;
    if (prices.hasOwnProperty(productId)) {
      productsAndPrices[key]['price'] = prices[productId];
    }
  });

  return productsAndPrices;
}

function Product() {
  const { listProducts, prices } = useProductContext();
  const listOfProductsAndPrices = mapPriceToProduct(listProducts(), prices);

  return (
    <div className="flex flex-wrap items-center justify-around">
      {listOfProductsAndPrices.map((productAndPrice) => (
        <ProductCard key={productAndPrice.id} productAndPrice={productAndPrice} />
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
