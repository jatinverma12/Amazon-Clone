import React from 'react'
import './Product.css'
const Product = ({ id, title, price, image, rating }) => {
  const stars = Array(rating)
    .fill()
    .map((_, i) => <p key={i}>🌟</p>)
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='price__info'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>{stars}</div>
      </div>
      <img src={image} alt='' className='product__image' />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
