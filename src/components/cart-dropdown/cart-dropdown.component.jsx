import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.style';

export default function CartDropdown() {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckOutHandler = () => {
		navigate('/checkout');
	};
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
				) : (
					<EmptyMessage>Your chart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckOutHandler}>Check Out</Button>
		</CartDropdownContainer>
	);
}
