import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star-fill.png';
import star_dull_icon from '../Assets/star-empty.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productDisplay'>
      <div className="display-left">
        <div className="image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-image">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className='right-prices'>
          <div className="price-old">${product.old_price}</div>
          <div className="price-new">${product.new_price}</div>
        </div>
        <div className='description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nam dignissimos aliquid repudiandae praesentium officiis vitae totam consectetur quidem sunt dolores doloribus exercitationem veritatis nesciunt perferendis officia ullam architecto odio?
        </div>
        <div className="size">
          <h1>Select Size</h1>
          <div className="all-sizes">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id); }}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
