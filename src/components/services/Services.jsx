import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Skills</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Character Traits</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Man of integrity.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to work well under pressure.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong interpersonal skills.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Self-motivated and proactive.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Empathetic, humble and willing to learn from others.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analytical and critical thinking abilities</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsible.</p>
            </li>
          </ul>

        </article>
        {/* end of ui/ux */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Able to create full stack Crud applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Familiar with a wide variety of languages and frameworks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Went through an immersive 4 month full stack bootcamp where i was able to practice </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building, Testing, Debugging and deploying code.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Colaborating with Cohort mates to complete assignments and projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Practiced Scrum.</p>
            </li>
          </ul>

        </article>
        {/* end of web dev */}
        <article className='service'>
          <div className="service__head">
            <h3>Previous Job Experience</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Plumbing Foreman</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I was in a leadership position.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Was responsible for assigning plumbers to specific tasks to complete and supervise activities.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Reduced layout deployment time by implementing system to reduce time on sight 
              and increase work production .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Was responsible to train new employees in proper methods to become plumbers to be able 
                to complete tasks given.</p>
            </li>
            
          </ul>

        </article>
        {/* end of content creation */}
      </div>
    </section>
  )
}

export default Services