import "./services.css";
import { FaArrowRight } from "react-icons/fa";
import ShapeTwo from "../../assets/shape-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { services } from "../../Data";

const Services = () => {
  return (
    <section className="services17 section17" id="services17">
      <h2 className="section__title17 text-cs17">What I Do</h2>
      <p className="section__subtitle17">
        My <span>Services</span>
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
        className="services__container17  container17 mySwiper17"
      >
        {services.map(({ name, title, description }, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide
              className="services__item17 card17 card-one17"
              key={index}
            >
              <span className="services__subtitle17 text-cs17">{name}</span>
              <h3 className="services__title17">{title}</h3>
              <p className="services__description17">{description}</p>

              <a href="" className="link17">
                See Pricing
                <FaArrowRight className="link__icon17" />
              </a>

              <img src={ShapeTwo} alt="" className="shape17 c__shape17" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
