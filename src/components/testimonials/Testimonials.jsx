import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar : AVTR1,
    name : 'Genesis Vences',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Quam itaque unde error ipsam temporibus distinctio, cupiditate fugiat eveniet quidem veritatis laudantium quae sit, voluptas harum dolores possimus! Alias, quam nemo! '
  },
  {
    avatar : AVTR2,
    name : 'Xiomara Rivera',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Quam itaque unde error ipsam temporibus distinctio, cupiditate fugiat eveniet quidem veritatis laudantium quae sit, voluptas harum dolores possimus! Alias, quam nemo! '
  },
  {
    avatar : AVTR3,
    name : 'Luz Lopez',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Quam itaque unde error ipsam temporibus distinctio, cupiditate fugiat eveniet quidem veritatis laudantium quae sit, voluptas harum dolores possimus! Alias, quam nemo! '
  },
  {
    avatar : AVTR4,
    name : 'Fernando Vences',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Quam itaque unde error ipsam temporibus distinctio, cupiditate fugiat eveniet quidem veritatis laudantium quae sit, voluptas harum dolores possimus! Alias, quam nemo! '
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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
          <h5 className='client__name'>{name}</h5>
          
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
        
      
      </Swiper>
    </section>
  )
}

export default Testimonials