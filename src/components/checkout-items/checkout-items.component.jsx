import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	RemoveButton,
	Value,
} from './checkout-items.style';

export default function CheckoutItems({ cartItem }) {
	const { imageUrl, name, price, quantity } = cartItem;
	const { addItemToCart, removeItemToCart, clearItemFromCart } =
		useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeHandler = () => removeItemToCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>

			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={removeHandler}>&#8249;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#8250;</Arrow>
			</Quantity>
			<BaseSpan>{price}</BaseSpan>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
}
