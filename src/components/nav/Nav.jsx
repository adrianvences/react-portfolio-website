import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BiUserCircle} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {FaLaptopCode} from 'react-icons/fa'
import {MdConnectWithoutContact} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const [activeNav,setActiveNav] = useState('')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaLaptopCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav