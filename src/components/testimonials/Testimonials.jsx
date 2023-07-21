import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/problemSolving.png'
import AVTR2 from '../../assets/development.jpeg'
import AVTR3 from '../../assets/teamwork.png'


// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar : AVTR1,
    name : 'Problem Solving',
    
  },
  {
    avatar : AVTR2,
    name : 'Development'
  },
  {
    avatar : AVTR3,
    name : 'Collaboration'
    
  },
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      
      <h2>What I Do</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation>
        {
          data.map (({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}  />
          </div>
          <h2 className='client__name'>{name}</h2>
          
        </SwiperSlide>
            )
          })
        }
        
      
      </Swiper>
    </section>
  )
}

export default Testimonials