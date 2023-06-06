import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/adrianvences/" target='_blank'> <SiLinkedin/> </a>
      <a href="https://github.com/adrianvences" target='_blank'> <FaGithub/> </a>
    </div>
  )
}

export default HeaderSocials