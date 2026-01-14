import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"
import Link from "next/link"

const AboutPage = () => {
    return (
        <>
            <Navbar />
            
            {/* Hero Section */}
            <section className="bg-[#1D242C] py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Leading the way in regenerative orthopedic medicine
                    </p>
                </div>
            </section>

            {/* Our Mission */}
            <section className="bg-[#29313A] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Our Mission
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            We are dedicated to providing cutting-edge regenerative orthopedic procedures that help patients avoid surgery and return to active, pain-free lives. Through the advanced Regenexx® protocols, we offer non-surgical alternatives for treating orthopedic conditions using your body's own natural healing abilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Dr. Peter Michael */}
            <section className="bg-[#1D242C] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Doctor Image */}
                        <div className="relative">
                            <img
                                src="/doctor.png"
                                alt="Dr. Peter Michael"
                                className="w-full max-w-md mx-auto lg:max-w-none rounded-lg shadow-xl"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Meet Dr. Peter Michael
                            </h2>
                            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                                <p>
                                    Dr. Peter Michael is a graduate of the University of Miami Miller School of Medicine. He completed his internal medicine residency at Howard University Hospital and his physical medicine and rehabilitation (PM&R) at the University of Miami Miller School of Medicine.
                                </p>
                                <p>
                                    In 2016, he completed an interventional pain management fellowship at the Florida Spine Institute, and in 2017, a Regenexx interventional pain and regenerative sports medicine fellowship with Broder MD.
                                </p>
                                <p>
                                    Dr. Michael additionally received his Master of Business Administration from University of Miami School of Business in 2011, and has been published in various journals and conferences.
                                </p>
                                <p>
                                    With his extensive training in regenerative medicine and commitment to patient care, Dr. Michael is at the forefront of non-surgical orthopedic treatments, helping patients find alternatives to traditional surgery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-[#29313A] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
                        Why Choose Our Practice
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#1D242C] p-8 rounded-lg shadow-lg">
                            <div className="text-cyan-400 text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Precision Treatment
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                We use advanced imaging guidance to ensure precise placement of regenerative cells, maximizing effectiveness and patient outcomes.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#1D242C] p-8 rounded-lg shadow-lg">
                            <div className="text-cyan-400 text-4xl mb-4">🏥</div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Non-Surgical Solutions
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Our Regenexx® procedures offer alternatives to surgery, helping you avoid lengthy recovery times and surgical risks.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#1D242C] p-8 rounded-lg shadow-lg">
                            <div className="text-cyan-400 text-4xl mb-4">🔬</div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Evidence-Based Care
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Our treatments are backed by extensive research and clinical data, ensuring you receive proven, effective care.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#1D242C] p-8 rounded-lg shadow-lg">
                            <div className="text-cyan-400 text-4xl mb-4">⚡</div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Minimal Downtime
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Most patients experience little downtime and can return to their regular activities as they begin to heal.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-[#1D242C] p-8 rounded-lg shadow-lg">
                            <div className="text-cyan-400 text-4xl mb-4">👥</div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Personalized Care
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Every patient receives a customized treatment plan based on their specific condition and imaging results.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-[#1D242C] p-8 rounded-lg shadow-lg">
                            <div className="text-cyan-400 text-4xl mb-4">🌟</div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Regenexx® Certified
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                As a certified Regenexx provider, we deliver the highest standard of regenerative orthopedic care available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="bg-[#1D242C] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
                        Our Approach to Care
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                At our practice, we believe in treating the root cause of pain and dysfunction, not just masking symptoms. Our regenerative orthopedic procedures use your body's own healing mechanisms to repair damaged tissues and restore function.
                            </p>
                            <p>
                                We take the time to thoroughly evaluate each patient's condition using advanced imaging technology. This allows us to create a precise diagnosis and develop a targeted treatment plan tailored to your specific needs.
                            </p>
                            <p>
                                Whether you're dealing with arthritis, tendon tears, ligament injuries, or other orthopedic conditions, we're here to help you explore non-surgical options that can get you back to the activities you love.
                            </p>
                            <p>
                                Our commitment is to provide compassionate, evidence-based care that delivers real results. We'll work with you every step of the way, from initial consultation through treatment and recovery.
                            </p>
                        </div>

                        <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/fullshot2.png"
                                alt="Our approach to care"
                                width={600}
                                height={400}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditions We Treat */}
            <section className="bg-[#29313A] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
                        Conditions We Treat
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            "Knee Arthritis",
                            "Hip Pain",
                            "Shoulder Injuries",
                            "Ankle Conditions",
                            "Elbow Issues",
                            "Spine Problems",
                            "Hand & Wrist Pain",
                            "Tendon Tears",
                            "Ligament Injuries",
                            "Meniscus Tears",
                            "Rotator Cuff",
                            "And More..."
                        ].map((condition, index) => (
                            <div key={index} className="bg-[#1D242C] p-4 rounded-lg text-center">
                                <p className="text-white font-semibold">{condition}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#1D242C] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Explore Your Options?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Schedule a consultation to learn if Regenexx® procedures are right for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white h-12 px-8 text-lg" asChild>
                            <Link href="/schedule">
                                SCHEDULE APPOINTMENT
                                <Calendar className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                        <Button variant="outline" className="border-none text-black hover:bg-cyan-950 hover:text-slate-900 h-12 px-8 text-lg" asChild>
                            <Link href="tel:+18888282131">
                                CALL NOW
                                <Phone className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AboutPage
