import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
 const [menu,setMenu]=useState("shop")
 const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>BIG BALLOON</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to={'/'}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("products")}}><Link style={{textDecoration:'none'}} to={'/kids'}>Products</Link> {menu==="products"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("blogs")}}><Link style={{textDecoration:'none'}} to={'/blogs'}>Blogs</Link> {menu==="blogs"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none'}} to={'/contact'}>Contact</Link> {menu==="contact"?<hr/>:<></>}</li>
        </ul>

        <div className="nav-login-cart">
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}>  <img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar