import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.style.scss';

export default function CartDropdown() {
	const { cartItems } = useContext(CartContext);
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem
						cartItem={item}
						key={item.id}
					/>
				))}
			</div>
			<Button>Check Out</Button>
		</div>
	);
}
