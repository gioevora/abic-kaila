"use client";
import React from "react";
import { Image } from "@nextui-org/react";

import FAQAccordion from "@/components/accordion/faq";

const FAQSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-violet-700 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-lg text-default-500 max-w-2xl dark:text-gray-300 leading-4">
            Find answers to common questions about buying, selling, and renting
            properties. Get all the information you need to make informed
            decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-4">
          <div>
            <Image
              alt="HeroUI hero Image"
              src="https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/Questions-rafiki.png"
            />
          </div>
          <div>
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
