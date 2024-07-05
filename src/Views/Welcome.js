import React from "react";
import Narrow from "../Common/Narrow";
import img1 from "../Images/header3-img1.png";
import img2 from "../Images/header3-img2.png";
import { useInView } from "react-intersection-observer";

export default function Welcome() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 max-xl:py-5 welcomebg" id="home">
      <Narrow>
        <div
          ref={ref}
          className={`grid grid-cols-2 max-xl:grid-cols-1 gap-10 transition-opacity duration-700 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <div className="w-1/2 p-1 text-xl text-center text-customPurple bg-purpleBg rounded-lg">
              Welcome Quad SEO Software
            </div>
            <h1 className="text-6xl font-bold mt-5 max-xl:text-4xl">
              Discover The Future Of SEO Management Introducing Quad
            </h1>
            <p className="mt-5 text-base text-gray-600 font-semibold">
              Welcome to Quad, where groundbreaking SEO solutions meet
              simplicity. Elevate your online presence and soar to the top of
              search engine results with our advanced SEO software.
            </p>
            <div className="flex mt-5 gap-2">
              <div>
                <button className="p-3 bg-customPurple text-white text-base font-semibold rounded-xl hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out">
                  Get Ai SEO Guidance
                </button>
              </div>
              <div>
                <button className="p-3 text-customPurple font-bold text-base">
                  <u>Unlock SEO Success</u>
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex justify-end max-xl:justify-center">
            {/* Large Image */}
            <img
              src={img1}
              alt="Large Dashboard"
              className=""
              style={{ width: "85%" }}
            />

            {/* Small Image */}
            <div className="absolute top-[90%] left-[20%] max-xl:hidden transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={img2}
                alt="Small Dashboard"
                className="h-52"
              />
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}
