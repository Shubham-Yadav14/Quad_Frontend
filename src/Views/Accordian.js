import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AccordionItem = ({ title, children, isOpen, toggleAccordion }) => {
  const contentRef = useRef(null);

  const [styles, api] = useSpring(() => ({
    from: { height: 0, opacity: 0 }
  }));

  useEffect(() => {
    if (contentRef.current) {
      api.start({
        height: isOpen ? contentRef.current.scrollHeight : 0,
        opacity: isOpen ? 1 : 0,
        config: { duration: 500 }
      });
    }
  }, [isOpen, api]);

  return (
    <div className="border-b">
      <button
        className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <animated.div style={styles} className="overflow-hidden">
        <div ref={contentRef} className="px-6 pb-4">
          {children}
        </div>
      </animated.div>
    </div>
  );
};

export default AccordionItem;
