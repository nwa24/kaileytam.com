import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Helmet from 'react-helmet';
import Product from '../components/Products/Products';

const shop = () => {
	return (
		<>
			<Helmet>
				<style>{'body { background-color: #f6debc }'}</style>
				<title>Kailey Tam - Shop</title>
			</Helmet>
			<Navbar />
			<Product />
		</>
	);
};

export default shop;
