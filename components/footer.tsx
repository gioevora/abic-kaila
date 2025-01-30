"use client";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import {
  FaArrowDown,
  FaFacebook,
  FaLocationPin,
  FaPhone,
  FaTelegram,
  FaTwitter,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative w-full bg-violet-900 text-white overflow-hidden">
      <section className="container mx-auto px-6 md:ml-72 py-8">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-4">
          <div className="flex-col">
            <h1 className="font-bold py-2">About</h1>
            <p className="md:max-w-md text-base">
              {" "}
              With skill, passion, and unwavering dedication, we strive for
              engineering excellence in quality homebuilding and community
              development that will stand the test of time.
            </p>

            <div className="py-4">
              <Button
                className="bg-violet-200 text-violet-900"
                endContent={<FaArrowDown />}
                size="lg"
              >
                Download Application
              </Button>
            </div>
          </div>

          <div className="flex space-x-16">
            <div className="footer-col">
              <h1 className="font-bold py-2">Quick Links</h1>
              <ul className="text-base">
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/"
                  >
                    <IoMdArrowDropright size={18} /> Home
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/about"
                  >
                    <IoMdArrowDropright size={18} />
                    Abous Us
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/whatsnew"
                  >
                    <IoMdArrowDropright size={18} />
                    What&lsquo;s New
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/properties"
                  >
                    <IoMdArrowDropright size={18} />
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/services"
                  >
                    <IoMdArrowDropright size={18} />
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/careers"
                  >
                    <IoMdArrowDropright size={18} />
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/contact"
                  >
                    <IoMdArrowDropright size={18} />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col max-w-xs">
              <h1 className="font-bold py-2">Featured</h1>
              <ul className="links">
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/documents"
                  >
                    <IoMdArrowDropright size={18} />
                    DMCI Documents
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/submit-property"
                  >
                    <IoMdArrowDropright size={18} />
                    Submit Property
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/loancalculator"
                  >
                    <IoMdArrowDropright size={18} />
                    Loan Calculator
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-violet-400"
                    href="/"
                  >
                    <IoMdArrowDropright size={18} />
                    Room Planner
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col md:max-w-md">
            <h1 className="font-bold py-2">Newsletter</h1>
            <p>
              Subscribe to our newsletter for a weekly dose of news, updates,
              helpful tips, and exclusive offers.
            </p>
            <form action="#" className="py-4">
              <div className="flex items-center gap-4">
                <Input label="Your Email" type="email" />
                <Button className="bg-violet-200 text-violet-900" size="lg">
                  SUBSCRIBE
                </Button>
              </div>
            </form>

            <h1 className="font-bold py-2">Follow Us</h1>
            <div className="flex gap-2">
              <div className="bg-violet-300 text-violet-700 px-2 py-2 rounded-lg">
                <FaFacebook size={18} />
              </div>
              <div className="bg-violet-300 text-violet-700 px-2 py-2 rounded-lg">
                <FaPhone size={18} />
              </div>
              <div className="bg-violet-300 text-violet-700 px-2 py-2 rounded-lg">
                <FaTwitter size={18} />
              </div>
              <div className="bg-violet-300 text-violet-700 px-2 py-2 rounded-lg">
                <FaTelegram size={18} />
              </div>
              <div className="bg-violet-300 text-violet-700 px-2 py-2 rounded-lg">
                <FaWhatsapp size={18} />
              </div>
              <div className="bg-violet-300 text-violet-700 px-2 py-2 rounded-lg">
                <FaViber size={18} />
              </div>
            </div>
          </div>
        </div>

      </section>
      <div className="md:ml-64 bg-violet-800 text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} ABIC Realty. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
