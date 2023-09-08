import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from '../category-preview/category-preview.compoonent';

export default function CategoriesPreview() {
	const categoriesMap = useSelector(selectCategoriesMap);

	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</Fragment>
	);
}
