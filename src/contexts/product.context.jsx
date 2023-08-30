import React, { createContext, useState } from 'react';
import PRODUCT from '../shopdata/shop-data.json';

export const ProductContext = createContext({
	product: [],
});

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCT);
	const value = { products };
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
