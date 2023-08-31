import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.style.scss';

export default function CartIcon() {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toogleIsChartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<div
			className='cart-icon-container'
			onClick={toogleIsChartOpen}
		>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
}
