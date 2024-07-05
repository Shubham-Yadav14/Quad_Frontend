import React, { useState, useEffect } from "react";
import Narrow from "../Common/Narrow";
import image1 from '../Images/tabs-btn1.svg';
import image2 from '../Images/tabs-btn2.svg';
import image3 from '../Images/tabs-btn3.svg';
import image4 from '../Images/tabs-btn4.svg';
import image5 from '../Images/tabs-btn5.png';
import image6 from '../Images/vertyical-tabs-img1.png';
import image7 from '../Images/vertical-tabs-img2.png';

export default function MultiProject() {
  const [tab, setTab] = useState("User-Friendly Interface");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); // match the animation duration
    return () => clearTimeout(timer);
  }, [tab]);

  const tabContent = () => {
    switch (tab) {
      case "User-Friendly Interface":
      case "Proven Track Record":
      case "Robust Security Measures":
      case "Customisable Workflows":
      case "Insightful Analytics":
        return (
          <div className={`relative ${animate ? "slide-enter" : ""}`}>
            <img src={image6} className="w-9/12 mx-auto max-md:w-11/12" />
            <img src={image7} className="absolute w-4/12 max-md:w-5/12 top-[70%] right-[0%]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-20 bg-[#FAFAFA] ">
      <Narrow>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-blue-600 text-xl">Why Choose Us</p>
          <h1 className="text-4xl font-semibold">Powerful Project Collaboration Starts Here</h1>
        </div>
        <div className="flex max-xl:flex-col my-10 bg-white p-10 max-md:p-0 max-lg:p-5 gap-10">
          <div className="flex flex-col max-xl:w-[50%] max-lg:w-[80%] max-md:w-full max-xl:mx-auto w-[30%] text-sm">
            <div
              onClick={() => { setTab("User-Friendly Interface"); }}
              className={`flex hover:cursor-pointer items-center my-3 ${tab === "User-Friendly Interface" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  py-2 px-4 rounded-full`}
            >
              <div className="flex bg-[#EDECFD] rounded-full w-[60px] h-[60px] items-center justify-center py-3 mr-2">
                <img src={image1} />
              </div>
              <div>
                <div className="text-lg font-semibold">User-Friendly Interface</div>
                <div>Prioritise user experience</div>
              </div>
            </div>
            <div
              onClick={() => { setTab("Proven Track Record"); }}
              className={`flex hover:cursor-pointer items-center my-3 ${tab === "Proven Track Record" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  py-2 px-4  rounded-full`}
            >
              <div className="flex bg-[#EDECFD] rounded-full w-[60px] h-[60px] items-center justify-center p-3 mr-2">
                <img src={image2} />
              </div>
              <div>
                <div className="text-lg font-semibold">Proven Track Record</div>
                <div>Join the ranks of satisfied users</div>
              </div>
            </div>
            <div
              onClick={() => { setTab("Robust Security Measures"); }}
              className={`flex hover:cursor-pointer items-center my-3 ${tab === "Robust Security Measures" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  py-2 px-4  rounded-full`}
            >
              <div className="flex bg-[#EDECFD] rounded-full w-[60px] h-[60px] items-center justify-center p-3 mr-2">
                <img src={image3} />
              </div>
              <div>
                <div className="text-lg font-semibold">Robust Security Measures</div>
                <div>Security is our top priority.</div>
              </div>
            </div>
            <div
              onClick={() => { setTab("Customisable Workflows"); }}
              className={`flex hover:cursor-pointer items-center my-3 ${tab === "Customisable Workflows" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  py-2 px-4  rounded-full`}
            >
              <div className="flex bg-[#EDECFD] rounded-full w-[60px] h-[60px] items-center justify-center p-3 mr-2">
                <img src={image4} />
              </div>
              <div>
                <div className="text-lg font-semibold">Customisable Workflows</div>
                <div>No two projects are the same.</div>
              </div>
            </div>
            <div
              onClick={() => { setTab("Insightful Analytics"); }}
              className={`flex hover:cursor-pointer items-center my-3 ${tab === "Insightful Analytics" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  py-2 px-4  rounded-full`}
            >
              <div className="flex bg-[#EDECFD] rounded-full w-[60px] h-[60px] items-center justify-center p-3 mr-2">
                <img src={image5} />
              </div>
              <div>
                <div className="text-lg font-semibold">Insightful Analytics</div>
                <div>Make informed decisions.</div>
              </div>
            </div>
          </div>
          <div className="w-[70%] max-xl:w-full">
            {tabContent()}
          </div>
        </div>
      </Narrow>
    </div>
  );
}
