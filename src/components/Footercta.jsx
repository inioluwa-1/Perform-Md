import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function Footercta() {
  return (
    <section
      className="relative py-18 lg:py-38 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/footerCtaImg.png')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Return To The Activities That Make You Happy, Without Surgery!
          </h2>
          <p className="text-lg lg:text-xl mb-8 lg:mb-12 text-gray-200">
            Learn More About Non-Surgical Orthopedic Procedures For Joint Injuries, Arthritis, And Spine Pain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-none text-black hover:bg-cyan-950 hover:text-slate-900 w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">
                GIVE US A CALL
                <Phone className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white w-full sm:w-auto" asChild>
              <Link href="/schedule">
                SCHEDULE APPOINTMENT
                <Calendar className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
