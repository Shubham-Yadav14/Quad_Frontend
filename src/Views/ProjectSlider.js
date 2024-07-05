// SliderComponent.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../Images/swiper-carousel-img1.png";
import image2 from "../Images/swiper-carousel-img2.png";
import image3 from "../Images/swiper-carousel-img3.png";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (current, next) => setCurrentSlide(next),
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
  };

  const cardData = [
    { id: 1, content: <img src={image1} alt="Slide 1" /> },
    { id: 2, content: <img src={image2} alt="Slide 2" /> },
    { id: 3, content: <img src={image3} alt="Slide 3" /> },
    { id: 4, content: <img src={image1} alt="Slide 4" /> },
    { id: 5, content: <img src={image2} alt="Slide 5" /> },
    { id: 6, content: <img src={image3} alt="Slide 6" /> },
  ];

  return (
    <div className='bg-[#FAFAFA]'>
    <div className="slider-container ">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="slider-item">
            <div className={`card ${index === currentSlide ? 'active' : ''}`}>
              {card.content}
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default SliderComponent;
