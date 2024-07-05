import React from "react";
import { useEffect } from "react";
import Narrow from "../Common/Narrow";

export default function Steps() {

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
            threshold: 0.1, // Adjust this threshold as needed
          }
        );
    
        const element = document.getElementById("left-part");
        if (element) {
          observer.observe(element);
        }
    
        return () => {
          if (element) {
            observer.unobserve(element);
          }
        };
      }, []);

      useEffect(() => {
        const elementRight = document.getElementById("right1");
    
        const observerRight = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("translate-x-0", "opacity-100");
                entry.target.classList.remove("translate-x-full", "opacity-0");
              }
            });
          },
          {
            threshold: 0.1, // Adjust this threshold as needed
          }
        );
    
        if (elementRight) {
          observerRight.observe(elementRight);
        }
    
        return () => {
          if (elementRight) {
            observerRight.unobserve(elementRight);
          }
        };
      }, []);

      useEffect(() => {
        const elementRight = document.getElementById("right2");
    
        const observerRight = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("translate-x-0", "opacity-100");
                entry.target.classList.remove("translate-x-full", "opacity-0");
              }
            });
          },
          {
            threshold: 0.1, // Adjust this threshold as needed
          }
        );
    
        if (elementRight) {
          observerRight.observe(elementRight);
        }
    
        return () => {
          if (elementRight) {
            observerRight.unobserve(elementRight);
          }
        };
      }, []);

      useEffect(() => {
        const elementRight = document.getElementById("right3");
    
        const observerRight = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("translate-x-0", "opacity-100");
                entry.target.classList.remove("translate-x-full", "opacity-0");
              }
            });
          },
          {
            threshold: 0.1, // Adjust this threshold as needed
          }
        );
    
        if (elementRight) {
          observerRight.observe(elementRight);
        }
    
        return () => {
          if (elementRight) {
            observerRight.unobserve(elementRight);
          }
        };
      }, []);

  return (
    <div className=" bg-lightPurplebg py-32 max-xl:py-10 mb-32" id="product">
      <Narrow>
      <div className="  grid grid-cols-2 max-xl:grid-cols-1 gap-24 max-xl:gap-3">
        <div
          id="left-part"
          className="mx-auto opacity-0 transform translate-y-full transition-all duration-700 my-auto max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
        >
          <div className="p-2 bg-purpleBg rounded-xl font-semibold text-customPurple text-center w-40">
          Step-By-Step
          </div>
          <div className="text-4xl font-bold mt-5 pr-10">
          Your Path To SEO Success Mastering Every Step With Quad
          </div>
          <p className="text-base text-gray-500 mt-5 font-semibold">Welcome to the ultimate solution for managing your SEO strategies effectively. Our SEO Management Software empowers businesses to streamline their SEO efforts, optimize website</p>
          <div><button className="bg-customPurple p-3 text-white font-semibold mt-5 rounded-lg hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out">Contact Us</button></div>
        </div>
        
        <div className="flex flex-col gap-14 max-xl:gap-3">
            <div id="right1" className="flex max-xl:flex-col gap-10 opacity-0 transform translate-x-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none">
                <div className="p-2"><p className="bg-white h-20 w-20 flex border border-customPurple items-center justify-center rounded-full text-3xl font-semibold hover:bg-customPurple hover:text-white transition-all duration-300 ease-in-out">1</p></div>
                <div>
                    <h1 className="text-2xl font-semibold hover:text-customPurple transition-all duration-300 ease-in-out hover:cursor-pointer">Sign Up & Account Creation</h1>
                    <p className="text-base text-gray-500 mt-4 font-semibold leading-7">Begin your journey by creating an account with Quad Click on the 'Sign-Up' button and fill in your details to access your personalised dashboard.</p>
                </div>
            </div>
            <div id="right2" className="max-xl:opacity-100 max-xl:transform-none max-xl:transition-none flex max-xl:flex-col gap-10 opacity-0 transform translate-x-full transition-all duration-700">
                <div className="p-2"><p className="bg-white h-20 w-20 flex border border-customPurple items-center justify-center rounded-full text-3xl font-semibold hover:bg-customPurple hover:text-white transition-all duration-300 ease-in-out">2</p></div>
                <div>
                    <h1 className="text-2xl font-semibold hover:text-customPurple transition-all duration-300 ease-in-out hover:cursor-pointer">Comprehensive Keyword Research</h1>
                    <p className="text-base text-gray-500 mt-4 font-semibold leading-7">Begin your journey by creating an account with Quad Click on the 'Sign-Up' button and fill in your details to access your personalised dashboard.</p>
                </div>
            </div>
            <div id="right3" className="max-xl:opacity-100 max-xl:transform-none max-xl:transition-none flex max-xl:flex-col gap-10 opacity-0 transform translate-x-full transition-all duration-700">
                <div className="p-2"><p className="bg-white h-20 w-20 flex border border-customPurple items-center justify-center rounded-full text-3xl font-semibold hover:bg-customPurple hover:text-white transition-all duration-300 ease-in-out">3</p></div>
                <div>
                    <h1 className="text-2xl font-semibold hover:text-customPurple transition-all duration-300 ease-in-out hover:cursor-pointer">On-Page Optimisation Guidance</h1>
                    <p className="text-base text-gray-500 mt-4 font-semibold leading-7">Begin your journey by creating an account with Quad Click on the 'Sign-Up' button and fill in your details to access your personalised dashboard.</p>
                </div>
            </div>
            
        </div>
      </div>
      </Narrow>
    </div>
  );
}
