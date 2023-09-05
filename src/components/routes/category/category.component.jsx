import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContex } from '../../../contexts/categories.context';
import ProductCard from '../../product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.style';
export default function Category() {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContex);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryContainer>
		</Fragment>
	);
}
