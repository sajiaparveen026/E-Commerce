import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';
import all_products from '../Assets/all_products';

const CartItems = () => {
  const { cartItems, removeFromCart , getTotalCartAmount} = useContext(ShopContext);
  
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
        {all_products.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartitems-format cartitems-format-list">
                  <img src={e.image} alt="" className='carticon-product-icon' />
                  <p className='cartitems-title'>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                  <p>${(e.new_price * cartItems[e.id])}</p>
                  <img src={remove_icon} alt="Remove" className='remove-icon' onClick={() => removeFromCart(e.id)} />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className='cartitems-down'>
          <div className="cartitems-total">
            <h1>Cart Totals  </h1>
              <div>
                <div className="cartitems-total-item">
                  <p>SubTotal</p>
                  <p>${getTotalCartAmount().toFixed(2)}</p>
                </div>
                <hr />
               <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
               </div>
               <hr />
               <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount().toFixed(2)}</h3>
               </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className='cartitems-promocode'>
            <p>If you have a promo code , Enter it here</p>
            <div className="cartitems-promo-box">
              <input type="text" value="" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CartItems;
