import React from 'react'
import image from "../Images/header-element1.png"
import Narrow from '../Common/Narrow'

export default function ProjectLanding() {
  return (
    <div className='projectBg' style={{minHeight:"110vh"}} >
      <Narrow>
        <div className='p-10 max-lg:p-1'>
          <img src={image} alt="image" className='mx-auto  rotate_infinite w-1/2 max-xl:w-9/12 ' />
          <div className='projectContent max-lg:w-[60vw] max-md:w-[80vw] text-5xl text-center max-lg:text-3xl'>Unlock Seamless Project Management With Quad
            <div className='text-lg max-lg:text-base mt-5'>Welcome to Quad the ultimate solution for modern project management. Streamline your
              workflow, collaborate effortlessly, and achieve unparalleled project success.</div>
              <div className='flex max-md:flex-col justify-center mt-10 max-md:gap-3'>
            <button className='hover:transition hover:duration-500 max-md:mx-auto max-md:w-2/3 max-sm:w-full max-md:justify-center hover:bg-blue-800 hover:-translate-y-1 flex items-center bg-blue-600 text-lg py-2 px-4 rounded-full font-semibold mr-5'>15 Days Free Trail &nbsp; <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512" className=' -rotate-45 '><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
            <button className='hover:transition hover:duration-500 max-md:mx-auto max-md:w-2/3 max-sm:w-full max-md:justify-center hover:bg-blue-800 hover:-translate-y-1 flex items-center ml-5  text-lg py-2 px-4 rounded-full font-semibold border-2 boder-white'>Contact Us &nbsp; <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512" className=' -rotate-45'><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  )
}
