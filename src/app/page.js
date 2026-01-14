import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroForm from '@/components/Heroform'
import Aboutdoctor from '@/components/Aboutdoctor'
import HowRegenexxWorks from '@/components/HowRegenexxWorks'
import Testimonials from '@/components/Testimonials'
import Patientstories from '@/components/Patientstories'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroForm bgImage="/fullshot2.png" />
            
            {/* Welcome Section */}
            <section className="bg-[#29313A] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Welcome to Regenexx® Regenerative Medicine
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Discover non-surgical solutions for orthopedic conditions. Our advanced regenerative procedures use your body's own healing power to treat pain and restore function.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="bg-[#1D242C] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
                        Our Specialized Services
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Knee */}
                        <Link href="/knee" className="group">
                            <div className="bg-[#29313A] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/kneeman.png"
                                        alt="Knee Treatment"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        Knee
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Treatment for meniscus tears, arthritis, ligament injuries, and more.
                                    </p>
                                    <span className="text-cyan-400 flex items-center gap-2">
                                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Shoulder */}
                        <Link href="/shoulder" className="group">
                            <div className="bg-[#29313A] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/fullshot2.png"
                                        alt="Shoulder Treatment"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        Shoulder
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Solutions for rotator cuff tears, arthritis, and shoulder pain.
                                    </p>
                                    <span className="text-cyan-400 flex items-center gap-2">
                                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Hip */}
                        <Link href="/hip" className="group">
                            <div className="bg-[#29313A] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/hipHero.png"
                                        alt="Hip Treatment"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        Hip
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Non-surgical alternatives to hip replacement and pain management.
                                    </p>
                                    <span className="text-cyan-400 flex items-center gap-2">
                                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Spine */}
                        <Link href="/spine" className="group">
                            <div className="bg-[#29313A] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/spine.svg"
                                        alt="Spine Treatment"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        Spine
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Advanced treatments for back pain, disc issues, and spinal conditions.
                                    </p>
                                    <span className="text-cyan-400 flex items-center gap-2">
                                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Ankle */}
                        <Link href="/ankle" className="group">
                            <div className="bg-[#29313A] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/ankle.jpg"
                                        alt="Ankle Treatment"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        Foot & Ankle
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Effective care for ankle sprains, Achilles injuries, and arthritis.
                                    </p>
                                    <span className="text-cyan-400 flex items-center gap-2">
                                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Elbow */}
                        <Link href="/elbow" className="group">
                            <div className="bg-[#29313A] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/background image.jpg"
                                        alt="Elbow Treatment"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        Elbow
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Relief for tennis elbow, golfer's elbow, and elbow injuries.
                                    </p>
                                    <span className="text-cyan-400 flex items-center gap-2">
                                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <HowRegenexxWorks />
            <Aboutdoctor />
            <Testimonials />
            <Patientstories />

            {/* Final CTA */}
            <section className="bg-[#29313A] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Take the First Step Toward Recovery
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Schedule your consultation today and discover if Regenexx® is right for you.
                    </p>
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-white h-12 px-8 text-lg" asChild>
                        <Link href="/schedule">
                            SCHEDULE NOW
                            <Calendar className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </>
    )
}
