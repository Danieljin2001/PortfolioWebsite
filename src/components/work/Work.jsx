import React from 'react'
import "./work.css";

import { projectsData } from './Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Work = () => {
  return (
    <section className="work section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent works</span>

        <Swiper className="work__container"
        loop = {true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 48,
          },

        
        }}
        modules={[Pagination]}>
          {projectsData.map(({id,image, title, description, tags, demo, source}) => {
            return (
              
              <SwiperSlide className='work__card' key={id}>
                <a href={source} target="__blank"><img src={image} alt="" className='work__img'/></a>
                <div className='title__div'>
                  <h3 className="work__title">{title}</h3>
                  {/* <a href={demo} 
                    className="demo__button" 
                    target='__blank'
                    hidden={!demo || demo.trim() === ""}
                  >Demo</a> */}
                </div>
                <a href={source} className="work__button" target='__blank'>
                  <u>Source</u> <i class="fa-brands fa-github work__button-icon"></i>
                </a>
                <a href={demo} style={{ visibility: demo === "" ? "hidden" : "visible" }} className="work__button" target='__blank'>
                  <u>Preview</u> <i class="fa-solid fa-square-arrow-up-right work__button-icon"></i>
                </a>
                  
                <div className='description__div'>
                  <p className='project__desciption'>{description}</p>
                </div>
                <div className='tags__div'>
                <p className='project__tags'>{tags}</p>

                </div>
                
              </SwiperSlide>
              
            );
          })}
        </Swiper>


    </section>
  )
}

export default Work
