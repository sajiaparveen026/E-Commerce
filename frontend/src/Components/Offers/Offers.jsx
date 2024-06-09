import React from 'react'
import './Offers.css'
import exc_img from '../Assets/exclusive_img.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offer</h1>
            <p>ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={exc_img} alt="" />
        </div>
    </div>
  )
}

export default Offers