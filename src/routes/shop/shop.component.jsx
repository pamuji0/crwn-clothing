import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/categories.preview.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import Category from '../category/category.component';
import './shop.style.scss';

export default function Shop() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, []);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
}
