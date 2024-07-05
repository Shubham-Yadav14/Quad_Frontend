import React, { useEffect, useRef } from 'react';
import Narrow from '../Common/Narrow';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, duration, add = 0, children }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const countRef = useRef(null);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 100); // Calculate increment per 100ms
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        if (countRef.current) {
          countRef.current.textContent = Math.floor(start) + add;
        }
      }, 100);
    }
  }, [inView, end, duration, add]);

  return (
    <div ref={ref}>
      <div ref={countRef} className="text-5xl font-semibold">
        0 + {add}
      </div>
      {children}
    </div>
  );
};



export default function Upcount() {
  return (
    <div className='bg-[#FAFAFA]'>
    <Narrow>
    <div className='py-10'>
      <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 px-20 py-10 shadow-lg shadow-gray-300 rounded-lg'>
        <div className='text-center border-r-2 max-md:border-none'>
          <AnimatedCounter end={450} duration={2000}>
            <div className='text-xl mt-3'>Projects Done</div>
          </AnimatedCounter>
        </div>
        <div className='text-center border-r-2 max-lg:border-none'>
          <AnimatedCounter end={96} add={"%"} duration={2000}>
            <div className='text-xl mt-3'>Success Rate</div>
          </AnimatedCounter>
        </div>
        <div className='text-center border-r-2 max-md:border-none'>
          <AnimatedCounter end={220} duration={2000}>
            <div className='text-xl mt-3'>Winning Awards</div>
          </AnimatedCounter>
        </div>
        <div className='text-center'>
          <AnimatedCounter end={75} duration={2000}>
            <div className='text-xl mt-3'>Happy Client</div>
          </AnimatedCounter>
        </div>
      </div>
      </div>
    </Narrow>
    </div>
  );
}
