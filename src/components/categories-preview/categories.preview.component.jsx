import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from '../../store/categories/category.selector';
import CategoryPreview from '../category-preview/category-preview.compoonent';
import Spinner from '../spinner/spinner.component';

export default function CategoriesPreview() {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return (
						<CategoryPreview key={title} title={title} products={products} />
					);
				})
			)}
		</Fragment>
	);
}
