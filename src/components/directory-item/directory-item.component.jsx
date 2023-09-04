import React from 'react';
import './directory-item.style.scss';

export default function CategoryItem({ category }) {
	const { imageUrl, title } = category;
	return (
		<div className='directory-item-container'>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='body'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
}
