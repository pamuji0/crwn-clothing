import React, { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContex = createContext({
	categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategorieMap] = useState({});
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategorieMap(categoryMap);
		};
		getCategoriesMap();
	}, []);
	const value = { categoriesMap };
	return (
		<CategoriesContex.Provider value={value}>
			{children}
		</CategoriesContex.Provider>
	);
};
