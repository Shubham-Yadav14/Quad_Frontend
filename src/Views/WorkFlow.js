import React, { useState, useEffect } from "react";
import Narrow from "../Common/Narrow";
import image6 from '../Images/works-img1.png';

export default function MultiProject() {
    const [tab, setTab] = useState("Board");
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 500); // match the animation duration
        return () => clearTimeout(timer);
    }, [tab]);

    const tabContent = () => {
        switch (tab) {
            case "Board":
            case "Views":
            case "Dashboard":
            case "Automations":
            case "Tracker":
            case "Docs":
            case "Apps":
                return (
                    <div className={`flex gap-20 max-md:flex-col max-md:gap-3 max-md:items-center ${animate ? "slide-enter" : ""}`}>
                        <img src={image6} className="w-7/12 max-md:w-10/12 max-md:my-auto " />
                        <div className="my-auto">
                            <div className=" text-customPurple">Board</div>
                            <div className="text-2xl mt-2 mb-5 font-semibold">Quad Board</div>
                            <div className="text-gray-500 text-xl max-md:text-lg">Start a new project effortlessly. Define the project scope, set objectives and establish milestne using our intuitive project creation wizard.</div>
                        </div>
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
                    <p className="text-blue-600 text-xl">Work Flow</p>
                    <h1 className="text-4xl font-semibold">How Quad Works</h1>
                </div>
                <div className="flex flex-col my-10 bg-[#FAFAFA] p-10 max-md:p-0 max-lg:p-5 gap-10 ">
                    <div className="flex bg-white justify-between px-10 rounded-full  w-9/12 mx-auto text-lg font-semibold max-lg:grid max-lg:grid-cols-2 max-lg:w-11/12 max-lg:gap-3 max-lg:rounded-lg max-md:grid-cols-1">
                        <div
                            onClick={() => { setTab("Board"); }}
                            className={`flex hover:cursor-pointer items-center my-3 ${tab === "Board" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  px-5 py-2 rounded-full`}
                        >
                            <div>
                                Board
                            </div>
                        </div>
                        <div
                            onClick={() => { setTab("Views"); }}
                            className={`flex hover:cursor-pointer items-center my-3 ${tab === "Views" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  px-5 py-2 rounded-full`}
                        >
                            <div>
                                Views
                            </div>
                        </div>
                        <div
                            onClick={() => { setTab("Dashboard"); }}
                            className={`flex hover:cursor-pointer items-center my-3 ${tab === "Dashboard" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  px-5 py-2 rounded-full`}
                        >
                            <div>
                                Dashboard
                            </div>
                        </div>
                        <div
                            onClick={() => { setTab("Automations"); }}
                            className={`flex hover:cursor-pointer items-center my-3 ${tab === "Automations" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  px-5 py-2 rounded-full`}
                        >
                            <div>
                                Automations
                            </div>
                        </div>
                        <div
                            onClick={() => { setTab("Tracker"); }}
                            className={`flex hover:cursor-pointer items-center my-3 ${tab === "Tracker" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  px-5 py-2 rounded-full`}
                        >
                            <div>
                                Tracker
                            </div>
                        </div>
                        <div
                            onClick={() => { setTab("Docs"); }}
                            className={`flex hover:cursor-pointer items-center my-3 ${tab === "Docs" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  px-5 py-2 rounded-full`}
                        >
                            <div>
                                Docs
                            </div>
                        </div>
                        <div
                            onClick={() => { setTab("Apps"); }}
                            className={`flex hover:cursor-pointer items-center my-3 ${tab === "Apps" ? "bg-blue-700 text-white" : "bg-[#F6F5FE] text-black"}  px-5 py-2 rounded-full`}
                        >
                            <div>
                                Apps
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        {tabContent()}
                    </div>
                </div>
            </Narrow>
        </div>
    );
}
