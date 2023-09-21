import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../asset/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
	LogoContainer,
	NavLink,
	NavLinks,
	NavigationContainer,
} from './navigation.style';

export default function Navigation() {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

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
