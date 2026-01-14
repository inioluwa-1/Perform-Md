import Footer from '@/components/Footer'
import HeroForm from '@/components/Heroform'
import HowRegenexxWorks from '@/components/HowRegenexxWorks'
import Navbar from '@/components/Navbar'
import PatientStories from '@/components/Patientstories'
import Testimonials from '@/components/Testimonials'
import React from 'react'
import MedicalAccordion from '@/components/Medicalaccordion'
import Image from 'next/image'



const page = () => {
  return (
    <>
      <Navbar/>
      <HeroForm  bgImage="/bgImage.jpg"/>
    <div className="bg-black text-white py-16 px-4 md:px-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
          Regenexx® Procedures <span className="text-blue-400">For Rotator Cuff Tears</span><br />
          <span className="text-white">Shoulder Arthritis, And Other Shoulder Conditions</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
           <img
                src="/shoulder.png"
                alt="Dr. Peter Michael"
                className="w-full max-w-sm mx-auto lg:max-w-none rounded-lg shadow-xl"
              />
        </div>

        <div className="flex-1 text-sm md:text-base leading-relaxed">
          <h3 className="text-lg font-semibold mb-4">Regenexx® Regenerative</h3>
          <p className="mb-4">
            Orthopedic procedures are non-surgical injection-based procedures for people suffering from shoulder pain due to common injuries to the shoulder and rotator cuff, Shoulder Labrum, as well as degenerative conditions, such as shoulder osteoarthritis. These procedures utilize concentrated repair cells that are obtained from your own bone marrow or blood to promote your body’s own natural ability to heal.
          </p>
          <p>
            Traditional options for patients suffering from these conditions include arthroscopic shoulder surgery to repair tears, or shoulder joint replacement. With both surgeries, months of rehab are required, and the patient must be aware of and prepared to take on the risks. Regenexx procedures are designed to help reduce pain and improve function with precise highly specific image–guided medical procedures to promote the body’s ability to heal itself naturally.
          </p>
        </div>
      </div>
    </div>
      <MedicalAccordion/>
      <Testimonials/>
    <section className="bg-[#1E293B] text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-10">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left leading-snug">
            Regenexx Procedures <br />
            <span className="text-blue-400">For Rotator Cuff Tears</span>
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            Using the healing agents from your own body to treat rotator cuff tears, shoulder arthritis, and other common shoulder conditions, Regenexx provides an alternative to invasive surgeries like rotator cuff tear surgery, shoulder labrum surgery, acromioplasty, and shoulder replacement.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            Highly specific, precise, image-guided injections of your own cells and <span className="text-blue-400 underline">growth factors</span> directly into the injured area promotes your own body’s natural ability to repair. By both mobilizing your body’s own healing mechanisms and eliminating the trauma of surgery and atrophy caused by immobilization, Regenexx has produced good outcomes in the treatment of rotator cuff tears, and other common shoulder injuries and degenerative conditions like shoulder arthritis.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            We have already published a mid-term report on our randomized control trial to treat rotator cuff tears and the final analysis will be published soon.
          </p>
        </div>

        {/* Right Video/Image Preview */}
        <div className="w-full lg:w-1/3">
          <div className="aspect-video relative rounded-md overflow-hidden">
            <Image
              src="/Regenexxpreview.png" // Put this image in your /public folder
              alt="Regenexx Video Preview"
              fill
              className="object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/70 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <HowRegenexxWorks/>
      <PatientStories/>
      <Footer/>

    </>
  )
}

export default page