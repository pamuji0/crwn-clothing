import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style';

export default function CartIcon() {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toogleIsChartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<CartIconContainer onClick={toogleIsChartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
}
