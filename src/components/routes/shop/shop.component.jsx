import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/product.context';
import ProductCard from '../../product-card/product-card.component';
import './shop.style.scss';

export default function Shop() {
	const { products } = useContext(ProductContext);
	return (
		<div className='product-container'>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
}
