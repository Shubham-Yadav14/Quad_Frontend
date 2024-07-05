import React, { useEffect } from "react";
import Narrow from "../Common/Narrow";
import img from "../Images/features-icon1.svg";

export default function MoreFeaturesProject() {
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

    const element = document.getElementById("heading");
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
    const elementRight = document.getElementById("right-left1");

    if (!elementRight) {
      console.error("Element with id 'right-left1' not found");
      return;
    }

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting");
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("translate-x-full", "opacity-0");
          } else {
            console.log("Element is not intersecting");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    observerRight.observe(elementRight);

    return () => {
      observerRight.unobserve(elementRight);
    };
  }, []);

  useEffect(() => {
    const elementRight = document.getElementById("left-right1");

    if (!elementRight) {
      console.error("Element with id 'right-left1' not found");
      return;
    }

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting");
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("-translate-x-full", "opacity-0");
          } else {
            console.log("Element is not intersecting");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    observerRight.observe(elementRight);

    return () => {
      observerRight.unobserve(elementRight);
    };
  }, []);
  useEffect(() => {
    const elementRight = document.getElementById("left-right2");

    if (!elementRight) {
      console.error("Element with id 'right-left1' not found");
      return;
    }

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting");
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("-translate-x-full", "opacity-0");
          } else {
            console.log("Element is not intersecting");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    observerRight.observe(elementRight);

    return () => {
      observerRight.unobserve(elementRight);
    };
  }, []);
  useEffect(() => {
    const elementRight = document.getElementById("left-right3");

    if (!elementRight) {
      console.error("Element with id 'right-left1' not found");
      return;
    }

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting");
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("-translate-x-full", "opacity-0");
          } else {
            console.log("Element is not intersecting");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    observerRight.observe(elementRight);

    return () => {
      observerRight.unobserve(elementRight);
    };
  }, []);
  useEffect(() => {
    const elementRight = document.getElementById("right-left1");

    if (!elementRight) {
      console.error("Element with id 'right-left1' not found");
      return;
    }

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting");
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("translate-x-full", "opacity-0");
          } else {
            console.log("Element is not intersecting");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    observerRight.observe(elementRight);

    return () => {
      observerRight.unobserve(elementRight);
    };
  }, []);
  useEffect(() => {
    const elementRight = document.getElementById("right-left2");

    if (!elementRight) {
      console.error("Element with id 'right-left1' not found");
      return;
    }

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting");
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("translate-x-full", "opacity-0");
          } else {
            console.log("Element is not intersecting");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    observerRight.observe(elementRight);

    return () => {
      observerRight.unobserve(elementRight);
    };
  }, []);
  useEffect(() => {
    const elementRight = document.getElementById("right-left3");

    if (!elementRight) {
      console.error("Element with id 'right-left1' not found");
      return;
    }

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting");
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("translate-x-full", "opacity-0");
          } else {
            console.log("Element is not intersecting");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    observerRight.observe(elementRight);

    return () => {
      observerRight.unobserve(elementRight);
    };
  }, []);

  return (
    <div className=" mt-32 mb-32">
      <Narrow>
        <div
          id="heading"
          className="opacity-0 transform translate-y-full transition-all duration-700"
        >
          <div className=" text-center text-darkPurpleProject font-semibold">
            More Features
          </div>
          <div className="text-5xl  font-bold text-center px-40 max-lg:px-5 max-lg:text-3xl max-md:px-1 max-md:text-2xl w-5/6 mx-auto leading-snug mt-3">
            Experience Seamless Project Collaboration With Quad
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10 ">
          <div
            className="flex max-xl:flex-col gap-5"
          >
            <div id="left-right1" className="opacity-0 transform -translate-x-full rounded-lg border border-gray-200 p-7 hover:bg-darkPurpleProject hover:shadow-2xl hover:border-none hover:shadow-gray-500 transition-all duration-500 ease-in-out group">
              <img
                src={img}
                className="bg-[#EDECFD] p-4 rounded-full group-hover:bg-white"
                alt=""
              />
              <div className="text-2xl mt-4 font-semibold group-hover:text-white">
                Intuitive Project Planning
              </div>
              <p className="text-base text-gray-600 font-semibold mt-4 group-hover:text-gray-300">
                Effortlessly plan and organize your projects from start to
                finish. Our software provides an intuitive project planning
                interface, allowing you.
              </p>
              <button className="mt-5 text-black font-semibold text-lg group-hover:text-white">
                Learn More
              </button>
            </div>
            <div id="left-right2" className="opacity-0 transform -translate-x-full rounded-lg border border-gray-200 p-7 hover:bg-darkPurpleProject hover:shadow-2xl hover:border-none hover:shadow-gray-500 transition-all duration-500 ease-in-out group">
              <img
                src={img}
                className="bg-[#EDECFD] p-4 rounded-full group-hover:bg-white"
                alt=""
              />
              <div className="text-2xl mt-4 font-semibold group-hover:text-white">
                Intuitive Project Planning
              </div>
              <p className="text-base text-gray-600 font-semibold mt-4 group-hover:text-gray-300">
                Effortlessly plan and organize your projects from start to
                finish. Our software provides an intuitive project planning
                interface, allowing you.
              </p>
              <button className="mt-5 text-black font-semibold text-lg group-hover:text-white">
                Learn More
              </button>
            </div>
            <div id="right-left1" className=" opacity-0 transform translate-x-full rounded-lg border border-gray-200 p-7 hover:bg-darkPurpleProject hover:shadow-2xl hover:border-none hover:shadow-gray-500 transition-all duration-500 ease-in-out group">
              <img
                src={img}
                className="bg-[#EDECFD] p-4 rounded-full group-hover:bg-white"
                alt=""
              />
              <div className="text-2xl mt-4 font-semibold group-hover:text-white">
                Intuitive Project Planning
              </div>
              <p className="text-base text-gray-600 font-semibold mt-4 group-hover:text-gray-300">
                Effortlessly plan and organize your projects from start to
                finish. Our software provides an intuitive project planning
                interface, allowing you.
              </p>
              <button className="mt-5 text-black font-semibold text-lg group-hover:text-white">
                Learn More
              </button>
            </div>
          </div>
          <div className=" flex max-xl:flex-col gap-5">
            <div id="left-right3" className="opacity-0 transform -translate-x-full rounded-lg border border-gray-200 p-7 hover:bg-darkPurpleProject hover:shadow-2xl hover:border-none hover:shadow-gray-500 transition-all duration-500 ease-in-out group">
              <img
                src={img}
                className="bg-[#EDECFD] p-4 rounded-full group-hover:bg-white"
                alt=""
              />
              <div className="text-2xl mt-4 font-semibold group-hover:text-white">
                Intuitive Project Planning
              </div>
              <p className="text-base text-gray-600 font-semibold mt-4 group-hover:text-gray-300">
                Effortlessly plan and organize your projects from start to
                finish. Our software provides an intuitive project planning
                interface, allowing you.
              </p>
              <button className="mt-5 text-black font-semibold text-lg group-hover:text-white">
                Learn More
              </button>
            </div>
            <div id="right-left2" className="opacity-0 transform translate-x-full rounded-lg border border-gray-200 p-7 hover:bg-darkPurpleProject hover:shadow-2xl hover:border-none hover:shadow-gray-500 transition-all duration-500 ease-in-out group">
              <img
                src={img}
                className="bg-[#EDECFD] p-4 rounded-full group-hover:bg-white"
                alt=""
              />
              <div className="text-2xl mt-4 font-semibold group-hover:text-white">
                Intuitive Project Planning
              </div>
              <p className="text-base text-gray-600 font-semibold mt-4 group-hover:text-gray-300">
                Effortlessly plan and organize your projects from start to
                finish. Our software provides an intuitive project planning
                interface, allowing you.
              </p>
              <button className="mt-5 text-black font-semibold text-lg group-hover:text-white">
                Learn More
              </button>
            </div>
            <div id="right-left3" className="opacity-0 transform translate-x-full rounded-lg border border-gray-200 p-7 hover:bg-darkPurpleProject hover:shadow-2xl hover:border-none hover:shadow-gray-500 transition-all duration-500 ease-in-out group">
              <img
                src={img}
                className="bg-[#EDECFD] p-4 rounded-full group-hover:bg-white"
                alt=""
              />
              <div className="text-2xl mt-4 font-semibold group-hover:text-white">
                Intuitive Project Planning
              </div>
              <p className="text-base text-gray-600 font-semibold mt-4 group-hover:text-gray-300">
                Effortlessly plan and organize your projects from start to
                finish. Our software provides an intuitive project planning
                interface, allowing you.
              </p>
              <button className="mt-5 text-black font-semibold text-lg group-hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}
