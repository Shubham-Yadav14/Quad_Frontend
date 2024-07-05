import React from "react";
import { useEffect, useState } from "react";
import Narrow from "../Common/Narrow";
import check from "../Images/check-icons1.svg";

export default function Pricing() {
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

    const element = document.getElementById("bottom-up");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [isAnnual, setIsAnnual] = useState(true);

  const toggleSwitch = () => {
    setIsAnnual(!isAnnual);
  };

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

    const element = document.getElementById("card1");
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
    <div className="pb-20" id="pricing">
      <Narrow>
        <div
          id="bottom-up"
          className="w-7/12 max-xl:w-full mx-auto opacity-0 transform translate-y-full transition-all duration-700 mb-10 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
        >
          <div className="p-2 bg-purpleBg rounded-xl font-semibold text-customPurple text-center mx-auto w-40">
            Pricing Plan
          </div>
          <div className="text-center text-4xl font-bold mt-5">
          Empower Your Success Unveiling Quad Flexible And Affordable Pricing Plans
          </div>
        </div>

        <div className="flex justify-center text-xl font-semibold mb-10">
          <span
            className={`${isAnnual ? "text-gray-400" : "text-black"} my-auto`}
          >
            Monthly
          </span>
          <div
            className="mx-2 w-20 h-10 flex items-center my-auto  rounded-full px-2 cursor-pointer bg-[#4B24EE]"
              
            
            onClick={toggleSwitch}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                isAnnual ? "translate-x-10" : ""
              }`}
            />
          </div>
          <span
            className={`${!isAnnual ? "text-gray-400" : "text-black"} my-auto`}
          >
            Annual
          </span>
        </div>

        <div id="card1" className="grid grid-cols-3 max-xl:grid-cols-1 gap-10 mt-5 opacity-0 transform translate-y-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none">
          <div>
            <div className=" group bg-lightPurplebg p-5 hover:bg-customPurple transition-all duration-700 ease-in-out">
              <h1 className="text-xl font-semibold mb-5 group-hover:text-white">Basic Plan</h1>
              <div className="text-gray-500 mb-5 font-semibold group-hover:text-gray-200">
                <span className="text-6xl font-semibold text-black group-hover:text-white">
                    {isAnnual && (
                        "$399"
                    )}
                    {!isAnnual && (
                        "$99"
                    )}
                </span>
                {isAnnual && (
                        "/year"
                    )}
                    {!isAnnual && (
                        "/month"
                    )}
              </div>
              <p className="text-gray-500 font-semibold group-hover:text-gray-200">
                Ideal for individuals or small businesses looking to establish a
                solid online presence.
              </p>
              <button className="mt-5 py-3 w-full rounded-lg border border-customPurple text-customPurple font-bold group-hover:bg-white">Get Started</button>
            </div>

            <div className="mt-3">
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold"> Essential features to establish a solid online</p>
                </div>
                <hr className="mt-3 mb-3"/>
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold"> Keyword research, on-page optimisation</p>
                </div>
                <hr className="mt-3 mb-3"/>
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold">  Ideal for individuals and small businesses</p>
                </div>
            </div>
          </div>

          <div>
            <div className=" bg-customPurple p-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold mb-5 text-white">Basic Plan</h1>
                <div className=" bg-lightPurplebg text-sm px-2 py-1 h-7 rounded-xl text-customPurple font-semibold">Most Popular</div>
              </div>
              <div className=" mb-5 font-semibold text-gray-200">
                <span className="text-6xl font-semibold text-white">
                    {isAnnual && (
                        "$549"
                    )}
                    {!isAnnual && (
                        "$149"
                    )}
                    </span>
                    {isAnnual && (
                        "/year"
                    )}
                    {!isAnnual && (
                        "/month"
                    )}
              </div>
              <p className=" font-semibold text-gray-200">
                Ideal for individuals or small businesses looking to establish a
                solid online presence.
              </p>
              <button className="mt-5 py-3 w-full rounded-lg  text-customPurple font-bold bg-white">Choose Pro</button>
            </div>

            <div className="mt-3">
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold"> Competitor analysis for strategic insights</p>
                </div>
                <hr className="mt-3 mb-3"/>
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold"> Backlink management for enhanced online</p>
                </div>
                <hr className="mt-3 mb-3"/>
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold"> Real-time rank tracking for prompt</p>
                </div>
            </div>
          </div>

          <div>
            <div className=" group bg-lightPurplebg p-5 hover:bg-customPurple transition-all duration-700 ease-in-out">
              <h1 className="text-xl font-semibold mb-5 group-hover:text-white">Basic Plan</h1>
              <div className="text-gray-500 mb-5 font-semibold group-hover:text-gray-200">
                <span className="text-6xl font-semibold text-black group-hover:text-white">
                    {isAnnual && (
                        "$999"
                    )}
                    {!isAnnual && (
                        "$199"
                    )}
                </span>
                {isAnnual && (
                        "/year"
                    )}
                    {!isAnnual && (
                        "/month"
                    )}
              </div>
              <p className="text-gray-500 font-semibold group-hover:text-gray-200">
                Ideal for individuals or small businesses looking to establish a
                solid online presence.
              </p>
              <button className="mt-5 py-3 w-full rounded-lg border border-customPurple text-customPurple font-bold group-hover:bg-white">Select Enterprise</button>
            </div>

            <div className="mt-3">
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold"> Priority support for quick issue resolution</p>
                </div>
                <hr className="mt-3 mb-3"/>
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold"> Enhanced analytics for deeper insights</p>
                </div>
                <hr className="mt-3 mb-3"/>
                <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p className="text-gray-500 font-semibold">  Customization options for tailored solutions</p>
                </div>
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}
