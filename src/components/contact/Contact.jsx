import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {SiLinkedin} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail/>
            <h4>Email</h4>
            <h5>adrianfvences@gmail.com</h5>
            <a href="mailto:adrianfvences@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <SiLinkedin/>
            <h4>Messenger</h4>
            <h5>Adrian Vences</h5>
            <a href="mailto:adrianfvences@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+9802303424</h5>
            <a href="https://api.whatsapp.com/send?phone=+19802303424" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact