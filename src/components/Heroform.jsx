"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, User } from "lucide-react"
import Link from "next/link"

export default function HeroForm({ bgImage }) {
  return (
    <section
      className="relative py-20 lg:py-60 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}  
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <div className="text-center lg:text-left mb-9">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Get Back To The Activities <br className="hidden sm:block" />
              <span className="text-white">You Love, Without Surgery.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-[1.8rem] lg:w-[70%] text-gray-200">
              Receive A Regenexx® Patient Info Packet By Email To Learn More About Our
              Regenerative Orthopedic Procedures.
            </p>
          </div>

          {/* Form Layout */}
          <form className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name *"
                className="h-12 p-2 bg-white/90 border-0 rounded-none placeholder:text-gray-600 flex-1 text-black"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                className="h-12 p-2 bg-white/90 border-0 rounded-none placeholder:text-gray-600 flex-1 text-black"
              />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              className="h-12 bg-white/90 border-0 rounded-none placeholder:text-gray-600 text-black"
            />
            <Button type="submit" className="w-full h-12 bg-cyan-500 rounded-none hover:bg-cyan-600 text-white font-medium text-lg cursor-pointer">
              SEND
            </Button>
          </form>

          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row gap-4 mt-9 text-white text-sm justify-center sm:justify-start">
            <Link href="tel:702-830-7216" className="flex items-center gap-2 hover:text-cyan-400 transition-colors lg:text-xl">
              <Phone className="w-4 h-4 text-[#50C3E9] lg:w-6 lg:h-6" />
              Call 702-830-7216
            </Link>
            <Link href="/candidate" className="flex items-center gap-2 hover:text-cyan-400 transition-colors lg:text-xl">
              <User className="w-4 h-4 text-[#50C3E9] lg:w-6 lg:h-6" />
              Are you a candidate?
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}