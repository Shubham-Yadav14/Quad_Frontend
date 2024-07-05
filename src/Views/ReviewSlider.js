import React, { useEffect } from 'react';
import Narrow from '../Common/Narrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import image2 from '../Images/testimonial3-img2.png';
import image1 from '../Images/testimonial3-img1.png';
import image3 from '../Images/testimonials3-img2.png';

export default function ReviewSlider() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('translate-y-0', 'opacity-100');
                        entry.target.classList.remove('translate-y-full', 'opacity-0');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const headingElement = document.getElementById('Heading2');
        const swiperElement = document.getElementById('swiperr');
        if (headingElement) {
            observer.observe(headingElement);
        }
        if (swiperElement) {
            observer.observe(swiperElement);
        }

        return () => {
            if (headingElement) {
                observer.unobserve(headingElement);
            }
            if (swiperElement) {
                observer.unobserve(swiperElement);
            }
        };
    }, []);

    return (
        <div className='bg-[#FAF9FD] py-20 max-xl:py-5'>
            <Narrow>
                <div
                    id="Heading2"
                    className="w-5/12 max-xl:w-full py-20 mx-auto opacity-0 transform translate-y-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
                >
                    <div className="p-2 bg-purpleBg rounded-xl font-semibold text-customPurple text-center mx-auto w-40">
                    Testimonials
                    </div>
                    <div className="text-center text-4xl font-bold mt-5">
                    Success Stories: What Our Users Say About Quad
                    </div>
                </div>
                <Swiper
                    id="swiperr"
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={30}
                    className="mb-10 opacity-0 transform translate-y-full transition-all duration-700 pb-10 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
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
                    <SwiperSlide className='pb-10'>
                        <div className='flex flex-col border-2 p-3 rounded-lg hover:bg-white hover:shadow-lg hover:border-none leading-6'>
                            <div className='flex'>
                                <img src={image1} width={60} alt="Mark Johnson" />
                                <div className='pl-3'>
                                    <div className='text-xl font-semibold mb-3'>Mark Johnson</div>
                                    <div>SEO Specialist</div>
                                </div>
                            </div>
                            <img src="https://html.fleexstudio.com/quad/assets/images/icons/quito1.svg" alt="hello" className='w-1/12 mt-10 mb-3'/>
                            <p className=''>"As an SEO specialist, I've used various tools in the past, but Quad SEO stands out. The depth of analytics and the precision of the rank tracking feature are unparalleled. It allows me to make data-driven decisions, and the comprehensive reports simplify client communication."</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-10'>
                        <div className='flex flex-col border-2 p-3 rounded-lg  hover:bg-white hover:shadow-lg hover:border-none leading-6'>
                            <div className='flex'>
                                <img src={image2} width={60} alt="Jane Smith" />
                                <div className='pl-3'>
                                    <div className='text-xl font-semibold mb-3'>Jane Smith</div>
                                    <div>Small Business Owner</div>
                                </div>
                            </div>
                            <img src="https://html.fleexstudio.com/quad/assets/images/icons/quito1.svg" alt="hello" className='w-1/12 mt-10 mb-3'/>
                            <p className='text-gray-500 font-semibold'>"As a small business owner, I needed an SEO solution that was powerful yet easy to use. Quad exceeded my expectations. The user-friendly interface made it simple to navigate, and the on-page optimization tools helped us fine-tune our website for better search engine visibility.”</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-10'>
                        <div className='flex h-full flex-col border-2 p-3 rounded-lg  hover:bg-white hover:shadow-lg hover:border-none leading-6'>
                            <div className='flex'>
                                <img src={image3} width={60} alt="Emily White" />
                                <div className='pl-3'>
                                    <div className='text-xl font-semibold mb-3'>Emily White</div>
                                    <div>E-commerce Manager</div>
                                </div>
                            </div>
                            <img src="https://html.fleexstudio.com/quad/assets/images/icons/quito1.svg" alt="hello" className='w-1/12 mt-10 mb-3'/>
                            <p className='text-gray-500 font-semibold'>"As a small business owner, I needed an SEO solution that was powerful yet easy to use. Quad exceeded my expectations. The user-friendly interface made it simple to navigate, and the on-page optimization tools helped us fine-tune our website for better search engine visibility.”</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-10'>
                        <div className='flex flex-col border-2 p-3 rounded-lg  hover:bg-white hover:shadow-lg hover:border-none leading-6'>
                            <div className='flex'>
                                <img src={image1} width={60} alt="Mark Johnson" />
                                <div className='pl-3'>
                                    <div className='text-xl font-semibold mb-3'>Mark Johnson</div>
                                    <div>SEO Specialist</div>
                                </div>
                            </div>
                            <img src="https://html.fleexstudio.com/quad/assets/images/icons/quito1.svg" alt="hello" className='w-1/12 mt-10 mb-3'/>
                            <p className='text-gray-500 font-semibold'>"As a small business owner, I needed an SEO solution that was powerful yet easy to use. Quad exceeded my expectations. The user-friendly interface made it simple to navigate, and the on-page optimization tools helped us fine-tune our website for better search engine visibility.”</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-10'>
                        <div className='flex flex-col border-2 p-3 rounded-lg  hover:bg-white hover:shadow-lg hover:border-none leading-6'>
                            <div className='flex'>
                                <img src={image2} width={60} alt="Jane Smith" />
                                <div className='pl-3'>
                                    <div className='text-xl font-semibold mb-3'>Jane Smith</div>
                                    <div>Small Business Owner</div>
                                </div>
                            </div>
                            <img src="https://html.fleexstudio.com/quad/assets/images/icons/quito1.svg" alt="hello" className='w-1/12 mt-10 mb-3'/>
                            <p className='text-gray-500 font-semibold'>"As a small business owner, I needed an SEO solution that was powerful yet easy to use. Quad exceeded my expectations. The user-friendly interface made it simple to navigate, and the on-page optimization tools helped us fine-tune our website for better search engine visibility.”</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-10'>
                        <div className='flex h-full flex-col border-2 p-3 rounded-lg  hover:bg-white hover:shadow-lg hover:border-none leading-6'>
                            <div className='flex'>
                                <img src={image3} width={60} alt="Emily White" />
                                <div className='pl-3'>
                                    <div className='text-xl font-semibold mb-3'>Emily White</div>
                                    <div>E-commerce Manager</div>
                                </div>
                            </div>
                            <img src="https://html.fleexstudio.com/quad/assets/images/icons/quito1.svg" alt="hello" className='w-1/12 mt-10 mb-3'/>
                            <p className='text-gray-500 font-semibold'>"As a small business owner, I needed an SEO solution that was powerful yet easy to use. Quad exceeded my expectations. The user-friendly interface made it simple to navigate, and the on-page optimization tools helped us fine-tune our website for better search engine visibility.”</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Narrow>
        </div>
    );
}
