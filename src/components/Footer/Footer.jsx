import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <div className="logo">
  <svg width="24" height="52" viewBox="0 0 22 52" fill="none">

    <rect x="2" y="0" width="4" height="20" rx="2" fill="#E8440A"/>
    <rect x="9" y="0" width="4" height="20" rx="2" fill="#E8440A"/>
    <rect x="16" y="0" width="4" height="20" rx="2" fill="#E8440A"/>

    <rect x="2" y="20" width="18" height="4" fill="#E8440A"/>

    <rect x="8" y="24" width="6" height="28" rx="3" fill="#E8440A"/>

    <polygon 
      points="14,6 8,22 13,22 8,38 16,18 11,18 16,6" 
      fill="white" 
      opacity="0.9"
    />

  </svg>

  <div>
    <span className="quickbite-text">
      QuickBite<span className="dot">.</span>
    </span>

    <p className="admin-text">
      Admin Panel
    </p>
  </div>
</div>
            <p><p>
  QuickBite delivers fresh, delicious meals straight to your doorstep with speed, quality, and care. Enjoy every bite with flavors crafted to satisfy your cravings anytime.
</p></p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
         <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+5-931-105-0000</li>
                <li>contact@quickbite.com</li>
            </ul>
        </div>
       
      </div>
      <hr />
      <p className="footer-copyright">copyright 2026 © quickbite.com- All Right Reserved.</p>
    </div>
  )
}

export default Footer;