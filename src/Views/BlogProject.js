import React, { useEffect } from "react";
import Narrow from "../Common/Narrow";
import img from "../Images/blog-img1.png";
import img1 from "../Images/calender-img1.svg";

export default function BlogProject() {
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

    const element = document.getElementById("headingg");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <div className="mb-32">
      <Narrow>
        <div
          id="headingg"
          className="opacity-0 transform translate-y-full transition-all duration-700 mt-32 mb-10"
        >
          <div className=" text-center text-darkPurpleProject font-semibold">
            Blog
          </div>
          <div className="text-5xl  font-bold text-center px-40 max-lg:px-5 max-lg:text-3xl max-md:px-1 max-md:text-2xl w-5/6 mx-auto leading-snug mt-3">
            Empowering Your Project Management Journey
          </div>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          <div className="group border border-gray-200 rounded-lg hover:shadow-lg hover:shadow-gray-400  transition-all duration-500 ease-in-out">
            <div className="relative overflow-hidden rounded-t-lg">
              <img src={img} alt="" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-700 ease-in-out group-hover:bg-opacity-50 group-hover:translate-y-0 translate-y-full"></div>
            </div>
            <div className="p-4">
              <div className="text-base text-gray-500 mt-4 font-semibold flex gap-2">
                <img src={img1} alt="" />
                November 21, 2023
              </div>
              <div className="text-xl font-semibold mt-3">
                Mastering Task Prioritization: A Guide for Project Managers
              </div>
              <p className="text-base text-gray-600 mt-4">
                Explore effective strategies and best practices for prioritising
                tasks within your projects mastering task.
              </p>
              <button className="text-lg font-semibold mt-5 mb-3">
                Learn More
              </button>
            </div>
          </div>
          <div className="group border border-gray-200 rounded-lg hover:shadow-lg hover:shadow-gray-400  transition-all duration-500 ease-in-out">
            <div className="relative overflow-hidden rounded-t-lg">
              <img src={img} alt="" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-700 ease-in-out group-hover:bg-opacity-50 group-hover:translate-y-0 translate-y-full"></div>
            </div>
            <div className="p-4">
              <div className="text-base text-gray-500 mt-4 font-semibold flex gap-2">
                <img src={img1} alt="" />
                November 21, 2023
              </div>
              <div className="text-xl font-semibold mt-3">
                Mastering Task Prioritization: A Guide for Project Managers
              </div>
              <p className="text-base text-gray-600 mt-4">
                Explore effective strategies and best practices for prioritising
                tasks within your projects mastering task.
              </p>
              <button className="text-lg font-semibold mt-5 mb-3">
                Learn More
              </button>
            </div>
          </div>
          <div className="group border border-gray-200 rounded-lg hover:shadow-lg hover:shadow-gray-400  transition-all duration-500 ease-in-out">
            <div className="relative overflow-hidden rounded-t-lg">
              <img src={img} alt="" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-700 ease-in-out group-hover:bg-opacity-50 group-hover:translate-y-0 translate-y-full"></div>
            </div>
            <div className="p-4">
              <div className="text-base text-gray-500 mt-4 font-semibold flex gap-2">
                <img src={img1} alt="" />
                November 21, 2023
              </div>
              <div className="text-xl font-semibold mt-3">
                Mastering Task Prioritization: A Guide for Project Managers
              </div>
              <p className="text-base text-gray-600 mt-4">
                Explore effective strategies and best practices for prioritising
                tasks within your projects mastering task.
              </p>
              <button className="text-lg font-semibold mt-5 mb-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}
