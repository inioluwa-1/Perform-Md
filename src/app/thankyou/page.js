import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <section className="text-center py-16 bg-[#1d293d] text-white px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Appointment Schedule!</h1>
                <p className="text-lg md:text-xl">Someone From PerformMD Will Contact You Soon!</p>
            </section>

            <section className="bg-[#0f172b] px-4 md:px-12 lg:px-74 py-16 flex flex-col lg:flex-row items-center gap-10 max-w mx-auto">
                <div className="lg:flex-[2]">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">About Dr. Peter Michael</h2>
                    <p className="text-white mb-4">
                        Dr. Peter Michael is a graduate of the University of Miami Miller School of Medicine. He completed his internal medicine residency at Howard University Hospital and his physical medicine and rehabilitation (PM&R) at the University of Miami Miller School of Medicine. In 2016, he completed an interventional pain management fellowship at the Florida Spine Institute, and in 2017, a interventional pain and regenerative sports medicine fellowship with Marko Brodor MD.
                    </p>
                    <p className="text-white mb-4">
                        Dr. Michael additionally received his Master of Business Administration from University of Miami School of Business in 2011, and has been published in various journals and conferences.
                    </p>

                    <div className="mt-6 w-full">
                        <div className="flex items-center gap-3">
                            <div className="border border-white p-1 rounded-sm">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white font-medium uppercase tracking-wide">Learn More</span>
                        </div>
                        <div className="w-full h-[1px] bg-white mt-2" />
                    </div>
                </div>

                <div className="lg:flex-1">
                    <Image
                        src="/doctor.png"
                        alt="Dr Peter Michael"
                        width={300}
                        height={400}
                        className="w-full max-w-xs mx-auto"
                    />
                </div>
            </section>

            <section className="relative h-auto md:h-[400px] text-white flex items-center justify-center px-4 py-16 md:py-0">
                <Image
                    src="/footerCtaImg.png"
                    alt="Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 z-0" />
                <div className="relative z-10 text-center max-w-4xl">
                    <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Return To The Activities That Make <br className="hidden md:block" />
                        You Happy, Without Surgery!
                    </h3>
                    <p
                        className="mb-6 text-base md:text-2xl font-light capitalize"
                        style={{ wordSpacing: "0.45rem" }}
                    >
                        Learn more about non-surgical orthopedic procedures for <br className="hidden md:block" />
                        joint injuries, arthritis, and spine pain.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <button className="bg-white text-black font-semibold px-6 py-2 rounded-md flex items-center gap-2 shadow-sm hover:bg-gray-100 transition-colors duration-300">
                            GIVE US A CALL
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 shadow-sm hover:bg-blue-600 transition-colors duration-300">
                            SCHEDULE APPOINTMENT
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default page