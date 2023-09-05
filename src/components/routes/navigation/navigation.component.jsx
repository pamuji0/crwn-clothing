import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../asset/crown.svg';
import { CartContext } from '../../../contexts/cart.context';
import { UserContext } from '../../../contexts/user.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import CartIcon from '../../cart-icon/cart-icon.component';
import {
	LogoContainer,
	NavLink,
	NavLinks,
	NavigationContainer,
} from './navigation.style';

export default function Navigation() {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();
	};
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>

				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutHandler}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
}
