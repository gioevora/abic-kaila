import React from "react";

import TestimonyCard from "@/components/card/testimony";
const testimonialData = [
  {
    key: 1,
    message:
      "Abic Realty Corp was incredible! They assisted me every step of the way in selling my property quickly and effortlessly. Their expertise and dedication made all the difference. Highly recommended!",
    name: "- John and Sarah Doe",
  },
  {
    key: 2,
    message:
      "I couldn't have asked for a better experience! Abic Realty Corp helped me find the perfect home and made the entire process stress-free. Thank you for your patience and professionalism!",
    name: "- Emily Johnson",
  },
  {
    key: 3,
    message:
      "Working with Abic Realty Corp was the best decision I made when selling my property. They handled everything with care and kept me informed throughout the process. Truly exceptional service!",
    name: "- Michael Smith",
  },
  {
    key: 4,
    message:
      "Abic Realty Corp was amazing! From finding potential buyers to closing the deal, they went above and beyond to ensure everything went smoothly. I highly recommend their services!",
    name: "- Linda and Robert Brown",
  },
];

const TestemonialSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-5xl text-violet-700">
            Testimonials
          </h1>

          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed py-4">
            Explore the stories and experiences of our delighted clients who
            found their dream homes with our dedicated support.
          </p>
        </div>

        <div className="py-12 ">
          <TestimonyCard testimony={testimonialData} />
        </div>
      </div>
    </section>
  );
};

export default TestemonialSection;
