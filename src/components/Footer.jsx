import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"
import { SiTiktok } from "react-icons/si"

const painLinks = [
  { name: "Knee Pain", href: "/knee" },
  { name: "Shoulder Pain", href: "/shoulder" },
  { name: "Hip Pain", href: "/hip" },
  { name: "Neck Pain", href: "/neck" },
  { name: "Spine Pain", href: "/spine" },
  { name: "Hand & Wrist Pain", href: "/handwrist" },
  { name: "Elbow Pain", href: "/elbowpain" },
  { name: "Ankle & Foot Pain", href: "/anklefoot" },
]

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-[#1D242C] text-white">
        <div className="container mx-auto px-4 py-14 lg:py-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Contact */}
          <div className="space-y-3 lg:space-y-8">
            <h3 className="text-xl lg:text-3xl font-bold">Contact</h3>
            <div className="text-gray-300 text-sm space-y-2 lg:text-xl">
              <div>
                <p><span className="font-semibold text-white">Address:</span> 123 Mockingbird Lane<br />
                  Springfield, FA 98765<br />
                  United States</p>
              </div>
              <div>
                <p><span className="font-semibold text-white">Phone:</span> <Link href="tel:+13052248850" className="hover:text-cyan-400">+1 (305) 224-8850</Link></p>
              </div>
              <div>
                <p><span className="font-semibold text-white">Email:</span> <Link href="mailto:Info@perform-md.com" className="hover:text-cyan-400">Info@perform-md.com</Link></p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl lg:text-3xl font-bold mb-4 lg:mb-8">Links</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-300 lg:text-xl">
              {painLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-cyan-400">{link.name}</Link>
              ))}
            </div>
          </div>

          {/* Learn More */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-4 lg:text-3xl lg:mb-6">Learn More</h3>
            <p className="text-white font-medium lg:text-xl">Dr. Peter Michael</p>
            <p className="text-sm text-gray-300 lg:text-xl">Perform MD regenerative orthopedics and spine</p>
            <Link href="/about" className="text-sm hover:text-cyan-400 lg:text-xl">About Us</Link>
          </div>
        </div>
      </div>

      {/* Social Media + Logo */}
      <div className="bg-[#2A333D] py-6 px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Icons */}
          <div className="flex items-center gap-6">
            <Link href="https://instagram.com/performmd" aria-label="Instagram" className="text-gray-400 hover:text-cyan-400">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://youtube.com/performmd" aria-label="YouTube" className="text-gray-400 hover:text-cyan-400">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link href="https://tiktok.com/performmd" aria-label="TikTok" className="text-gray-400 hover:text-cyan-400">
              <SiTiktok className="w-6 h-6" />
            </Link>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center">
            <Image
              src="/PMDLOGO.png" // Replace with your actual logo path
              alt="Perform MD Logo"
              width={160}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#16181B] text-center text-xs lg:text-sm text-gray-500 py-4 px-2">
        © 2025 Perform MD regenerative orthopedics and spine | All rights reserved |{" "}
        <Link href="/privacy-policy" className="underline hover:text-cyan-400">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer