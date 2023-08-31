import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../asset/crown.svg';
import { CartContext } from '../../../contexts/cart.context';
import { UserContext } from '../../../contexts/user.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import CartIcon from '../../cart-icon/cart-icon.component';
import './navigation.style.scss';

export default function Navigation() {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();
	};
	return (
		<Fragment>
			<div className='navigation'>
				<Link
					className='logo-container'
					to='/'
				>
					<CrwnLogo className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link
						className='nav-link'
						to='/shop'
					>
						SHOP
					</Link>
					<Link
						className='nav-link'
						to='/checkout'
					>
						CHECKOUT
					</Link>
					{currentUser ? (
						<span
							className='nav-link'
							onClick={signOutHandler}
						>
							SIGN OUT
						</span>
					) : (
						<Link
							className='nav-link'
							to='/auth'
						>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
}
