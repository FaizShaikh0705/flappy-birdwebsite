import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer_main">
        <div className="footer_1">
          <a href="#" className="footer_logo">Flappy-Bird</a>
          <p className='footer_info'>“Flappy Bird is a popular mobile game, whose goal is to let birds pass more columns by clicking the screen to fly for some height. It’s an easy game to play because the only two actions for players are to let the bird fly or do nothing (let the bird drop by itself)."</p>
        </div>
        <div className="footer_2">
          <a href="#" className="useful_lnk">USEFUL LINKS</a>
          <ul className='useful_option'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq1">#Features</a></li>
          </ul>
        </div>
        <div className="footer_3">
          <a href="#footer" className='contact_1'>CONTACT</a>
          <h5 className='contact_menu'>Daaniya Ansari</h5>
          <h5>daaniyaansari73@gmail.com</h5>
        </div>
      </div>
      <div className="footer__copyright">
          <h5>&copy; Daaniya Ansari. All rights reserved. </h5>
        </div>
    </footer>
  )
}

export default Footer