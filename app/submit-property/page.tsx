import React from "react";
import { Metadata } from "next";

import SubmitPropertyCard from "@/components/card/submitpropertycard";

export const metadata: Metadata = {
  title: "Submit Your Property",
  description:
    "List your property on ABIC Realty to connect with buyers and renters. Get more visibility and reach potential clients with ease.",

  openGraph: {
    title: "Submit Your Property | ABIC Realty by Joe Rendon",
    description:
      "Easily list your property for sale or rent on ABIC Realty. Gain exposure and connect with potential buyers and tenants.",
    url: "https://www.abic-website.vercel.app/submit-property",
    siteName: "ABIC Realty by Joe Rendon",
    images: [
      {
        url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-submit-property-banner.png", // Replace with an actual image
        width: 1200,
        height: 630,
        alt: "Submit Your Property - ABIC Realty",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@AbicRealty by Joe Rendon",
    creator: "@AbicRealty by Joe Rendon",
    title: "Submit Your Property | ABIC Realty by Joe Rendon",
    description:
      "List your property for sale or rent on ABIC Realty. Reach a wide audience of potential buyers and renters.",
    images: [
      "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-submit-property-banner.png", // Ensure this is a valid image
    ],
  },

  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};


const SubmitPropertyPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="container mx-auto px-6 text-center">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-violet-700 dark:text-white">
            Submit Property
          </h1>
          <p className="text-md md:text-lg text-default-500 max-w-2xl mx-auto dark:text-gray-300 leading-relaxed">
            Share your property details with ease and reach potential buyers or
            renters in no time.
          </p>
        </div>

        <div className="flex justify-center items-center py-12 w-full">
          <SubmitPropertyCard />
        </div>
      </div>
    </section>
  );
};

export default SubmitPropertyPage;
