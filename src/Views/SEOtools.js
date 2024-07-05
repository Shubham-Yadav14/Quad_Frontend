import React, { useEffect, useState } from "react";
import Narrow from "../Common/Narrow";
import PageAnalyzer from "../Images/tools-icon1.svg";
import SEO from "../Images/tools-icon2.svg";
import Keyword from "../Images/tools-icon3.svg";
import DigitalAgency from "../Images/tools-icon4.svg";
import Content from "../Images/tools-icon5.svg";
import RankTracker from "../Images/tools-icon6.svg";
import PageAnalyzerActive from "../Images/active-icon1.svg";
import SEOActive from "../Images/active-icon2.svg";
import KeywordActive from "../Images/active-icon3.svg";
import DigitalAgencyActive from "../Images/active-icon4.svg";
import ContentActive from "../Images/active-icon5.svg";
import RankTrackerActive from "../Images/active-icon6.svg";
import img2 from "../Images/tabs-img1.png";

export default function SEOtools() {
  useEffect(() => {
    const element = document.getElementById("keyword-explorer");

    const observer = new IntersectionObserver(
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
    const element = document.getElementById("keyword-explorer1");

    const observer = new IntersectionObserver(
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
    const element = document.getElementById("keyword-explorer2");

    const observer = new IntersectionObserver(
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
    const element = document.getElementById("tryItButton");

    const observer = new IntersectionObserver(
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-100", "opacity-100");
          }
        });
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    observer.observe(document.getElementById("image-to-animate"));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById("Heading");

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

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [tab, setTab] = useState("Page Analyzer");

  return (
    <div className="bg-lightPurplebg mt-32 max-xl:mt-5 py-20 max-xl:py-10" id="about">
      <Narrow>
        <div
          id="Heading"
          className="w-2/3 max-xl:w-full mx-auto opacity-0 transform translate-y-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
        >
          <div className="p-2 bg-purpleBg rounded-xl font-semibold text-customPurple text-center mx-auto w-40">
            SEO Tools
          </div>
          <div className="text-center text-4xl font-bold mt-5">
            Master Your SEO Journey With Quad Unleashing Tools For Digital
            Dominance
          </div>
        </div>

        <div className="bg-white mt-10 py-10 px-28 max-xl:px-2">
          <div className="grid grid-cols-6 max-xl:grid-cols-2 gap-10 max-xl:gap-2">
            <div
              onClick={() => setTab("Page Analyzer2")}
              className={` hover:cursor-pointer p-3 rounded-lg ${
                tab === "Page Analyzer" || tab === "Page Analyzer2"
                  ? "bg-customPurple"
                  : "bg-lightPurplebg"
              }`}
            >
              {tab === "Page Analyzer" || tab === "Page Analyzer2" ? (
                <img
                  className="mx-auto"
                  src={PageAnalyzerActive}
                  alt="Tool Icon"
                />
              ) : (
                <img className="mx-auto" src={PageAnalyzer} alt="Tool Icon" />
              )}

              <div
                className={`text-center text-base font-semibold mt-3 ${
                  tab === "Page Analyzer" || tab === "Page Analyzer2"
                    ? "text-white"
                    : ""
                }`}
              >
                Page Analyzer
              </div>
            </div>

            <div
              onClick={() => setTab("SEO")}
              className={` hover:cursor-pointer p-3 rounded-lg ${
                tab === "SEO" ? "bg-customPurple" : "bg-lightPurplebg"
              }`}
            >
              {tab === "SEO" ? (
                <img className="mx-auto" src={SEOActive} alt="Tool Icon" />
              ) : (
                <img className="mx-auto" src={SEO} alt="Tool Icon" />
              )}

              <div
                className={`text-center text-base font-semibold mt-3 ${
                  tab === "SEO" ? "text-white" : ""
                }`}
              >
                SEO
              </div>
            </div>

            <div
              onClick={() => setTab("Keyword")}
              className={` hover:cursor-pointer p-3 rounded-lg ${
                tab === "Keyword" ? "bg-customPurple" : "bg-lightPurplebg"
              }`}
            >
              {tab === "Keyword" ? (
                <img className="mx-auto" src={KeywordActive} alt="Tool Icon" />
              ) : (
                <img className="mx-auto" src={Keyword} alt="Tool Icon" />
              )}

              <div
                className={`text-center text-base font-semibold mt-3 ${
                  tab === "Keyword" ? "text-white" : ""
                }`}
              >
                Keyword
              </div>
            </div>

            <div
              onClick={() => setTab("Digital Agency")}
              className={` hover:cursor-pointer p-3 rounded-lg ${
                tab === "Digital Agency"
                  ? "bg-customPurple"
                  : "bg-lightPurplebg"
              }`}
            >
              {tab === "Digital Agency" ? (
                <img
                  className="mx-auto"
                  src={DigitalAgencyActive}
                  alt="Tool Icon"
                />
              ) : (
                <img className="mx-auto" src={DigitalAgency} alt="Tool Icon" />
              )}

              <div
                className={`text-center text-base font-semibold mt-3 ${
                  tab === "Digital Agency" ? "text-white" : ""
                }`}
              >
                Digital Agency
              </div>
            </div>

            <div
              onClick={() => setTab("Content")}
              className={` hover:cursor-pointer p-3 rounded-lg ${
                tab === "Content" ? "bg-customPurple" : "bg-lightPurplebg"
              }`}
            >
              {tab === "Content" ? (
                <img className="mx-auto" src={ContentActive} alt="Tool Icon" />
              ) : (
                <img className="mx-auto" src={Content} alt="Tool Icon" />
              )}

              <div
                className={`text-center text-base font-semibold mt-3 ${
                  tab === "Content" ? "text-white" : ""
                }`}
              >
                Content
              </div>
            </div>

            <div
              onClick={() => setTab("Rank Tracker")}
              className={` hover:cursor-pointer p-3 rounded-lg ${
                tab === "Rank Tracker" ? "bg-customPurple" : "bg-lightPurplebg"
              }`}
            >
              {tab === "Rank Tracker" ? (
                <img
                  className="mx-auto"
                  src={RankTrackerActive}
                  alt="Tool Icon"
                />
              ) : (
                <img className="mx-auto" src={RankTracker} alt="Tool Icon" />
              )}

              <div
                className={`text-center text-base font-semibold mt-3 ${
                  tab === "Rank Tracker" ? "text-white" : ""
                }`}
              >
                Rank Tracker
              </div>
            </div>
          </div>

          {tab === "Page Analyzer" && (
            <div className="grid grid-cols-2 max-xl:grid-cols-1 max-xl:flex-col mt-10 gap-32 max-xl:gap-5">
              <div className=" flex flex-col leading-6">
                <h1 className="text-4xl font-bold mb-7">
                  Empower Your SEO Strategy With Cutting
                </h1>
                <p
                  id="keyword-explorer"
                  className="text-gray-500 font-semibold opacity-0 transform -translate-x-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
                >
                  <span className="font-bold text-black">
                    Keyword Explorer:
                  </span>{" "}
                  Uncover valuable keywords with our advanced research tool.
                  Gain insights into search volume, competition, and trends to
                  refine your content strategy.
                </p>
                <p
                  id="keyword-explorer1"
                  className="text-gray-500 font-semibold opacity-0 transform -translate-x-full transition-all duration-700 mt-5 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
                >
                  <span className="font-bold text-black">Page Analyser:</span>{" "}
                  Optimise your web pages effortlessly. Our Page Analyser tool
                  provides in-depth insights into on-page SEO.
                </p>
                <p
                  id="keyword-explorer2"
                  className="text-gray-500 font-semibold opacity-0 transform -translate-x-full transition-all duration-700 mt-5 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
                >
                  <span className="font-bold text-black">Rank Tracker:</span>{" "}
                  Monitor your keyword rankings effortlessly. Track your
                  performance across search engines and receive timely updates
                  to adapt your strategy in real-time.
                </p>
                <div>
                  <button
                    id="tryItButton"
                    className="bg-customPurple p-3 rounded-lg text-white font-semibold mt-10  opacity-0 transform -translate-x-full transition-all duration-700 hover:bg-purpleBg hover:text-customPurple ease-in-out max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
                  >
                    Try It Free Now
                  </button>
                </div>
              </div>
              <div className="max-xl:w-full">
                <img
                  id="image-to-animate"
                  className="transform scale-0 opacity-0 transition-transform duration-1000 ease-in-out"
                  style={{ width: "90%" }}
                  src={img2}
                  alt="SEO Tool Visualization"
                />
              </div>
            </div>
          )}

          {tab === "Page Analyzer2" && (
            <div className="flex max-xl:flex-col mt-10 gap-32 max-xl:gap-5">
              <div className="w-1/2 max-xl:w-full flex flex-col leading-6">
                <h1 className="text-4xl font-bold mb-7">
                  Empower Your SEO Strategy With Cutting
                </h1>
                <p
                  id="keyword-explorer"
                  className="text-gray-500 font-semibold"
                >
                  <span className="font-bold text-black">
                    Keyword Explorer:
                  </span>{" "}
                  Uncover valuable keywords with our advanced research tool.
                  Gain insights into search volume, competition, and trends to
                  refine your content strategy.
                </p>
                <p
                  id="keyword-explorer1"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Page Analyser:</span>{" "}
                  Optimise your web pages effortlessly. Our Page Analyser tool
                  provides in-depth insights into on-page SEO.
                </p>
                <p
                  id="keyword-explorer2"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Rank Tracker:</span>{" "}
                  Monitor your keyword rankings effortlessly. Track your
                  performance across search engines and receive timely updates
                  to adapt your strategy in real-time.
                </p>
                <div>
                  <button
                    id="tryItButton"
                    className="bg-customPurple p-3 rounded-lg text-white font-semibold mt-10 hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out"
                  >
                    Try It Free Now
                  </button>
                </div>
              </div>
              <div className="w-1/2 max-xl:w-full">
                <img
                  id="image-to-animate"
                  className=""
                  style={{ width: "90%" }}
                  src={img2}
                  alt="SEO Tool Visualization"
                />
              </div>
            </div>
          )}

          {tab === "SEO" && (
            <div className="flex max-xl:flex-col mt-10 gap-32 max-xl:gap-5">
              <div className="w-1/2 max-xl:w-full flex flex-col leading-6">
                <h1 className="text-4xl font-bold mb-7">
                  Empower Your SEO Strategy With Cutting
                </h1>
                <p
                  id="keyword-explorer"
                  className="text-gray-500 font-semibold"
                >
                  <span className="font-bold text-black">
                    Keyword Explorer:
                  </span>{" "}
                  Uncover valuable keywords with our advanced research tool.
                  Gain insights into search volume, competition, and trends to
                  refine your content strategy.
                </p>
                <p
                  id="keyword-explorer1"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Page Analyser:</span>{" "}
                  Optimise your web pages effortlessly. Our Page Analyser tool
                  provides in-depth insights into on-page SEO.
                </p>
                <p
                  id="keyword-explorer2"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Rank Tracker:</span>{" "}
                  Monitor your keyword rankings effortlessly. Track your
                  performance across search engines and receive timely updates
                  to adapt your strategy in real-time.
                </p>
                <div>
                  <button
                    id="tryItButton"
                    className="bg-customPurple p-3 rounded-lg text-white font-semibold mt-10 hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out"
                  >
                    Try It Free Now
                  </button>
                </div>
              </div>
              <div className="w-1/2 max-xl:w-full">
                <img
                  id="image-to-animate"
                  className=""
                  style={{ width: "90%" }}
                  src={img2}
                  alt="SEO Tool Visualization"
                />
              </div>
            </div>
          )}

          {tab === "Keyword" && (
            <div className="flex max-xl:flex-col mt-10 gap-32 max-xl:gap-5">
              <div className="w-1/2 max-xl:w-full flex flex-col leading-6">
                <h1 className="text-4xl font-bold mb-7">
                  Empower Your SEO Strategy With Cutting
                </h1>
                <p
                  id="keyword-explorer"
                  className="text-gray-500 font-semibold"
                >
                  <span className="font-bold text-black">
                    Keyword Explorer:
                  </span>{" "}
                  Uncover valuable keywords with our advanced research tool.
                  Gain insights into search volume, competition, and trends to
                  refine your content strategy.
                </p>
                <p
                  id="keyword-explorer1"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Page Analyser:</span>{" "}
                  Optimise your web pages effortlessly. Our Page Analyser tool
                  provides in-depth insights into on-page SEO.
                </p>
                <p
                  id="keyword-explorer2"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Rank Tracker:</span>{" "}
                  Monitor your keyword rankings effortlessly. Track your
                  performance across search engines and receive timely updates
                  to adapt your strategy in real-time.
                </p>
                <div>
                  <button
                    id="tryItButton"
                    className="bg-customPurple p-3 rounded-lg text-white font-semibold mt-10 hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out"
                  >
                    Try It Free Now
                  </button>
                </div>
              </div>
              <div className="w-1/2 max-xl:w-full">
                <img
                  id="image-to-animate"
                  className=""
                  style={{ width: "90%" }}
                  src={img2}
                  alt="SEO Tool Visualization"
                />
              </div>
            </div>
          )}

          {tab === "Digital Agency" && (
            <div className="flex max-xl:flex-col mt-10 gap-32 max-xl:gap-5">
              <div className="w-1/2 max-xl:w-full flex flex-col leading-6">
                <h1 className="text-4xl font-bold mb-7">
                  Empower Your SEO Strategy With Cutting
                </h1>
                <p
                  id="keyword-explorer"
                  className="text-gray-500 font-semibold"
                >
                  <span className="font-bold text-black">
                    Keyword Explorer:
                  </span>{" "}
                  Uncover valuable keywords with our advanced research tool.
                  Gain insights into search volume, competition, and trends to
                  refine your content strategy.
                </p>
                <p
                  id="keyword-explorer1"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Page Analyser:</span>{" "}
                  Optimise your web pages effortlessly. Our Page Analyser tool
                  provides in-depth insights into on-page SEO.
                </p>
                <p
                  id="keyword-explorer2"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Rank Tracker:</span>{" "}
                  Monitor your keyword rankings effortlessly. Track your
                  performance across search engines and receive timely updates
                  to adapt your strategy in real-time.
                </p>
                <div>
                  <button
                    id="tryItButton"
                    className="bg-customPurple p-3 rounded-lg text-white font-semibold mt-10 hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out"
                  >
                    Try It Free Now
                  </button>
                </div>
              </div>
              <div className="w-1/2 max-xl:w-full">
                <img
                  id="image-to-animate"
                  className=""
                  style={{ width: "90%" }}
                  src={img2}
                  alt="SEO Tool Visualization"
                />
              </div>
            </div>
          )}

          {tab === "Content" && (
            <div className="flex max-xl:flex-col mt-10 gap-32 max-xl:gap-5">
              <div className="w-1/2 max-xl:w-full flex flex-col leading-6">
                <h1 className="text-4xl font-bold mb-7">
                  Empower Your SEO Strategy With Cutting
                </h1>
                <p
                  id="keyword-explorer"
                  className="text-gray-500 font-semibold"
                >
                  <span className="font-bold text-black">
                    Keyword Explorer:
                  </span>{" "}
                  Uncover valuable keywords with our advanced research tool.
                  Gain insights into search volume, competition, and trends to
                  refine your content strategy.
                </p>
                <p
                  id="keyword-explorer1"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Page Analyser:</span>{" "}
                  Optimise your web pages effortlessly. Our Page Analyser tool
                  provides in-depth insights into on-page SEO.
                </p>
                <p
                  id="keyword-explorer2"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Rank Tracker:</span>{" "}
                  Monitor your keyword rankings effortlessly. Track your
                  performance across search engines and receive timely updates
                  to adapt your strategy in real-time.
                </p>
                <div>
                  <button
                    id="tryItButton"
                    className="bg-customPurple p-3 rounded-lg text-white font-semibold mt-10 hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out"
                  >
                    Try It Free Now
                  </button>
                </div>
              </div>
              <div className="w-1/2 max-xl:w-full">
                <img
                  id="image-to-animate"
                  className=""
                  style={{ width: "90%" }}
                  src={img2}
                  alt="SEO Tool Visualization"
                />
              </div>
            </div>
          )}

          {tab === "Rank Tracker" && (
            <div className="flex max-xl:flex-col mt-10 gap-32 max-xl:gap-5">
              <div className="w-1/2 max-xl:w-full flex flex-col leading-6">
                <h1 className="text-4xl font-bold mb-7">
                  Empower Your SEO Strategy With Cutting
                </h1>
                <p
                  id="keyword-explorer"
                  className="text-gray-500 font-semibold"
                >
                  <span className="font-bold text-black">
                    Keyword Explorer:
                  </span>{" "}
                  Uncover valuable keywords with our advanced research tool.
                  Gain insights into search volume, competition, and trends to
                  refine your content strategy.
                </p>
                <p
                  id="keyword-explorer1"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Page Analyser:</span>{" "}
                  Optimise your web pages effortlessly. Our Page Analyser tool
                  provides in-depth insights into on-page SEO.
                </p>
                <p
                  id="keyword-explorer2"
                  className="text-gray-500 font-semibold mt-5"
                >
                  <span className="font-bold text-black">Rank Tracker:</span>{" "}
                  Monitor your keyword rankings effortlessly. Track your
                  performance across search engines and receive timely updates
                  to adapt your strategy in real-time.
                </p>
                <div>
                  <button
                    id="tryItButton"
                    className="bg-customPurple p-3 rounded-lg text-white font-semibold mt-10 hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out"
                  >
                    Try It Free Now
                  </button>
                </div>
              </div>
              <div className="w-1/2 max-xl:w-full">
                <img
                  id="image-to-animate"
                  className=""
                  style={{ width: "90%" }}
                  src={img2}
                  alt="SEO Tool Visualization"
                />
              </div>
            </div>
          )}
        </div>
      </Narrow>
    </div>
  );
}
