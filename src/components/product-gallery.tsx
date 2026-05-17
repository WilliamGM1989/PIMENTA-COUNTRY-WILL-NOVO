"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  productName: string
  badge?: string
}

export function ProductGallery({ images, productName, badge }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted border border-border">
        {badge && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow">
            {badge}
          </span>
        )}
        <Image
          src={images[activeIndex] ?? "/placeholder.jpg"}
          alt={productName}
          fill
          className="object-cover transition-opacity duration-200"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Ver foto ${i + 1} de ${productName}`}
              onClick={() => setActiveIndex(i)}
              className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:scale-105 hover:shadow-md ${
                i === activeIndex
                  ? "border-primary scale-105 shadow-md"
                  : "border-border hover:border-primary/60"
              }`}
            >
              <Image
                src={src}
                alt={`${productName} — foto ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGallery
