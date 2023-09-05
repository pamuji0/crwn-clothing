import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import CheckoutItems from '../../checkout-items/checkout-items.component';
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './checkout.style';

export default function Checkout() {
	const { cartItems, cartTotal } = useContext(CartContext);
	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((cartItem) => {
				return <CheckoutItems cartItem={cartItem} key={cartItem.id} />;
			})}
			<Total>Total:$ {cartTotal}</Total>
		</CheckoutContainer>
	);
}
