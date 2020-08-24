import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { formatPrice } from 'helpers/index';

export default function ProductCard({ product }) {
  const { localFiles, name } = product;
  const { unit_amount, currency } = product.price;
  const { slug } = product.price.fields;

  const price = formatPrice(unit_amount, currency);

  return (
    <div className="w-1/2 lg:w-1/6 p-4">
      <Link className="hover:no-underline" to={`/buy/${slug}`}>
        {localFiles && (
          <Img className="w-full" fluid={localFiles[0].childImageSharp.fluid} alt={name} />
        )}
        <p className="font-body text-darkRed text-base lg:text-2xl text-center">{name}</p>
        <p className="font-header1 text-darkRed text-lg lg:text-2xl text-center">{price}</p>
      </Link>
    </div>
  );
}
