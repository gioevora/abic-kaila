import React from "react";
import { Metadata } from "next";

import ContactSection from "../home/contactsection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ABIC Realty for inquiries, support, or to learn more about our services. We are here to assist you.",

  openGraph: {
    title: "Contact Us | ABIC Realty by Joe Rendon",
    description:
      "Get in touch with ABIC Realty for inquiries, support, or to learn more about our services. We are here to assist you.",
    url: "https://www.abic-website.vercel.app/contact",
    siteName: "ABIC Realty by Joe Rendon",
    images: [
      {
        url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-contact-banner.png", // Replace with actual contact page image
        width: 1200,
        height: 630,
        alt: "ABIC Realty Contact Information",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@AbicRealty by Joe Rendon",
    creator: "@AbicRealty by Joe Rendon",
    title: "Contact Us | ABIC Realty by Joe Rendon",
    description:
      "Have questions? Contact ABIC Realty for support, inquiries, or more information about our real estate services.",
    images: [
      "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-contact-banner.png", // Ensure this is a valid image
    ],
  },

  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};


const ContactPage = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto">
        <ContactSection />
      </div>
    </section>
  );
};

export default ContactPage;
