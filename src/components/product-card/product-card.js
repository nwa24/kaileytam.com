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
    <div className="w-1/6">
      <Link className="hover:no-underline" to={`/buy/${slug}`}>
        {localFiles && (
          <div className="relative w-full p-8 object-contain">
            <Img
              className="absolute top-0 bottom-0 w-full h-full object-center object-cover"
              fluid={localFiles[0].childImageSharp.fluid}
              alt={name}
            />
          </div>
        )}
        <p className="font-body text-darkRed text-2xl text-center">{name}</p>
        <p className="font-header1 text-darkRed text-2xl text-center">{price}</p>
      </Link>
    </div>
  );
}
