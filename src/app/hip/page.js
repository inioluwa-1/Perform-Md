import Disclaimer from '@/components/Disclaimer'
import Footer from '@/components/Footer'
import HeroForm from '@/components/Heroform'
import HowRegenexxWorks from '@/components/HowRegenexxWorks'
import Medicalaccordion from '@/components/Medicalaccordion'
import Navbar from '@/components/Navbar'
import Patientstories from '@/components/Patientstories'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar/>
        <HeroForm bgImage="/hipHero.png"/>
        <section className=" bg-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    {/* <span className="text-white">Regenexx® Procedures</span> */}
                    {/* <span className="text-cyan-400"> For Knee Arthritis</span> */}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Arthritis, Bursitis and Other Degenerative Conditions!
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                    <div className="bg-gray-600 rounded-lg overflow-hidden shadow-2xl">
                        <Image
                        src="/hip.jpg"
                        alt="Knee pain illustration"
                        width={512}
                        height={589}
                        classNameName="mx-auto"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Regenexx® Procedures
                    </h3>

                
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Are non-surgical injection-based procedures for people suffering from hip pain due to common injuries, Avascular Necrosis (AVN, Osteonecrosis), Hip Bursitis, Hip Labral Tears, Hip Tendonitis, or degenerative problems like Arthritis related to the hip joint. These procedures utilize concentrated repair cells that are obtained from your own bone marrow or blood to promote your body own natural ability to heal.
                        </p>

                        <p>
                             Regenexx regenerative orthopedic procedures offer a non-surgical treatment option for many patients who are considering elective surgeries to treat their hip pain. Accurate diagnosis is key as Hip pain is often referred from other areas. Regenexx procedures are designed to help reduce pain and improve function with precise highly specific image-guided procedures to promote the body’s ability to heal itself naturally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Medicalaccordion/>

        <section class="bg-slate-900 py-16 px-4">
        <div class="max-w-7xl mx-auto">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight mb-12">
                Hip Surgery And Replacement <br class="sm:hidden" /> vs. Regenexx Procedures
            </h1>

            <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                <div class="lg:w-1/2 space-y-6 text-base lg:text-lg text-gray-200 leading-relaxed">
                    <p>
                        Hip pain can be very difficult to deal with on a day-to-day basis and
                        traditionally requires long-term pain management if the problem is
                        not corrected. Hip surgery, hip replacement surgery, and hip
                        resurfacing are often the only medical options presented to a
                        patient to deal with their debilitating pain.
                    </p>
                    <p>
                        Hip surgeries are typically very traumatic and are often followed by
                        months of pain and discomfort while attempting to redevelop
                        strength and mobility. Regenexx patients are typically encouraged to
                        walk the same day if possible, and most experience little downtime
                        from the procedure. Watch the videos below to learn more.
                    </p>
                </div>

                <div class="lg:w-1/2 w-full flex justify-center">
                    <div class="video-container">
                       {/* <Image/>*/}

                       <Image
                        src="/hip.jpg"
                        alt="Knee pain illustration"
                        width={512}
                        height={589}
                        classNameName="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Testimonials/>
         <HowRegenexxWorks/>
        <Patientstories/>
        <Disclaimer/>
        <Footer/>

    </>
  )
}

export default page