import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { clsx } from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.template}`,
  },
  description: siteConfig.description,

  openGraph: {
    title: "Abic Realty by Joe Rendon - Your Trusted Real Estate Partner",
    description:
      "Find your ideal condo, office, or property for sale, lease, or rent with Abic Realty. We make real estate simple.",
    url: "https://www.abic-website.vercel.app",
    siteName: "Abic Realty by Joe Rendon",
    images: [
      {
        url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
        width: 1200,
        height: 630,
        alt: "Modern condos and offices offered by Abic Realty",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@Abic Realty by Joe Rendon",
    creator: "@Abic Realty by Joe Rendon",
    title: "Abic Realty by Joe Rendon - Your Trusted Real Estate Partner",
    description:
      "Find your ideal condo, office, or property for sale, lease, or rent with Abic Realty. We make real estate simple.",
    images: [
      "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
    ],
  },

  icons: {
    icon: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-favicon.ico",
    apple: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-apple-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.abicrealty.com",
    languages: {
      "en-US": "https://www.abicrealty.com/en/",
      "fil-PH": "https://www.abicrealty.com/fil/",
    },
  },

  other: {
    "theme-color": "#004aad",
    "msapplication-TileColor": "#004aad",
  },
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-cover bg-center bg-no-repeat font-sans antialiased relative overflow-x-hidden",
          fontSans.variable,
        )}
        style={{
          backgroundImage: "url('https://i.ibb.co/5Y2tMn3/bgimg.png')",
        }}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow md:ml-64">{children}</main>
            <Footer />
          </div>
          <Chatbot />
        </Providers>

        {/* Fixed Floating Icons on the right */}
        <div className="fixed top-1/2 right-2 transform -translate-y-1/2 sm:right-4 z-50">
          {/* <FloatingIcons /> */}
        </div>
      </body>
    </html>
  );
}
