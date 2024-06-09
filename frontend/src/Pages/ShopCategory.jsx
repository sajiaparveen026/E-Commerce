import React from 'react'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown-icon.png'
import Item from '../Components/Items/Item'
import all_products from '../Components/Assets/all_products'

const ShopCategory = (props) => {
  // const {all_products} = useContext(ShopContext)
  // will use this when we have different categories
  return (
    <div className='shop-category'>
      <img className='shop-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 30 products
        </p>
        <div className="shopcategory-sort">
         Sort by  <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null
          }
        })}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory