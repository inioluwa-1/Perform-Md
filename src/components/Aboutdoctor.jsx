import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Aboutdoctor = () => {
  return (
    <section className="bg-[#1D242C] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">
              About
              <br />
              Dr. Peter Michael
            </h2>
            <div className="space-y-4 text-gray-300 text-sm lg:text-base leading-relaxed">
              <p>
                Dr. Peter Michael is a graduate of the University of Miami Miller School of Medicine. He completed his
                internal medicine residency at Howard University Hospital and his physical medicine and rehabilitation
                (PM&R) at the University of Miami Miller School of Medicine. In 2016, he completed an interventional
                pain management fellowship at the Florida Spine Institute, and in 2017, a Regenexx interventional pain
                and regenerative sports medicine fellowship with Broder MD.
              </p>
              <p>
                Dr. Michael additionally received his Master of Business Administration from University of Miami School
                of Business in 2011, and has been published in various journals and conferences.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-none text-black hover:bg-cyan-950 hover:text-slate-900 group"
              asChild
            >
              <Link href="/about">
                LEARN MORE
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Doctor Image */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <img
                src="/doctor.png"
                alt="Dr. Peter Michael"
                className="w-full max-w-sm mx-auto lg:max-w-none rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutdoctor