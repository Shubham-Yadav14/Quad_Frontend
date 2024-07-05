import React, { useEffect } from 'react';
import Narrow from '../Common/Narrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import image2 from '../Images/testimonial3-img2.png';
import image1 from '../Images/testimonial3-img1.png';
import image3 from '../Images/testimonials3-img2.png';
import star from "../Images/marque-elements1.svg"

export default function InfiniteScroll() {

  return (
      <div className=' bg-customPurple py-5 max-xl:py-5 mt-20 mb-20'>
              <Swiper
                  id="swiperr"
                  modules={[Navigation, Pagination, A11y, Autoplay]}
                  spaceBetween={30}
                  className=""
                  slidesPerView={3}
                  loop={true}
                  autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                      300: {
                          slidesPerView: 1,
                      },
                      768: {
                          slidesPerView: 2,
                      },
                      1024: {
                          slidesPerView: 3,
                      },
                  }}
                  speed={3000}
              >
                  <SwiperSlide className='mb-3'>
                     <div className='flex'>
                      <div><p className='text-5xl font-bold text-white'>Project Management</p></div>
                      <div className='mx-auto'><img src={star} style={{height:"50px", marginLeft:"auto", marginRight:"auto"}} alt="" /></div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className='mb-3'>
                     <div className='flex'>
                      <div><p className='text-5xl font-bold text-white'>Project Management</p></div>
                      <div className='mx-auto'><img src={star} style={{height:"50px", marginLeft:"auto", marginRight:"auto"}} alt="" /></div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className='mb-3'>
                     <div className='flex'>
                      <div><p className='text-5xl font-bold text-white'>Project Management</p></div>
                      <div className='mx-auto'><img src={star} style={{height:"50px", marginLeft:"auto", marginRight:"auto"}} alt="" /></div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className='mb-3'>
                     <div className='flex'>
                      <div><p className='text-5xl font-bold text-white'>Project Management</p></div>
                      <div className='mx-auto'><img src={star} style={{height:"50px", marginLeft:"auto", marginRight:"auto"}} alt="" /></div>
                     </div>
                  </SwiperSlide>
              </Swiper>
      </div>
  );
}

