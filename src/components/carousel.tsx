'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from '@/icons/icons'

export default function ImageCarousel ({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <article className="carousel-container">
      <div className="carousel-btns">
        <button onClick={prev}>
          <ArrowLeft />
        </button>
        <button onClick={next}>
          <ArrowRight />
        </button>
      </div>
      <img
        src={images[currentIndex]}
        alt={`Imagen del testimonio número ${currentIndex}`}
      />
    </article>
  )
}
