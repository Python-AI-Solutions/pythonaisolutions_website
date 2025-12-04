'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ScreenshotCarouselProps {
  screenshots: string[]
  title: string
}

export function ScreenshotCarousel({ screenshots, title }: ScreenshotCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!screenshots || screenshots.length === 0) return null

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#31b9fd]/10 to-[#31b9fd]/5 shadow-xl">
        {screenshots[currentIndex].endsWith('.svg') ? (
          <div className="relative h-80 bg-[url('/grid.svg')] opacity-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-2 text-6xl font-bold text-[#31b9fd]/20">
                  {title.charAt(0)}
                </div>
                <div className="text-base font-medium text-[#31b9fd]/60">
                  Screenshot Preview
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative aspect-video">
            <Image
              src={screenshots[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1}`}
              width={1200}
              height={675}
              className="h-full w-full object-cover object-top"
              priority={currentIndex === 0}
              unoptimized
            />
          </div>
        )}
      </div>
      
      {/* Navigation Dots */}
      {screenshots.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#31b9fd] w-6' 
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

