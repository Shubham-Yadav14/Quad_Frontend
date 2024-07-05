import React, { useEffect, useRef } from 'react';
import image from "../Images/header-element1.png";
import image1 from "../Images/features-img1.png";
import image2 from "../Images/features-img2.png";
import image3 from "../Images/features-img3.png";
import image4 from "../Images/features-img4.png";
import image5 from "../Images/features-img5.png";
import Narrow from '../Common/Narrow';

export default function FeatureProject() {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-full", "opacity-0");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const headingElement = document.getElementById("down-up1");
    const swiperElement = document.getElementById("swiperr");
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-full", "opacity-0");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const headingElement = document.getElementById("down-up2");
    const swiperElement = document.getElementById("swiperr");
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
    <div className='projectBg1 relative' style={{ minHeight: "100vh" }}>
      <Narrow>
        <div id='' className=' max-xl:opacity-100 max-xl:transform-none max-xl:transition-none'>
          <div className='py-20 max-md:py-24 px-5 max-lg:p-1'>
            <img src={image} alt="image" className='absolute left-[25%] top-[5%] rotate_infinite w-6/12 max-xl:w-9/12 max-xl:left-[15%]  max-xl:top-[10%]' />
            <div className='text-center text-white text-xl my-3'>Features</div>
            <div className='text-white font-semibold mx-auto w-[50vw] max-lg:w-[60vw] max-md:w-[80vw] text-5xl text-center max-lg:text-3xl'>
              Discover The Power Behind Quad
              Our Key Features
            </div>
          </div>
        </div>
        <div id='down-up1' className='opacity-0 transform translate-y-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none relative grid grid-cols-2 max-md:grid-cols-1 gap-7 z-1 my-10'>
          <div className='text-white px-7 pt-7 blurBg group rounded-md hover:transition hover:duration-700 hover:-translate-y-2'>
            <div className='text-2xl font-semibold'>Intuitive Project Dashboard</div>
            <div className='my-3'>Stay in control with our user-friendly project dashboard. Get a real-time overview of all your projects, tasks, and milestones at a glance. Intuitive project dashboard with Quad.</div>
            <div className='overflow-hidden'><img src={image1} className='rounded-md group-hover:transition group-hover:duration-700 group-hover:scale-110' /></div>
          </div>
          <div className='text-white px-7 pt-7 blurBg group rounded-md hover:transition hover:duration-700 hover:-translate-y-2'>
            <div className='text-2xl font-semibold'>Secure Data Management</div>
            <div className='my-3'>Trust our robust security measures to safeguard your project data. We prioritize the confidentiality and integrity of your information through state-of-the-art encryption.</div>
            <div className='overflow-hidden'><img src={image2} className='w-full rounded-md group-hover:transition group-hover:duration-700 group-hover:scale-110' /></div>
          </div>
        </div>
        <div id='down-up2' className='opacity-0 transform translate-y-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none relative grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-7 z-1 my-7'>
          <div className='text-white px-7 pt-7 blurBg group rounded-md hover:transition hover:duration-700 hover:-translate-y-2'>
            <div className='text-2xl font-semibold'>Assignment and Tracking</div>
            <div className='my-3'>Assign tasks effortlessly, track progress, and ensure everyone knows their responsibilities. Assignment & tracking.</div>
            <div className='overflow-hidden'><img src={image3} className='w-full rounded-md group-hover:transition group-hover:duration-700 group-hover:scale-110' /></div>
          </div>
          <div className='text-white px-7 pt-7 blurBg group rounded-md hover:transition hover:duration-700 hover:-translate-y-2'>
            <div className='text-2xl font-semibold'>Collaborative Workspace</div>
            <div className='my-3'>Foster seamless collaboration with a centralized workspace. Share files, updates, and feedback in real-time,</div>
            <div className='overflow-hidden'><img src={image4} className='w-full rounded-md group-hover:transition group-hover:duration-700 group-hover:scale-110' /></div>
          </div>
          <div className='text-white px-7 pt-7 blurBg group rounded-md hover:transition hover:duration-700 hover:-translate-y-2'>
            <div className='text-2xl font-semibold'>Customisable Workflows</div>
            <div className='my-3'>Tailor the software to your team's unique needs. Create custom workflows that align requirements.</div>
            <div className='overflow-hidden'><img src={image5} className='w-full rounded-md group-hover:transition group-hover:duration-700 group-hover:scale-110' /></div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}
