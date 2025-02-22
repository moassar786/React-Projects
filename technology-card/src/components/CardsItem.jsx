import React from 'react'
import './CardsItem.css';

export default function CardsItem({ title, description, imgUrl, className }) {
  
    return (
    <li className={`${className} card-item`}>
        <h1 className='card-title'>{title}</h1>
        <p className='card-description'>{description}</p>
        <div className='img-container'>
            <img className='card-img' src={imgUrl} alt={title} />
        </div>
    </li>
  )
}
