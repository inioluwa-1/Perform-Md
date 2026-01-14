import Aboutdoctor from "@/components/Aboutdoctor";
import Footer from "@/components/Footer";
import Footercta from "@/components/Footercta";
import Navbar from "@/components/Navbar";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#2A333D] py-16 px-4">
        <form className="max-w-3xl mx-auto text-center text-white space-y-10">
          <h1 className="text-5xl font-bold lg:text-6xl w-full">Schedule Appointment</h1>

          {/* Contact Info */}
          <div className="text-left space-y-4">
            <h2 className="text-[#76C0D8] text-xl font-semibold">
              Contact Info
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="First/Last Name"
                className="p-3 rounded bg-white placeholder-[#8E8E8E] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-white placeholder-[#8E8E8E] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 rounded bg-white placeholder-[#8E8E8E] outline-none"
              />
              <select className="p-3 rounded bg-white text-[#8E8E8E] outline-none">
                <option disabled selected>
                  Appointment Location
                </option>
                <option>UK</option>
                <option>Nigeria</option>
                <option>Canada</option>
                <option>United States of America</option>
              </select>
            </div>
          </div>

          {/* Time & Date */}
          <div className="text-left space-y-4">
            <h2 className="text-[#76C0D8] text-xl font-semibold">
              Time & Date
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="time"
                className="p-3 rounded bg-white text-[#8E8E8E] outline-none"
              />
              <input
                type="date"
                className="p-3 rounded bg-white text-[#8E8E8E] outline-none"
              />
            </div>
          </div>

          {/* Pain Selection */}
          <div className="text-left space-y-4">
            <h2 className="text-[#76C0D8] text-xl font-semibold">
              Pain Experiencing?
            </h2>
            <select className="p-3 rounded bg-white text-[#8E8E8E] outline-none w-full">
              <option disabled selected>
                Select Pain
              </option>
              <option>Hip Pain</option>
              <option>Back Pain</option>
              <option>Stomach Pain</option>
            </select>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full relative border-[#fff] border-2 mt-8 px-6 py-6 bg-[#1E242B] text-[#76C0D8] font-bold text-2xl rounded hover:bg-[#323d4a] transition"
          >
            Schedule Now
            <ArrowUpRight className="absolute right-8 bottom-6.5 text-[#fff]"/>
          </button>
        </form>
      </div>
      <Aboutdoctor />
      <Footercta />
      <Footer />
    </>
  );
};

export default page;
