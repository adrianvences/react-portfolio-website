import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaLaptopCode} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {FaRegFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaLaptopCode className='about__icon'/>
                <h5>Experience</h5>
                <small>1 year of coding experience</small>
              </article>
              <article className="about__card">
                <ImBooks className='about__icon'/>
                <h5>School</h5>
                <small>Coding Dojo</small>
              </article>
              <article className="about__card">
                <FaRegFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>3</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius facere vitae rerum! Ex beatae vel nam aut,
              repudiandae suscipit quibusdam, veritatis laudantium ipsa, delectus quae maxime laboriosam dolore asperiores facilis?
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>

    </section>
  )
}

export default About