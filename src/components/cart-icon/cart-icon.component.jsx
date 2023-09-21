import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
	selectCartCount,
	selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style';

export default function CartIcon() {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

	const toogleIsChartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
	return (
		<CartIconContainer onClick={toogleIsChartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
}
