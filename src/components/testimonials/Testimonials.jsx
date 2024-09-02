/* eslint-disable no-unused-vars */
import React from "react";
import shapeTwo from "../../assets/shape-2.png";
import testimonialIcon from "../../assets/testimonials-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./testimonials.css";
import { testimonials } from "../../Data";

const Testimonials = () => {
  return (
    <section className="testimonials17 section17" id="testimonials17">
      <h2 className="section__title17 text-cs17">What I Do</h2>
      <p className="section__subtitle17">
        My <span>Customers Say</span>
      </p>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="testimonials__container17  container17 mySwiper17"
      >
        {testimonials.map(({ img, name, author, description }, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide
              className="testimonials__item17 card17 card-one17"
              key={index}
            >
              <div className="testimonial__header17">
                <div className="testimonial__icon17">
                  <img src={testimonialIcon} alt="" />
                </div>
                <img src={img} className="testimonial__img17" alt="" />
              </div>
              <p className="testimonial__description17">{description}</p>
              <h3 className="testimonial__name17">{name}</h3>
              <p className="testimonial__author17">{author}</p>
              <img src={shapeTwo} alt="" className="shape17 c__shape17" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
