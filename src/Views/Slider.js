import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import img1 from "../Images/brand3-logo1.png";
import img2 from "../Images/brand3-logo2.png";
import img3 from "../Images/brand3-logo3.png";
import img4 from "../Images/brand3-logo4.png";
import img5 from "../Images/brand3-logo5.png";
import img6 from "../Images/brand3-logo6.png";
import { useInView } from "react-intersection-observer";

export default function Slider() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`mx-auto transition-opacity duration-1500 ${
        inView ? "opacity-100" : "opacity-0"
      } hover:cursor-grab active:cursor-grabbing`}
    >
      <h1 className="text-2xl font-semibold text-center mt-40 max-xl:mt-5 mb-10">
        Join hundreds of teams that rely on Quad SEO Software
      </h1>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        className="mb-10"
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
      >
        {[
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
