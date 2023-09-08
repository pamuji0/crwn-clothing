import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/categories.preview.component';
import { setCategories } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import Category from '../category/category.component';
import './shop.style.scss';

export default function Shop() {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments();
			dispatch(setCategories(categoriesArray));
		};
		getCategoriesMap();
	}, []);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
}
