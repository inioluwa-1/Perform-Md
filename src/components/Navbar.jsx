"use client"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const servicesItems = ["Knee", "Hip", "Shoulder", "Foot & Ankle", "Hand & Wrist", "Elbow", "Spine"]

// ✅ Reusable NavLink component
const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "hover:text-cyan-400 transition-colors relative inline-block",
        isActive ? "text-[#fff] font-semibold after:absolute after:bottom-[-6px] after:left-0 after:w-[80%] after:right-0 after:mx-auto after:h-[2px] after:bg-[#76C0D8]" : ""
      )}
    >
      {children}
    </Link>
  )
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  const pathname = usePathname()

  // ✅ Auto-close on scroll or route change
  useEffect(() => {
    const handleScroll = () => setIsMobileMenuOpen(false)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setServicesOpen(false)
    setLocationsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Contact Bar - Desktop Only */}
      <div className="hidden lg:block bg-[#17181C] text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-gray-300">GIVE US A CALL</span>
            <Link href="tel:+18888282131" className="text-cyan-400 hover:text-cyan-300">
              +1 (888) 828-2131
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">SCHEDULE APPOINTMENT</span>
            <Link href="/schedule" className="text-cyan-400 hover:text-cyan-300">
              CLICK HERE
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1D242C] text-white sticky top-0 z-50">
        <div className="container mx-auto">
          {/* Mobile Contact Bar */}
          <div className="lg:hidden flex items-center justify-between text-[8px] w-full gap-2 py-3 px-4 mx-auto overflow-x-auto whitespace-nowrap">
            <div className="flex items-center text-gray-300 gap-1 shrink-0">
              <span className="font-extrabold">GIVE US A CALL</span>
              <Link href="tel:+18888282131" className="text-cyan-400">
                +1 (888) 828-2131
              </Link>
            </div>
            <div className="flex items-center text-gray-300 gap-1 shrink-0">
              <span className="font-extrabold">SCHEDULE APPOINTMENT</span>
              <Link href="/schedule" className="text-cyan-400">
                CLICK HERE
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between h-16 lg:h-20 px-4">
            {/* Logo */}
            <Link href="/">
              <img src="/PMDLOGO.png" alt="Logo" className="h-8 sm:h-10 w-auto max-w-[150px] object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-xl">ABOUT US</span>
              </NavLink>

              <div className="relative group">
                <button className="flex items-center text-xl gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                  SERVICES
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-0.5 w-48 bg-slate-800 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-2 space-y-1">
                    {servicesItems.map((item) => (
                      <Link
                        key={item}
                        href={item === "Foot & Ankle" ? "/ankle" : `/${item.toLowerCase().replace(/\s+/g, "").replace(/&/g, "")}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full"
                      >
                        <span className="block w-full px-4 py-2 text-sm hover:bg-slate-700 hover:text-cyan-400">
                          {item}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>



              <NavLink href="/learn-more" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-xl">LEARN MORE</span>
              </NavLink>

              <div className="relative group">
                <button className="flex items-center text-xl gap-1 hover:text-cyan-400 transition-colors">
                  LOCATIONS
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Add animated dropdown if needed for locations */}
              </div>
            </div>


            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" className="border-none text-black hover:bg-cyan-950 hover:text-slate-900" asChild>
                <Link href="/call">CALL NOW <Phone className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
                <Link href="/schedule">SCHEDULE <Calendar className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Animated Slide-In Mobile Menu */}
        <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#1D242C] text-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Inside Mobile Menu (before menu header and close button) */}
          <div className="lg:hidden flex items-center justify-between text-[8px] w-full gap-2 py-3 px-4 overflow-x-auto whitespace-nowrap border-b border-slate-800">
            <div className="flex items-center text-gray-300 gap-1 shrink-0">
              <span className="font-extrabold">GIVE US A CALL</span>
              <Link href="tel:+18888282131" className="text-cyan-400">
                +1 (888) 828-2131
              </Link>
            </div>
            <div className="flex items-center text-gray-300 gap-1 shrink-0">
              <span className="font-extrabold">SCHEDULE APPOINTMENT</span>
              <Link href="/schedule" className="text-cyan-400">
                CLICK HERE
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 px-4 border-b border-slate-800">
            <img src="/PMDLOGO.png" alt="Logo" className="h-10 w-auto object-contain" />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex flex-col px-6 py-4 space-y-6">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium hover:text-cyan-400">ABOUT US</Link>
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full text-xl font-medium hover:text-cyan-400">
                SERVICES <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="mt-4 ml-4 space-y-3">
                  {servicesItems.map((item) => (
                    <Link key={item} href={item === "Foot & Ankle" ? "/ankle" : `/${item.toLowerCase().replace(/\s+/g, "").replace(/&/g, "")}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-cyan-400">{item}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/learn-more" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium hover:text-cyan-400">LEARN MORE</Link>
            <div>
              <button onClick={() => setLocationsOpen(!locationsOpen)} className="flex items-center justify-between w-full text-xl font-medium hover:text-cyan-400">
                LOCATIONS <ChevronDown className={`w-5 h-5 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            <div className="space-y-4 pt-4">
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white h-12 text-lg" asChild>
                <Link href="/schedule" onClick={() => setIsMobileMenuOpen(false)}>SCHEDULE <Calendar className="w-5 h-5 ml-2" /></Link>
              </Button>
              <Button variant="outline" className="w-full border-none text-black hover:bg-cyan-950 hover:text-slate-900 h-12 text-lg" asChild>
                <Link href="/call" onClick={() => setIsMobileMenuOpen(false)}>CALL NOW <Phone className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar