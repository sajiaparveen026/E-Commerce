import React from 'react'
import './Footer.css'
import instagramIcon from '../Assets/instagram.png'
import pinterestIcon from '../Assets/pinterest.png'
import whatsappIcon from '../Assets/whatsapp.png'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>BIG BALLOON</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagramIcon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterestIcon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsappIcon} alt="" />
            </div>
        </div>

        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer