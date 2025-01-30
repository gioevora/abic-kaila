"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import FeedbackForm from "./feedbackform";

const RatingSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 w-full justify-center">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-violet-700 dark:text-white">
            Share Your Experience
          </h1>
          <p className="text-sm md:text-lg text-default-500 dark:text-gray-300 leading-4">
            We&apos;d love to hear your feedback! Share your rating and help us
            improve our services.
          </p>
        </div>

        <div className="w-full max-w-6xl py-8">
          <Card className="py-12">
            <CardBody>
              <div className="flex flex-col lg:flex-row  gap-4 justify-around">
                <div className="flex flex-col space-y-8 ">
                  <div className="flex items-center gap-4">
                    <div className="bg-violet-300 p-4 rounded-full">
                      <FaCheck />
                    </div>
                    <div>
                      <h1 className="font-bold text-xl">
                        Improves Products/Services:
                      </h1>
                      <p className="text-default-500">
                        Helps identify areas for improvement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-violet-300 p-4 rounded-full">
                      <FaCheck />
                    </div>
                    <div>
                      <h1 className="font-bold text-xl">
                        Enhances Customer Experience:
                      </h1>
                      <p className="text-default-500">
                        Shows what customers value and what needs adjustment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-violet-300 p-4 rounded-full">
                      <FaCheck />
                    </div>
                    <div>
                      <h1 className="font-bold text-xl">Builds Customer Loyalty:</h1>
                      <p className="text-default-500">
                        Demonstrates that the business values customer opinions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-violet-300 p-4 rounded-full">
                      <FaCheck />
                    </div>
                    <div>
                      <h1 className="font-bold text-xl">
                        Guides Business Decisions:{" "}
                      </h1>
                      <p className="text-default-500">
                        Provides data-driven insights for strategic planning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-96 bg-violet-800 px-4 py-2 rounded-lg shadow-md">
                  <FeedbackForm />
                </div>
              </div>

            </CardBody>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default RatingSection;
