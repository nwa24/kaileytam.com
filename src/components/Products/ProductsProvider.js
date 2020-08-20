import React, { createContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * Context
 * Provides a way to pass data through the component tree without having to pass props down manually at every level
 */
export const ProductsContext = createContext();

/**
 * Wrapper to give Provider access to Sku nodes from Gatsby's GraphQL store
 */
const ProductsProvider = ({ children }) => {
	const data = useStaticQuery(productQueryAndPricesQuery);
	return (
		<Provider data={data}>
			{children}
		</Provider>
	);
};

/**
 * Shares produce & price data through Context
 * Products are first laoded from Gatsby's GraphQL store
 */
const Provider = ({ data }) => {
  // Load product data from Gatsby store
  const [initialPrices, initialProducts] = processGatsbyData(data);
};

const processGatsbyData = (data) => {
	const prices = {};
  const products = {};
  
  console.log(data)

	return [prices, products];
};

export const priceFragment = graphql`
	fragment Price on StripePrice {
		active
		currency
		id
		unit_amount
	}
`;

export const productFragment = graphql`
	fragment Product on StripeProduct {
		description
		id
		name
		localFiles {
			childImageSharp {
				fluid(maxWidth: 500, quality: 92) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`;

const productQueryAndPricesQuery = graphql`
	query productQueryAndPricesQuery {
		allStripePrice(filter: { active: { eq: true } }) {
			edges {
				node {
					...Price
				}
			}
		}
		allStripeProduct(filter: { active: { eq: true } }) {
			edges {
				node {
					...Product
				}
			}
		}
	}
`;

export default ProductsProvider;
