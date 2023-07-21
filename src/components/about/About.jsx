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
              <p>
                Hello World! My name is Adrian Vences, and i am a full stack developer from Charlotte North Carolina.
              I have passion for solving problems and designing websites. My goal as a software developer is to put my 
              skills to the test and be able to contribute in anyway i can and for that reason i am constantly growing my
              knowledge every day. When im not studying , I am at the Gym pushing my self harder than last time, spending time 
              with my family or at home enjoying my day off.
              </p>
              <p>
              I am open to any job opportunities where I can apply my skills, learn and grow with a team. If I match your job 
              opportunity with my skills and knowledge then please contact me.  
              </p>
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>

    </section>
  )
}

export default About