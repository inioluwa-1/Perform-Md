import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import HeroForm from "@/components/Heroform";
import HowRegenexxWorks from "@/components/HowRegenexxWorks";
import Navbar from "@/components/Navbar";
import Patientstories from "@/components/Patientstories";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroForm bgImage="/fullshot.png" />

      <div className="bg-[#29313a] text-white p-8 w-full ">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-4">
            The Trusted Alternative To Orthopedic Surgery
          </h1>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Regenex Logo and Procedures */}

            {/* Right Column - Doctor Image */}
            <div className="flex items-center justify-center">
              <img src="/Frame 4.png"></img>
            </div>

            <div className="space-y-6">
              {/* Procedures Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                  Regenex* Procedures
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Provide non-surgical treatment options for those suffering
                  from pain related to various injuries, joint injuries, spine
                  pain, overuse conditions, and common sports injuries. These
                  medical procedures are only performed by highly-skilled
                  doctors trained specifically to perform procedures and are{" "}
                  <span className="text-cyan-400">minimally invasive</span> and
                  are used to help reduce pain and improve function.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Regenex procedures have helped thousands of patients improve
                  their quality of life, return to the activities they enjoy,
                  and avoid the need for surgery or joint replacement.*
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Regenex Physicians */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Physicians Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                Regenex Physicians
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Regenex is very selective. Highly-skilled,{" "}
                <span className="text-cyan-400 underline">
                  interventional orthopedic physicians
                </span>{" "}
                that is 100% focused on orthopedic conditions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                All Regenex physicians are musculoskeletal experts with
                extensive training and experience in the diagnosis and treatment
                of musculoskeletal conditions as well as complex, image-guided
                injections or procedures from the most orthopedic issues.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Regenex patient outcomes are tracked in a registry and with that
                information, we provide treatment outcome data helping for
                patients who may be considering this treatment option.
              </p>
            </div>

            {/* Right Column - Medical Professional Image */}
            <div className="flex items-center justify-center">
             <img src="/Frame 5.png"></img>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 opacity-10">
          <div className="w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <div className="w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div class="bg-[#1e242b] text-white w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            Regenexx Is A World Leader In The Field Of Orthopedic Regenerative
            <br class="hidden sm:block" />
            Medicine Based On Scientific Publications And Is Arguably The
            World's
            <br class="hidden sm:block" />
            Most Advanced Platform For In-Office Interventional Orthopedics.
          </h2>

          <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <p class="text-cyan-400 text-3xl font-bold mb-2">188,050</p>
              <p class="text-sm text-gray-300">
                More than <span class="text-cyan-400">188,000</span> highly
                specific image-guided Regenexx®
                <br />
                Procedures have been performed. Regenexx pioneered the field
                <br />
                of <span class="text-cyan-400">interventional orthopedics</span>
                , using bone marrow concentrate to treat
                <br />
                common orthopedic problems in 2005.
              </p>
            </div>

            <div>
              <p class="text-cyan-400 text-3xl font-bold mb-2">44%</p>
              <p class="text-sm text-gray-300">
                The published research on Regenexx procedures accounts
                <br />
                for approximately <span class="text-cyan-400">44%</span> of the
                worldwide research in the use of
                <br />
                <span class="text-cyan-400">bone marrow concentrate</span> for
                orthopedic conditions (cumulative %<br />
                of patients published in total) when searching{" "}
                <span class="italic">bone marrow concentrate</span>
                <br />
                as of 1/1/2019.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <HowRegenexxWorks/>

      <div class="bg-slate-900 text-white w-full px-4 sm:px-6 lg:px-8 py-16">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-12">
            Regenexx Is A World Leader In The Field Of Orthopedic Regenerative
            <br class="hidden sm:block" />
            Medicine Based On Scientific Publications And Is Arguably The
            World's
            <br class="hidden sm:block" />
            Most Advanced Platform For In-Office Interventional Orthopedics.
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="text-center">
              <p class="text-cyan-400 text-3xl font-bold mb-2 tracking-wide">
                188,050
              </p>
              <p class="text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
                More than 188,000 highly specific image-guided Regenexx
                <sup>®</sup>
                <br />
                Procedures have been performed. Regenexx pioneered the field
                <br />
                of <span class="text-cyan-400">interventional orthopedics</span>
                , using bone marrow concentrate to treat
                <br />
                common orthopedic problems in 2005.
              </p>
            </div>

            <div class="text-center">
              <p class="text-cyan-400 text-3xl font-bold mb-2 tracking-wide">
                44%
              </p>
              <p class="text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
                The published research on Regenexx procedures accounts
                <br />
                for approximately <span class="text-cyan-400">44%</span> of the
                worldwide research in the use of
                <br />
                <span class="text-cyan-400">bone marrow concentrate</span> for
                orthopedic conditions (cumulative %<br />
                of patients published in total) when searching bone marrow
                concentrate
                <br />
                as of 1/1/2019.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2a333d] text-white p-8 w-full">
        {/* Patient Results Section */}
        <div className="pt-8 max-w-7xl mx-auto">
          {/* Header with Dropdown */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Patient Results</h2>
            <div className="relative">
              <select className="bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 appearance-none pr-8">
                <option>Knee Results</option>
                <option>Hip Results</option>
                <option>Shoulder Results</option>
                <option>Back Results</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current text-gray-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 max-w-3xl">
            Regenex maintains an active patient registry that tracks patients'
            progress or side effects, post-procedure. Our outcomes database
            contains records on tens of thousands of Regenex procedures
            performed since 2005.
          </p>
          <p className="text-gray-300 mb-8">
            Below, you can explore the outcomes database and see the number of
            currently tracked procedures as well as patient-reported results.
          </p>

          {/* Patient Outcome Data */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Patient Outcome Data</h3>
            <p className="text-gray-300 mb-8">
              There are more than 3,087 Regenex knee patients being tracked in
              the Regenex® Patient Registry.
            </p>
          </div>

          {/* Statistics Circles */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* 76% Circle */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-600"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${76 * 3.14159} ${(100 - 76) * 3.14159}`}
                    className="text-cyan-400"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-cyan-400">76%</span>
                </div>
              </div>
              <p className="text-white font-semibold">Up To 76% Average</p>
              <p className="text-gray-400 text-sm">Function Regained</p>
            </div>

            {/* 43% Circle */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-600"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${43 * 3.14159} ${(100 - 43) * 3.14159}`}
                    className="text-cyan-400"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">43%</span>
                </div>
              </div>
              <p className="text-white font-semibold">43% Decrease In Joint</p>
              <p className="text-gray-400 text-sm">Pain After 1 Month</p>
            </div>

            {/* 51% Circle */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-600"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${51 * 3.14159} ${(100 - 51) * 3.14159}`}
                    className="text-cyan-400"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-cyan-400">51%</span>
                </div>
              </div>
              <p className="text-white font-semibold">
                51% Overall Improvement
              </p>
              <p className="text-gray-400 text-sm">After 3 Months</p>
            </div>
          </div>

          {/* Blue Bar */}
          <button className="w-32 bg-cyan-400 rounded">more details</button>
        </div>
      </div>

      <Patientstories />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default page;
