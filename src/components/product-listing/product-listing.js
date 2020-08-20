import React from 'react';

import { useProductContext, ProductProvider } from '../../context/ProductsProvider';
import ProductCard from '../product-card';

const mapPriceToProduct = (products, prices) => {
  const productsAndPrices = products;

  Object.keys(productsAndPrices).forEach((key) => {
    const productId = productsAndPrices[key].id;
    if (prices.hasOwnProperty(productId)) {
      productsAndPrices[key]['price'] = prices[productId];
    }
  });

  return productsAndPrices;
};

const Product = () => {
  const { listProducts, prices } = useProductContext();
  const listOfProductsAndPrices = mapPriceToProduct(listProducts(), prices);

  return (
    <div className="flex flex-wrap items-center justify-around">
      {listOfProductsAndPrices.map((productAndPrice) => (
        <ProductCard key={productAndPrice.id} productAndPrice={productAndPrice} />
      ))}
    </div>
  );
};

const ProductListing = () => {
  return (
    <ProductProvider>
      <Product />
    </ProductProvider>
  );
};

export default ProductListing;
