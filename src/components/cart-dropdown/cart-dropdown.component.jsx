import Button from '../button/button.component';
import './cart-dropdown.style.scss';

import React from 'react';

export default function CartDropdown() {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items' />
			<Button>Check Out</Button>
		</div>
	);
}
