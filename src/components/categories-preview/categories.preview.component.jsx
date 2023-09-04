import React, { Fragment, useContext } from 'react';
import { CategoriesContex } from '../../contexts/categories.context';
import CategoryPreview from '../category-preview/category-preview.compoonent';

export default function CategoriesPreview() {
	const { categoriesMap } = useContext(CategoriesContex);

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
