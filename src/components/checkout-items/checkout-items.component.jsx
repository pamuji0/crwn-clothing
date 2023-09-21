import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addItemToCart,
	clearItemFromCart,
	removeItemToCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
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
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);
	const clearItemHandler = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));
	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeHandler = () => dispatch(removeItemToCart(cartItems, cartItem));

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
