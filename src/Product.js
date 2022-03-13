import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
const Product = ({ id, title, price, image, rating }) => {
  const [state, dispatch] = useStateValue()
  const addtoBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    })
  }
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
      <button onClick={addtoBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
