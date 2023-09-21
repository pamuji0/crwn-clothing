import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from '../../store/categories/category.selector';
import { CategoryContainer, CategoryTitle } from './category.style';

export default function Category() {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);
	const isLoading = useSelector(selectCategoriesIsLoading);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</CategoryContainer>
			)}
		</Fragment>
	);
}
