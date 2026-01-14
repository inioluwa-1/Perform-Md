"use client"

import { Play, ChevronDown, ChevronLeft, ChevronRight, Pause } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const stories = [
  {
    id: 1,
    title: "Meniscus tear Recovery without surgery",
    subtitle: "Martin Fuentes (Regenexx)",
    thumbnail: "/Rectangle1.png",
    videoUrl: "/video1.mp4",
    featured: true,
  },
  {
    id: 2,
    title: "IFBB Pro Comeback Story",
    thumbnail: "/Rectangle2.png",
    videoUrl: "/video2.mp4",
  },
  {
    id: 3,
    title: "IFBB Pro Comeback Story",
    thumbnail: "/Rectangle3.png",
    videoUrl: "/video3.mp4",
  },
  {
    id: 4,
    title: "CrossFit Regional Champ's Comeback Story",
    thumbnail: "/Rectangle4.png",
    videoUrl: "/video4.mp4",
  },
  // Additional videos for "Show More" functionality
  {
    id: 5,
    title: "Marathon Runner Recovery Story",
    thumbnail: "/Rectangle5.jpg",
    videoUrl: "/video5.mp4",
  },
  {
    id: 6,
    title: "Professional Athlete Return",
    thumbnail: "/Rectangle6.jpg",
    videoUrl: "/video6.mp4",
  },
  {
    id: 7,
    title: "Weekend Warrior Success",
    thumbnail: "/Rectangle7.jpg",
    videoUrl: "/video7.mp4",
  },
  {
    id: 8,
    title: "Senior Athlete Recovery",
    thumbnail: "/Rectangle8.jpg",
    videoUrl: "/video8.mp4",
  },
]

const PatientStories = () => {
  const [selectedStory, setSelectedStory] = useState(stories[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [showMoreVideos, setShowMoreVideos] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [autoPlayProgress, setAutoPlayProgress] = useState(0)
  const videoRef = useRef(null)
  const autoPlayTimerRef = useRef(null)
  const progressTimerRef = useRef(null)

  const visibleStories = showMoreVideos ? stories : stories.slice(0, 4)
  const sidebarStories = showMoreVideos ? stories.slice(1) : stories.slice(1, 4)

  // Auto-advance functionality for mobile
  useEffect(() => {
    if (isAutoPlaying && !isPlaying) {
      // Reset progress
      setAutoPlayProgress(0)

      // Progress animation
      progressTimerRef.current = setInterval(() => {
        setAutoPlayProgress((prev) => {
          if (prev >= 100) {
            return 100
          }
          return prev + 2 // 2% every 100ms = 5 seconds total
        })
      }, 100)

      // Auto advance after 5 seconds
      autoPlayTimerRef.current = setTimeout(() => {
        handleNextVideo()
      }, 5000)
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current)
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current)
      }
    }
  }, [isAutoPlaying, isPlaying, currentVideoIndex])

  const handlePlayVideo = (story, index = 0) => {
    setSelectedStory(story)
    setCurrentVideoIndex(index)
    setIsPlaying(true)
    setIsAutoPlaying(false)
    setAutoPlayProgress(0)

    if (videoRef.current && story.videoUrl) {
      videoRef.current.src = story.videoUrl
      videoRef.current.play()
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    // Auto-advance to next video after current video ends
    setTimeout(() => {
      handleNextVideo()
    }, 1000)
  }

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % stories.length
    const nextStory = stories[nextIndex]
    setSelectedStory(nextStory)
    setCurrentVideoIndex(nextIndex)
    setIsPlaying(false)
    setAutoPlayProgress(0)
  }

  const handlePrevVideo = () => {
    const prevIndex = currentVideoIndex === 0 ? stories.length - 1 : currentVideoIndex - 1
    const prevStory = stories[prevIndex]
    setSelectedStory(prevStory)
    setCurrentVideoIndex(prevIndex)
    setIsPlaying(false)
    setAutoPlayProgress(0)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
    if (isAutoPlaying) {
      setAutoPlayProgress(0)
    }
  }

  const handleShowMore = () => {
    setShowMoreVideos(!showMoreVideos)
  }

  return (
    <section className="bg-[#1D242C] text-white py-8 lg:py-16">
      <div className="container mx-auto px-4 max-w-8xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-24">
          <span className="lg:hidden">Patient Stories</span>
          <span className="hidden lg:inline">Regenexx® Patient Success Stories</span>
        </h2>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="relative group cursor-pointer rounded-lg overflow-hidden">
              {isPlaying ? (
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover rounded-lg"
                  controls
                  autoPlay
                  onEnded={handleVideoEnd}
                  onClick={handleVideoClick}
                  poster={selectedStory.thumbnail}
                >
                  <source src={selectedStory.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <img
                    src={selectedStory.thumbnail || "/placeholder.svg?height=300&width=400"}
                    alt={selectedStory.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300"
                    onClick={() => handlePlayVideo(selectedStory, currentVideoIndex)}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors shadow-lg">
                      <Play className="w-7 h-7 text-slate-800 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrevVideo()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNextVideo()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}

              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h3 className="text-lg font-bold mb-1 leading-tight">{selectedStory.title}</h3>
                  {selectedStory.subtitle && <p className="text-sm text-gray-300">– {selectedStory.subtitle}</p>}
                </div>
              )}
            </div>

            {/* Auto-play controls */}
            <div className="flex items-center justify-between mt-4 mb-2">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isAutoPlaying ? "Pause Auto-play" : "Auto-play"}</span>
              </button>
              <span className="text-xs text-gray-400">
                {currentVideoIndex + 1} / {stories.length}
              </span>
            </div>

            {/* Progress indicator */}
            <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 rounded-full transition-all duration-100 ease-out"
                style={{
                  width:
                    isAutoPlaying && !isPlaying
                      ? `${autoPlayProgress}%`
                      : `${((currentVideoIndex + 1) / stories.length) * 100}%`,
                }}
              />
            </div>

            {/* Mobile story navigation */}
            <div className="flex justify-center mt-4 space-x-2">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => {
                    setSelectedStory(story)
                    setCurrentVideoIndex(index)
                    setIsPlaying(false)
                    setIsAutoPlaying(false)
                    setAutoPlayProgress(0)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    selectedStory.id === story.id ? "bg-cyan-400" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            {/* Main Video */}
            <div className="lg:col-span-2">
              <div className="relative group cursor-pointer rounded-lg overflow-hidden lg:h-[90%]">
                {isPlaying ? (
                  <video
                    ref={videoRef}
                    className="w-full h-[100%] aspect-video object-cover"
                    controls
                    autoPlay
                    onEnded={handleVideoEnd}
                    onClick={handleVideoClick}
                    poster={selectedStory.thumbnail}
                  >
                    <source src={selectedStory.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <img
                      src={selectedStory.thumbnail || "/placeholder.svg?height=400&width=700"}
                      alt={selectedStory.title}
                      className="w-full h-[100%] aspect-video object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300"
                      onClick={() =>
                        handlePlayVideo(
                          selectedStory,
                          stories.findIndex((s) => s.id === selectedStory.id),
                        )
                      }
                    >
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors shadow-xl">
                        <Play className="w-9 h-9 text-slate-800 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}

                {!isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                    <h3 className="text-xl xl:text-2xl font-bold mb-2 leading-tight">{selectedStory.title}</h3>
                    {selectedStory.subtitle && <p className="text-gray-300 text-base">– {selectedStory.subtitle}</p>}
                  </div>
                )}
              </div>
            </div>

            {/* Video Sidebar */}
            <div className="flex flex-col h-full">
              {/* Scrollable video container */}
              <div
                className={`space-y-4 transition-all duration-500 px-5 ${
                  showMoreVideos
                    ? "h-[700px] py-2 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800"
                    : "h-auto"
                }`}
              >
                {sidebarStories.map((story, index) => (
                  <div
                    key={story.id}
                    className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedStory.id === story.id ? "ring-2 ring-cyan-400" : ""
                    }`}
                    onClick={() =>
                      handlePlayVideo(
                        story,
                        stories.findIndex((s) => s.id === story.id),
                      )
                    }
                  >
                    <img
                      src={story.thumbnail || "/placeholder.svg?height=150&width=300"}
                      alt={story.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-colors shadow-lg">
                        <Play className="w-5 h-5 text-slate-800 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h4 className="text-sm font-semibold leading-tight text-white">{story.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More/Less Button - Fixed at bottom */}
              <div className="flex justify-center pt-4 mt-auto">
                <button
                  onClick={handleShowMore}
                  className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105">
                    <ChevronDown
                      className={`w-5 h-5 text-white transition-transform duration-300 ${showMoreVideos ? "rotate-180" : ""}`}
                    />
                  </div>
                  <span className="text-xs font-medium">
                    {showMoreVideos ? "Show Less" : `Show More (${stories.length - 4})`}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientStories