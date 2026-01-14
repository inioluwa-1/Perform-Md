"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const MedicalAccordion = ({ treatmentType = "Shoulder", aboutContent, className = "" }) => {
  const [openItems, setOpenItems] = useState([])

  const defaultProgressData = [
    {
      percentage: 88,
      title: "Up To 88%",
      description: "Average Function Regained",
    },
    {
      percentage: 34,
      title: "34% Decrease",
      description: "In Joint Pain After 1-Month",
    },
    {
      percentage: 55,
      title: "55% Overall",
      description: "Improvement After 3-Months",
    },
  ]

  const defaultAboutContent = (
    <div className="text-gray-300 space-y-4">
      <p>
        Regenexx is the world's most advanced non-surgical stem cell and blood platelet procedures for common injuries
        and degenerative joint conditions, such as arthritis and avascular necrosis.
      </p>
      <p>
        Our highly skilled physician network consists of interventional orthopedic doctors who have been specially
        trained in these advanced procedures and hold current medical licenses.
      </p>
      <p>
        We maintain the world's largest research database for stem cell and blood platelet procedures with over 15,000
        patients tracked long-term.
      </p>
    </div>
  )

  const accordionItems = [
    {
      id: "conditions",
      title: `Commonly Treated ${treatmentType} Conditions`,
      content: (
        <div className="text-gray-300 space-y-3">
          <ul className="space-y-2">
            <h1>
              This is not a complete list, so please contact us or complete the Regenexx Candidate Form if you have
              questions about whether you or your condition can be treated with these non-surgical procedures.
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-[6rem] mt-5">
              <div>
                <li>• Arthritis</li>
                <li>• Meniscus Tears</li>
                <li>• ACL, MCL, PCL, or LCL sprain or tear</li>
                <li>• Knee Instability</li>
                <li>• Patellofemoral Syndrome/Chondromalacia</li>
              </div>
              <div>
                <li>• Pes anserine bursitis</li>
                <li>• Baker's cyst</li>
                <li>• Patellar tendonitis</li>
                <li>• Biceps Femoris Insertional Tendinopathy</li>
                <li>• Hamstrings Tendinopathy</li>
              </div>
            </div>
          </ul>
        </div>
      ),
    },
    {
      id: "patient-data",
      title: "Patient Outcome Data",
      progressData: defaultProgressData,
    },
    {
      id: "about",
      title: "About Regenexx And Our Highly Skilled Physician Network",
      content: aboutContent || defaultAboutContent,
    },
  ]

  const toggleItem = (itemId) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className={`bg-[#1D242C] py-16 lg:py-28 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="space-y-1">
          {accordionItems.map((item, index) => (
            <div key={item.id} className="border-l-4 border-[#76C0D8]">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-6 bg-[#29313A] hover:bg-[#434B52] transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">{item.title}</h3>
                <div
                  className={`transform transition-transform duration-300 ${openItems.includes(item.id) ? "rotate-180" : ""}`}
                >
                  <ChevronDown className="w-6 h-6 text-[#76C0D8] flex-shrink-0" />
                </div>
              </button>

              <div
                className={`bg-[#29313A] overflow-hidden transition-all duration-500 ease-in-out ${openItems.includes(item.id) ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div
                  className={`px-6 pb-6 transform transition-all duration-300 ${openItems.includes(item.id) ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                    }`}
                >
                  {item.progressData ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                      {item.progressData.map((data, idx) => (
                        <div
                          key={idx}
                          className={`transform transition-all duration-500 ${openItems.includes(item.id) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                          style={{ transitionDelay: openItems.includes(item.id) ? `${idx * 100}ms` : "0ms" }}
                        >
                          <CircularProgress {...data} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pt-4">{item.content}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const CircularProgress = ({ percentage, title, description }) => {
  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle cx="50" cy="50" r="45" stroke="#4A5568" strokeWidth="8" fill="none" />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#76C0D8"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-[#76C0D8]">{percentage}%</span>
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-sm md:text-base font-semibold text-white leading-tight">{title}</h4>
        <p className="text-xs md:text-sm text-gray-300 leading-tight">{description}</p>
      </div>
    </div>
  )
}

export default MedicalAccordion
