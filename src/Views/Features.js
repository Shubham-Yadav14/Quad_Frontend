import React, { useEffect } from "react";
import Narrow from "../Common/Narrow";
import img1 from "../Images/features3-img1.png";
import logo1 from "../Images/features3-icon1.svg";

export default function Features() {
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

    const element = document.getElementById("Heading1");
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
    const elementLeft = document.getElementById("float-left1");

    const observerLeft = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("-translate-x-full", "opacity-0");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    if (elementLeft) {
      observerLeft.observe(elementLeft);
    }

    return () => {
      if (elementLeft) {
        observerLeft.unobserve(elementLeft);
      }
    };
  }, []);

  useEffect(() => {
    const elementRight = document.getElementById("float-right1");

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
    const elementRight = document.getElementById("float-right2");

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
    const elementRight = document.getElementById("float-right3");

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
    <div className=" mt-18 py-20" id="feature">
      <Narrow>
        <div
          id="Heading1"
          className="w-5/12 max-xl:w-full mx-auto opacity-0 transform translate-y-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
        >
          <div className="p-2 bg-purpleBg rounded-xl font-semibold text-customPurple text-center mx-auto w-40">
            Features
          </div>
          <div className="text-center text-4xl font-bold mt-5">
            Your Path To SEO Triumph Quad Leads The Way
          </div>
        </div>

        <div className="flex max-xl:flex-col mt-10 gap-20 max-xl:gap-5">
          <div>
            <img
              id="float-left1"
              className="opacity-0 transform -translate-x-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
              src={img1}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div
              id="float-right1"
              className="opacity-0 transform translate-x-full transition-all duration-700 bg-lightPurplebg flex max-xl:flex-col gap-2 py-5 px-14 max-xl:px-5 rounded-lg border-l-8 border-gray-400 hover:border-customPurple hover:shadow-xl max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
            >
              <div>
                <img src={logo1} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">
                  Advanced Keyword Research
                </h1>
                <p className="text-base font-semibold text-gray-500 mt-5">
                  Uncover the most valuable keywords with our state-of-the-art
                  research tools.
                </p>
              </div>
            </div>
            <div
              id="float-right2"
              className="opacity-0 transform translate-x-full transition-all duration-700 bg-lightPurplebg flex max-xl:flex-col gap-2 py-5 px-14 max-xl:px-5 rounded-lg border-l-8 border-gray-400 hover:border-customPurple hover:shadow-xl max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
            >
              <div>
                <img src={logo1} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">
                  Advanced Keyword Research
                </h1>
                <p className="text-base font-semibold text-gray-500 mt-5">
                  Uncover the most valuable keywords with our state-of-the-art
                  research tools.
                </p>
              </div>
            </div>
            <div
              id="float-right3"
              className="opacity-0 transform translate-x-full transition-all duration-700 bg-lightPurplebg flex max-xl:flex-col gap-2 py-5 px-14 max-xl:px-5 rounded-lg border-l-8 border-gray-400 hover:border-customPurple hover:shadow-xl max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
            >
              <div>
                <img src={logo1} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">
                  Advanced Keyword Research
                </h1>
                <p className="text-base font-semibold text-gray-500 mt-5">
                  Uncover the most valuable keywords with our state-of-the-art
                  research tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}
