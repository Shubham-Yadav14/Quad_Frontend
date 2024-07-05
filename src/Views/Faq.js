import React, { useState, useEffect } from 'react';
import AccordionItem from './Accordian'
import Narrow from '../Common/Narrow';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
            entry.target.classList.remove('translate-y-full', 'opacity-0');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const headingElement = document.getElementById('HeadingFaq');
    if (headingElement) {
      observer.observe(headingElement);
    }

    return () => {
      if (headingElement) {
        observer.unobserve(headingElement);
      }
    };
  }, []);

  useEffect(() => {
    const elementRight = document.getElementById("float");

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
    <Narrow>
      <div className="flex gap-10 max-lg:flex-col mb-20 mt-20"  id="faq">
        <div
          id="HeadingFaq"
          className="w-4/12 pt-10 opacity-0 transform translate-y-full transition-all duration-700 max-lg:w-full max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
        >
          <div className="p-2 bg-purpleBg rounded-xl font-semibold text-customPurple text-center w-20">
            FAQ'S
          </div>
          <div className="text-left text-4xl font-bold mt-5">
            Frequently Asked Questions
          </div>
          <p className="mt-5 text-gray-500 font-semibold">Welcome to the Quad FAQ section, where we address common queries to ensure you have all the information you need.</p>
          <button className='bg-customPurple px-5 py-2 rounded-lg text-white font-semibold mt-5 hover:bg-purpleBg hover:text-customPurple transition-all duration-700 ease-in-out'>Contact Us</button>
        </div>
        <div id='float' className="opacity-0 transform translate-x-full transition-all duration-700 w-8/12 bg-white text-xl shadow-lg rounded-lg max-lg:w-full max-xl:opacity-100 max-xl:transform-none max-xl:transition-none">
          <AccordionItem
            title="What sets Quad apart in the competitive SEO market?"
            isOpen={openIndex === 0}
            toggleAccordion={() => handleToggle(0)}
          >
            <p className='text-gray-500 font-semibold text-base'>We accept major credit cards, including Visa, MasterCard, and American Express. Additionally, we offer secure payment processing to ensure a hassle-free transaction experience.</p>
          </AccordionItem>
          <AccordionItem
            title="How secure is my data with Quad?"
            isOpen={openIndex === 1}
            toggleAccordion={() => handleToggle(1)}
          >
            <p className='text-gray-500 font-semibold text-base'>We accept major credit cards, including Visa, MasterCard, and American Express. Additionally, we offer secure payment processing to ensure a hassle-free transaction experience.</p>
          </AccordionItem>
          <AccordionItem
            title="Can I use Quad for local SEO optimisation?"
            isOpen={openIndex === 2}
            toggleAccordion={() => handleToggle(2)}
          >
            <p className='text-gray-500 font-semibold text-base'>We accept major credit cards, including Visa, MasterCard, and American Express. Additionally, we offer secure payment processing to ensure a hassle-free transaction experience.</p>
          </AccordionItem>
          <AccordionItem
            title="How frequently are new features added to Quad?"
            isOpen={openIndex === 3}
            toggleAccordion={() => handleToggle(3)}
          >
            <p className='text-gray-500 font-semibold text-base'>We accept major credit cards, including Visa, MasterCard, and American Express. Additionally, we offer secure payment processing to ensure a hassle-free transaction experience.</p>
          </AccordionItem>
          <AccordionItem
            title="Is there a limit to the number of projects or websites I can manage?"
            isOpen={openIndex === 4}
            toggleAccordion={() => handleToggle(4)}
          >
            <p className='text-gray-500 font-semibold text-base'>We accept major credit cards, including Visa, MasterCard, and American Express. Additionally, we offer secure payment processing to ensure a hassle-free transaction experience.</p>
          </AccordionItem>
          <AccordionItem
            title="What payment methods do you accept for subscription plans?"
            isOpen={openIndex === 5}
            toggleAccordion={() => handleToggle(5)}
          >
           <p className='text-gray-500 font-semibold text-base'>We accept major credit cards, including Visa, MasterCard, and American Express. Additionally, we offer secure payment processing to ensure a hassle-free transaction experience.</p>
          </AccordionItem>
        </div>
      </div>
    </Narrow>
  );
};

export default Accordion;
