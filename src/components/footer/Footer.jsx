import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a href="#" className='footer_logo'>Adrian Vences</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="experience">Experience</a></li>
          <li><a href="services">Services</a></li>
          <li><a href="portfolio">Portfolio</a></li>
          <li><a href="testimonials">What I Do</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebookSquare/></a>
          <a href="https://instagram.com"><RiInstagramFill/></a>
          <a href="https://twitter.com"><FaTwitterSquare/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy;All rights reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer