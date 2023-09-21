import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import {
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector';
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './checkout.style';

export default function Checkout() {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
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
