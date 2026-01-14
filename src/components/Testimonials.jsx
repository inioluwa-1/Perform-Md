"use client"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { FcGoogle } from "react-icons/fc";

const testimonials = [
    {
        id: 1,
        rating: 5,
        timeAgo: "1 Year Ago",
        text: "Dr. Peter Michael And The Team At Perform MD Worked Wonders For My Chronic Wrist Pain. Their Regenerative Treatments Brought Relief I Never Thought Possible. Grateful For Their Expertise!",
        source: "Google Reviews",
    },
    {
        id: 2,
        rating: 5,
        timeAgo: "6 Months Ago",
        text: "Michael Is A Miracle Worker! Thanks To Perform MD, My Shoulder Pain Is Finally A Thing Of The Past. The Personalized Care And Advanced Treatments Made All The Difference.",
        source: "Google Reviews",
    },
    {
        id: 3,
        rating: 5,
        timeAgo: "3 Weeks Ago",
        text: "Kudos To Perform MD For Their Incredible Spine Care! Dr. Peter Michael's Expertise Eased My Chronic Neck Pain. Grateful For The Attentive Staff And Life-Changing Treatments.",
        source: "Google Reviews",
    },
    {
        id: 4,
        rating: 5,
        timeAgo: "3 Weeks Ago",
        text: "If You're Struggling With Neck Pain, Look No Further Than Perform MD. Dr. Michael And His Team Are Dedicated Professionals Who Genuinely Care. Their Treatments Worked Wonders For Me!",
        source: "Google Reviews",
    },
]

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-advance testimonials every 5 seconds on mobile
    useEffect(() => {
        if (isAutoPlaying && window.innerWidth < 1024) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [isAutoPlaying])

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsAutoPlaying(false) // Stop auto-play when user interacts
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false) // Stop auto-play when user interacts
    }

    const goToTestimonial = (index) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    return (
        <section className="bg-[#29313A] text-white py-12 lg:py-18">
            <div className="container mx-auto px-1 lg:px-4 max-w-7xl">
                {/* Mobile View - Single Testimonial with Navigation */}
                <div className="lg:hidden">
                    <div className="relative max-w-md mx-auto">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>

                        {/* Testimonial Card */}
                        <div className="bg-[#1D242C] rounded-lg p-4 mx-8 transition-all duration-500">
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                                ))}
                                <span className="ml-2 text-gray-400 text-sm">{testimonials[currentIndex].timeAgo}</span>
                            </div>

                            <p className="text-base mb-6 leading-relaxed text-gray-100">{testimonials[currentIndex].text}</p>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <FcGoogle className="text-xl font-bold" />
                                </div>
                                <span className="font-medium text-gray-200">Google Reviews</span>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-6 h-1 bg-slate-700 rounded-full mx-8">
                            <div
                                className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                            />
                        </div>

                        {/* Dot Indicators */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? "bg-cyan-400" : "bg-slate-600"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop View - Multiple Testimonials */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <ChevronLeft className="w-6 h-6 text-white cursor-pointer" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <ChevronRight className="w-6 h-6 text-white cursor-pointer" />
                        </button>

                        {/* Testimonials Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`bg-slate-800/30 rounded-lg p-5 transition-all duration-500 hover:bg-slate-800/50 ${index === currentIndex ? "ring-2 ring-cyan-400/50 bg-slate-800/60" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                                        ))}
                                        <span className="ml-2 text-sm text-gray-400">{testimonial.timeAgo}</span>
                                    </div>

                                    <p className="text-sm leading-relaxed mb-4 text-gray-100 min-h-[120px]">{testimonial.text}</p>

                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <FcGoogle className="text-xl font-bold" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-200">{testimonial.source}</span>
                                        <ChevronRight className="w-3 h-3 text-gray-400" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Progress Indicator */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${currentIndex === index ? "bg-cyan-400" : "bg-slate-600"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-12 pt-6 border-t border-slate-700">
                    <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto leading-relaxed">
                        *DISCLAIMER: Like All Medical Procedures, Perform MD Regenerative Orthopedics And Spine® Procedures Have A
                        Success And Failure Rate. Patient Reviews And Testimonials On This Site Should Not Be Interpreted As A
                        Statement On The Effectiveness Of Our Treatments For Anyone Else.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials