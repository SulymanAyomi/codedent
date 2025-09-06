"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ContactUsForm = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const [errors, setErrors] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(false);
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch("https://formspree.io/f/xovnyvdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formdata),
      });
      if (res.ok) {
        setSuccess(true);
        setFormdata({ name: "", email: "", business: "", message: "" });
      } else {
        setErrors(true);
      }
    } catch (err) {
      setErrors(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {success ? (
        <div className="w-full min-h-[calc(100vh-65px)] flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-6xl font-bold mb-4 text-[#26524F]">
            Thank you for reaching out to us. We will surely get back to you
          </h1>
        </div>
      ) : (
        <div className="px-6 mt-3">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Get Started Today
          </h2>
          <p className="text-center mb-10">
            We’d love to learn more about your business. Fill out the form below
            and our team will reach out to schedule a meeting.
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
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto space-y-4 bg-inherit border p-6 rounded-lg shadow"
            >
              <div className="flex flex-col items-start mb-3">
                <h3 className="text-3xl font-semibold ">Send us a message.</h3>
                <p className="text-gray-800 text-sm">
                  We will respond within 24 hours.
                </p>
                {errors && (
                  <p className="text-center text-xs text-red-500">
                    Something went wrong! Please try again.
                  </p>
                )}
              </div>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border rounded px-4 py-2"
                value={formdata.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border rounded px-4 py-2"
                value={formdata.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="business"
                placeholder="Business Name / Type"
                className="w-full border rounded px-4 py-2"
                value={formdata.business}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message (optional)"
                className="w-full border rounded px-4 py-2"
                value={formdata.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "w-full bg-bg-brand-text text-white py-3 rounded-lg cursor-pointer hover:bg-bg-brand-text/90 transition-all duration-300",
                  loading && "bg-bg-brand-text/75"
                )}
              >
                Get Started
              </button>
              <p className="text-xs text-gray-500 mt-2">
                We’ll never share your information.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
