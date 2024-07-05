import React, { useState, useEffect } from 'react';
import Narrow from '../Common/Narrow';
import image from '../Images/testimonial4-img1.png';
import image1 from '../Images/works-img1.png';
import image2 from '../Images/testimonial-slider-img1.png';



export default function Testimonials() {
    const [current, setCurrent] = useState(1);
    const [animate, setAnimate] = useState(false);


    const handleChangeNext = () => {
        if (current === 1) {
            setCurrent(2);
        }
        else {
            setCurrent(1);
        }

    }
    const handleChangePrev = () => {
        if (current === 1) {
            setCurrent(2);
        }
        else {
            setCurrent(1);
        }
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
                setCurrent((prev) => (prev === 2 ? 1 : 2));
            }, 500); // Duration of the slide-out animation
        }, 3000);

        return () => clearTimeout(timeout);
    }, [current]);

    return (
        <Narrow class="my-10">
            <div 
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    className='my-5'
                >
                    <p className="text-blue-600 text-xl">Testimonials</p>
                    <h1 className="text-4xl font-semibold">What Our Users Say: Real Stories Of Project Success With Quad</h1>
                </div>
            <div>
                <div>
                    {current === 1 && (
                        <div className='flex max-lg:flex-col'>
                            <div className='w-1/2 max-lg:w-full my-auto'>
                                <div className={` border rounded-lg p-5 ${animate ? 'slide-out-left' : 'slide-in-right'}`}>
                                    <div className='flex justify-between' >
                                        <div className='flex'>
                                        <img src={image} alt="Testimonial" />
                                        <div className='ml-2'>
                                            <div>Andre Smith</div>
                                            <div className='mt-2 text-sm'>Owner At Frenzy Design</div>
                                        </div>
                                        </div>
                                        <div className='flex gap-1 items-center '>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                        </div>
                                    </div>
                                    <div className='mt-5 text-gray-400'>
                                        “The analytics tools in Quad provide invaluable insights. Tracking project progress and identifying trends has never been easier. The data-driven approach has helped us make informed decisions, leading to better project outcomes. The ability to create custom workflows that fit our unique requirements sets it apart. It adapts to us, not the other way around. Highly recommended!”
                                    </div>
                                </div>
                                <button onClick={handleChangePrev} className='m-3'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#74C0FC" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
                                <button onClick={handleChangeNext}><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#74C0FC" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
                            </div>

                            <div className='w-1/2 max-lg:w-full mx-3'>
                                <img src={image1} className={`${animate ? "" : "slide-in-testimonials"}`} />

                            </div>
                        </div>
                    )}
                    {current === 2 && (
                        <div className='flex max-lg:flex-col'>
                        <div className='w-1/2 max-lg:w-full my-auto'>
                            <div className={` border rounded-lg p-5 ${animate ? 'slide-out-left' : 'slide-in-right'}`}>
                                <div className='flex justify-between' >
                                    <div className='flex'>
                                    <img src={image} alt="Testimonial" />
                                    <div className='ml-2'>
                                        <div>Andre Smith</div>
                                        <div className='mt-2 text-sm'>Owner At Frenzy Design</div>
                                    </div>
                                    </div>
                                    <div className='flex gap-1 items-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 576 512"><path fill="#4B24EE" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                    </div>
                                </div>
                                <div className='mt-5 text-gray-400'>
                                    “The analytics tools in Quad provide invaluable insights. Tracking project progress and identifying trends has never been easier. The data-driven approach has helped us make informed decisions, leading to better project outcomes. The ability to create custom workflows that fit our unique requirements sets it apart. It adapts to us, not the other way around. Highly recommended!”
                                </div>
                            </div>
                            <button onClick={handleChangePrev} className='m-3'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#74C0FC" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
                            <button onClick={handleChangeNext}><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#74C0FC" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
                        </div>

                        <div className='w-1/2 max-lg:w-full mx-3'>
                            <img src={image2} className={`${animate ? "" : "slide-in-testimonials"}`} />

                        </div>
                    </div>
                    )}
                </div>
            </div>
        </Narrow>
    );
}
