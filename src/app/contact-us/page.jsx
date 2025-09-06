import Image from "next/image";
import React from "react";
import { MobileMenu } from "../page";
import { InstagramIcon } from "lucide-react";
import ContactUsForm from "@/components/contact-us-form";

const ContactUsPage = () => {
  return (
    <div className="font-sans text-gray-800 max-w-7xl mx-auto bg-[#FFF8F2]">
      <nav className="py-3 flex justify-between px-2 w-full items-center">
        <div className="flex flex-col">
          {/* <span className="text-xl font-bold mb-0">CCTDD</span>
            <span className="text-sm text-gray-500 -mt-1">
              Enterprise Limited
            </span> */}
          <a href="/">
            <Image
              alt="logo"
              src="/cctd_logo.png"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
        <div className="gap-4 hidden lg:flex">
          <a href="#home" className="text-gray-700">
            Home
          </a>
          <a href="#about" className="text-gray-700">
            About
          </a>
          <a href="#testimonials" className="text-gray-700">
            Testimonials
          </a>
          <a href="#FAQs" className="text-gray-700">
            FAQs
          </a>
          <a href="#contact" className="text-gray-700">
            Contact
          </a>
        </div>
        <div className="hideen lg:flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="bg-[#26524F] text-white px-6 py-2 rounded-lg text-sm hover:bg-bg-brand-text/90 transition-all duration-300 hidden lg:inline-block"
          >
            Get Started
          </a>
          <a
            href="login"
            className="border border-bg-primary-o text-bg-primary-o  px-6 py-2 rounded-lg text-sm  transition-all duration-300 hidden lg:inline-block"
          >
            Login
          </a>
        </div>

        <MobileMenu />
      </nav>
      <ContactUsForm />
      <footer className="py-6 px-6 text-center text-sm text-gray-500 ">
        <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-xl font-bold">Coded</span>
            <span className="text-sm text-gray-500 ">Business solutions</span>
            <p className="text-sm text-gray-700 mt-2 max-w-xs mx-auto text-start">
              We do not accept payments directly. We use trusted payment
              providers to handle transactions securely.
            </p>
            <p></p>
          </div>
          <div className="flex flex-col justify-center items-center  gap-4">
            <p className="text-black font-semibold">Quick links</p>
            <div className="flex flex-col gap-1 items-center justify-center flex-wrap mt-2">
              <a href="#home" className="text-gray-700">
                Home
              </a>
              <a href="#about" className="text-gray-700">
                About
              </a>
              <a href="#testimonials" className="text-gray-700">
                Testimonials
              </a>
              <a href="#FAQs" className="text-gray-700">
                FAQs
              </a>
              <a href="#contact" className="text-gray-700">
                Contact
              </a>
            </div>
          </div>
          <div>
            <p className="text-black font-semibold">Follow us</p>
            <a
              href="https://www.instagram.com/cctdd_enterpise/"
              className="flex gap-4 items-center justify-center mt-2"
            >
              <InstagramIcon className="size-5 text-bg-primary-o  cursor-pointer" />
              <p>cctdd_enterprise</p>
            </a>
          </div>
        </div>
        <div>&copy; {new Date().getFullYear()} Coded. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
