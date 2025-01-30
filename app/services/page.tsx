import { Metadata } from "next";

import ServicesCard from "@/components/card/servicescard";

interface ServicesData {}

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore ABIC Realty's professional real estate services, including property buying, selling, leasing, and investment advisory. Let us help you find the perfect property.",

  openGraph: {
    title: "Our Services | ABIC Realty by Joe Rendon",
    description:
      "ABIC Realty offers expert real estate services, including buying, selling, leasing, and investment advisory. Find your ideal property with us.",
    url: "https://www.abic-website.vercel.app/services",
    siteName: "ABIC Realty by Joe Rendon",
    images: [
      {
        url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-services-banner.png", // Replace with a relevant image
        width: 1200,
        height: 630,
        alt: "ABIC Realty Services",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@AbicRealty by Joe Rendon",
    creator: "@AbicRealty by Joe Rendon",
    title: "Our Services | ABIC Realty by Joe Rendon",
    description:
      "Discover ABIC Realty’s expert real estate services. We assist with property buying, selling, leasing, and investment advisory.",
    images: [
      "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-services-banner.png", // Ensure this is a valid image
    ],
  },

  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};


const fetchProperties = async (): Promise<ServicesData[]> => {
  try {
    const endpoint = process.env.NEXT_PUBLIC_API_URL;

    if (!endpoint) {
      throw new Error("API URL is not defined in the environment variables");
    }

    const res = await fetch(`${endpoint}/services`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch properties`);
    }

    const data = await res.json();

    return data.records.slice(0, 5) || [];
  } catch (error) {
    return [];
  }
};

export const dynamic = "force-dynamic";

export default function ServicesPage() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Our Services
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Experience exceptional real estate services, tailored to meet your
            needs and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          <ServicesCard />
        </div>
      </div>
    </section>
  );
}
