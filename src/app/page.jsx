import Image from "next/image";
import {
  CirclePoundSterlingIcon,
  FacebookIcon,
  FolderIcon,
  InstagramIcon,
  MenuIcon,
  RefreshCcwIcon,
  ShieldIcon,
  Twitter,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 max-w-7xl mx-auto bg-[#FFF8F2]">
      <nav className="py-3 flex items-start justify-between px-6">
        <div className="flex flex-col">
          <span className="text-xl font-bold">Coded</span>
          <span className="text-sm text-gray-500 hidden lg:block">
            Business solutions
          </span>
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
        <a
          href="#contact"
          className="bg-[#26524F] text-white px-6 py-2 rounded-lg text-sm hover:bg-bg-brand-text/90 transition-all duration-300 hidden lg:inline-block"
        >
          Get Started
        </a>
        <MobileMenu />
      </nav>
      {/* <!-- Hero Section --> */}
      <section
        id="home"
        className="min-h-[calc(100vh-65px)] flex flex-col gap-2  px-6 pt-5"
      >
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#26524F]">
            Cross-border payments made easy
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-500">
            We help Nigerian businesses get paid by anyone, anywhere in the
            world — at the best rates.
          </p>
          <a
            href="#contact"
            className="bg-[#26524F] text-white px-6 py-3 rounded-lg text-lg hover:bg-bg-brand-text/90 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
        <div className="text-center my-4 ">
          <h2 className="text-2xl font-semibold mb-10">
            Trusted by Businesses Nationwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-[#26524F]">
              <span className="block text-3xl font-bold text-[#DF7A57]">
                300+
              </span>
              Business customers
            </div>
            <div className="text-[#26524F]">
              <span className="block text-3xl font-bold text-[#DF7A57]">
                5,000+
              </span>
              Transactions completed
            </div>
            <div className="text-[#26524F]">
              <span className="block text-3xl font-bold text-[#DF7A57]">
                ₦500M+
              </span>
              Amount process
            </div>
            <div className="text-[#26524F]">
              <span className="block text-3xl font-bold text-[#DF7A57]">
                10+
              </span>
              Countries
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Us Section --> */}
      <section
        id="about"
        className="py-8 lg:py-16 text-black text-center px-6 lg:px-32 rounded-2xl space-y-6 space-x-3 "
      >
        <div>
          <h2 className="text-3xl font-semibold mb-3">
            Why Business choose us
          </h2>
          <p className="lg:max-w-2xl lg:mx-auto text-sm">
            We exist to make international payments simple for Nigerian
            businesses. Our commitment is to transparent pricing and the best
            exchange rates, so you keep more of what you earn. We empower
            businesses to grow beyond borders with faster transactions, lower
            fees, and peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 items-start justify-between">
          <div className="flex  flex-col  gap-3 items-center justify-center rounded-md">
            <CirclePoundSterlingIcon className="size-9 text-[#DF7A57]" />
            <div className="text-center w-full">
              <p className="font-semibold text-sm">Multiple Currencies</p>
              <p className="text-xs">Get paid in GBP and EUR.</p>
            </div>
          </div>
          <div className="flex  flex-col  gap-3 items-center justify-center rounded-md">
            <RefreshCcwIcon className="size-9 text-[#DF7A57]" />
            <div className="text-center w-full">
              <p className="font-semibold text-sm">Best Rates</p>
              <p className="text-xs">Keep more profit with competitive rates</p>
            </div>
          </div>
          <div className="flex  flex-col  gap-3 items-center justify-center rounded-md">
            <Zap className="size-9 text-[#DF7A57]" />
            <div className="text-center w-full">
              <p className="font-semibold text-sm">Fast Transactions</p>
              <p className="text-xs">We offer payments without delay.</p>
            </div>
          </div>
          <div className="flex  flex-col gap-3 items-center justify-center rounded-md">
            <ShieldIcon className="size-9 text-[#DF7A57]" />
            <div className="text-center w-full">
              <p className="font-semibold text-sm">Secure & Reliable</p>
              <p className="text-xs">
                We do not touch your money directly. We use trusted payment
                providers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Section --> */}
      <section id="testimonials" className="py-16  px-6 rounded-2xl">
        <h2 className="text-3xl text-black font-semibold text-center mb-10  ">
          What Businesses Say About Us
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto text-left">
          <blockquote className="bg-white p-6 rounded-lg shadow">
            “Receiving payments from my UK clients was a headache. Now funds
            arrive faster and at better rates.”
            <span className="block mt-2 font-medium">
              — Ada, Fashion Exporter
            </span>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow">
            “I’ve been able to accept USD payments without bank stress. Their
            support makes everything smooth.”
            <span className="block mt-2 font-medium">
              — Tunde, Freelance Designer
            </span>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            “They helped us process thousands of dollars securely. Very reliable
            service.”
            <span className="block mt-2 font-medium">
              — Chika, Startup Founder
            </span>
          </blockquote>
        </div>
      </section>
      <section id="FAQs" className="rounded-xl lg:mt-8">
        <div className="flex flex-col items-start w-full px-5 py-4 gap-4">
          <h3 className="font-semibold text-xl text-center w-full">
            Frequently asked questions
          </h3>
          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 px-0"
              defaultValue="item-1"
            >
              <AccordionItem
                value="item-1"
                className=" bg-white rounded-md px-3 py-2"
              >
                <AccordionTrigger>How fast are transactions?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>Most payments clear within 24–48 hours.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className=" bg-white rounded-md px-3 py-2"
              >
                <AccordionTrigger>
                  What currencies do you support?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>GBP, EUR and more coming soon.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className=" bg-white rounded-md px-3 py-2"
              >
                <AccordionTrigger>Are there hidden fees?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>No, we’re transparent with the best rates.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className=" bg-white rounded-md px-3 py-2"
              >
                <AccordionTrigger>
                  Do I need a company account?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    No, we support both freelancers and registered businesses.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className=" bg-white rounded-md px-3 py-2"
              >
                <AccordionTrigger>How do you accept payments?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We do not accept payments directly. We use trusted payment
                    providers to handle transactions securely.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      {/* <!-- FAQ Section --> */}\{/* <!-- Contact Form Section --> */}
      <section id="contact" className="py-16  rounded-2xl px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Get Started Today
        </h2>
        <p className="text-center mb-10">
          Tell us about your business and we’ll help you start accepting
          payments globally.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
          <div className="hidden lg:flex items-center justify-center w-full h-full">
            <Image
              src="/img1.jpg"
              alt="Contact Illustration"
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="max-w-xl mx-auto space-y-4 bg-inherit border p-6 rounded-lg shadow"
          >
            <div className="flex flex-col items-start mb-3">
              <h3 className="text-3xl font-semibold ">Send us a message.</h3>
              <p className="text-gray-800 text-sm">
                We will respond within 24 hours.
              </p>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="text"
              name="business"
              placeholder="Business Name / Type"
              className="w-full border rounded px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Message (optional)"
              className="w-full border rounded px-4 py-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-bg-brand-text text-white py-3 rounded-lg cursor-pointer hover:bg-bg-brand-text/90 transition-all duration-300"
            >
              Get Started
            </button>
            <p className="text-xs text-gray-500 mt-2">
              We’ll never share your information.
            </p>
          </form>
        </div>
      </section>
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
            <div className="flex gap-4 items-center justify-center mt-2">
              <FacebookIcon className="size-5 text-bg-primary-o  cursor-pointer" />
              <InstagramIcon className="size-5 text-bg-primary-o  cursor-pointer" />
              <Twitter className="size-5 text-bg-primary-o  cursor-pointer" />
            </div>
          </div>
        </div>
        <div>&copy; {new Date().getFullYear()} Coded. All rights reserved.</div>
      </footer>
    </div>
  );
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function MobileMenu() {
  return (
    <Popover className="lg:hidden">
      <PopoverTrigger asChild>
        <button variant="ghost">
          <MenuIcon className="size-6 text-gray-700 lg:hidden" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <div className="gap-4  flex flex-col">
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
        <a
          href="#contact"
          className="bg-[#26524F] text-white px-6 py-2 rounded-lg text-sm hover:bg-bg-brand-text/90 transition-all duration-300 hidden lg:inline-block"
        >
          Get Started
        </a>
      </PopoverContent>
    </Popover>
  );
}
