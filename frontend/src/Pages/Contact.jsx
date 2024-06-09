import React from "react";
import "./CSS/Contact.css";
import contact_big from "../Components/Assets/hero_image.png";
import contact_icon1 from "../Components/Assets/contact_icon1.png";
import contact_icon2 from "../Components/Assets/contact_icon2.png";
import chat from "../Components/Assets/chat_icon.png";
import email from "../Components/Assets/email_icon.png";
import phone from "../Components/Assets/phone_icon.png";
import home from "../Components/Assets/home_icon.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-container-front">
        <div className="contact-container-left">
          <h3>Contact Us</h3>
          <div className="contact-container-main">
            <div className="contact-head-first">
              <img src={contact_icon2} alt="" />
              <h4>Talk to a member of our sales teams</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos, quidem?
              </p>
              <button>+914938739200</button>
            </div>
            <div className="contact-head-second">
              <img src={contact_icon1} alt="" />
              <h4>Product and Account Support</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button>+914938739200</button>
            </div>
          </div>
        </div>
        <div className="contact-container-right">
          <img src={contact_big} alt="" />
        </div>
      </div>

      <div className="contact-menu">
        <div className="contact-menus">
          <h4>Chat</h4>
          <img src={chat} alt="" />
          <div className="menu-content">
            <h5>Chat Specialist Hour</h5>
            <p>7pm - 11pm CT</p>
            <p>7 days a week</p>
          </div>
        </div>
        <div className="contact-menus">
          <h4>Email</h4>
          <img src={email} alt="" />
          <div className="menu-content">
            <h5>Send us an Email</h5>
            <p>We'd love to hear from you</p>
            <p>sajia123@gmail.com</p>
          </div>
        </div>
        <div className="contact-menus">
          <h4>Phone</h4>
          <img src={phone} alt="" />
          <div className="menu-content">
            <h5>1-866-983-5692</h5>
            <p>7pm - 11pm CT</p>
            <p>7 days a week</p>
          </div>
        </div>
        <div className="contact-menus">
          <h4>Address</h4>
          <img src={home} alt="" />
          <div className="menu-content">
            <h5>Big Balloons Services</h5>
            <p>1000 Remington 120</p>
            <p>Balingbrook, 120267</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
