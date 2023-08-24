import React from 'react'
import CategoryItem from '../category-item/category-item.component';
import './directory.style.scss';

export default function Directory({categories}) {
  return (
    <div className='directory-container'>
        {categories.map((category)=>(
            <CategoryItem category={category} key={category.id}/>
        ))}
    </div>
  )
}
