import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { formatPrice } from '../../helpers/index';

const ProductCard = ({ productAndPrice }) => {
  const { localFiles, name } = productAndPrice;
  const { unit_amount, currency } = productAndPrice.price;
  const { slug } = productAndPrice.price.fields;

  const price = formatPrice(unit_amount, currency);

  return (
    <div className="w-1/6">
      <Link to={`/buy/${slug}`}>
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
};

export default ProductCard;
