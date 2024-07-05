import React, { useState, useEffect } from 'react';
import Narrow from './Narrow';
import { Link,useNavigate,useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const [isTop, setIsTop] = useState(true);
  const [isNav, setIsNav] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const sectionIds = ['home', 'about', 'feature', 'product', 'pricing', 'faq', 'project'];
  const location = useLocation();
  const navigate=useNavigate();
  const toggle = () => {
    setIsNav(!isNav);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleClick = (id3) => {
    const Section = document.getElementById(id3);
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`navbar  ${props.bg ? `${isTop?"blurBg1":"bg-[#151515]"}` : "bg-white"} ${!isTop && 'shadow-md'}`}>
        <Narrow class="flex my-auto h-full max-md:hidden">
          <div className={isTop ? "flex items-center py-2 h-full w-full justify-between mt-3" : "flex items-center py-2 mt-3 h-full w-full justify-between transition duration-500 -translate-y-2"}>
            <img src={`${!props.bg?"https://html.fleexstudio.com/quad/assets/images/logo/logo3.png":"https://html.fleexstudio.com/quad/assets/images/logo/logo1.png"}`} alt="" />
            <div className={`w-[500px] max-lg:w-[350px] flex justify-between py-4 px-10 max-lg:text-sm rounded-md max-lg:px-3 max-md:hidden ${isTop ? `transition duration-1500 ${props.bg?" bg-purple-800":"bg-[#EDE9FD]"}` : `transition duration-1500 ${props.bg ? "bg-[#151515]" : "bg-white"} `}`}>
              {sectionIds.map((id, index) => (
                id === 'project' ? (
                  <span
                    key={index}
                    onClick={()=>{navigate('/project');window.scrollTo(0,0)}}
                    className={
                      location.pathname === '/project' 
                        ? 'text-white font-bold' 
                        : (props.bg ? (isTop ? "text-black" : "text-white") : "text-black")
                    }
                  >
                    Project
                  </span>
                ) : (
                  <span
                    key={index}
                    onClick={() =>{navigate('/');setTimeout(() => handleClick(id), 10);}}
                    className={activeSection === id ? 'text-customPurple font-semibold' : (props.bg ? (isTop ? "text-gray-300" : "text-white") : "text-black")}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </span>
                )
              ))}
            </div>
            <div >
              <Link to="/login" className={`font-semibold ${props.bg ? "text-white" : "text-black"}`}>Login</Link>
              <button className={`mx-3 ${props.bg?`${isTop?"bg-purple-800":"bg-customPurple"}`:"bg-customPurple"}  text-white px-3 py-3 rounded-xl font-semibold`}>Try for free</button>
            </div>
          </div>
        </Narrow>
      </div>
      <div className={`hidden navbar max-md:flex bg-customPurple`}>
        <div className='flex px-5 items-center h-full w-full justify-between py-5'>
          <img src="https://html.fleexstudio.com/quad/assets/images/logo/logo1.png" alt="" />
          <div className='flex items-center'>
            <button className='border-white border-2 p-2' onClick={toggle}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512">
                <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
        </div>
        <div style={{ height: "100vh" }} className={`absolute top-0 w-[100vw] p-5 bg-customPurple right-[100%] ${isNav ? "transition duration-300 ease-out translate-x-[100vw]" : "transition duration-300 ease-in -translate-x-[0%]"}`}>
          <div className='flex justify-between '>
            <img src="https://html.fleexstudio.com/quad/assets/images/logo/logo1.png" alt="" />
            <button onClick={toggle}>
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512">
                <path fill="#74C0FC" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </button>
          </div>
          <div className='flex flex-col gap-5 text-white text-lg py-10'>
            <span onClick={() => { toggle(); window.scroll(0, 0); }}>Home</span>
            <a href="#about" onClick={toggle}>About</a>
            <a href="#feature" onClick={toggle}>Feature</a>
            <a href="#product" onClick={toggle}>Product</a>
            <a href="#pricing" onClick={toggle}>Pricing</a>
            <a href="#faq" onClick={toggle}>Faq</a>
            <Link to="/login" className='w-full bg-white text-center text-customPurple p-3 rounded-xl text-sm'>Login</Link>
            <div className='flex justify-between gap-10'>
              <div><span className='font-bold text-xl'>Contact Info</span>
                <div className='text-lg'>
                  <div>+3(924)4596512</div>
                  <div>info@example.com</div>
                </div>
              </div>
              <div><span className='font-bold text-xl'>Our Location</span>
                <div className='text-sm'>
                  <div>55 East Birchwood Ave.Brooklyn</div>
                  <div>New York 11201,United States</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 ">
            <div className="p-2 bg-[#F6F5FE] rounded-full">
              <svg
                height={25}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </div>

            <div className="p-2 bg-[#F6F5FE] rounded-full">
              <svg
                height={25}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
              </svg>
            </div>

            <div className="p-2 bg-[#F6F5FE] rounded-full">
              <svg
                height={25}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </div>

            <div className="p-2 bg-[#F6F5FE] rounded-full">
              <svg
                height={25}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
