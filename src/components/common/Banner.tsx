import React from "react"
import { Share2, Activity, Droplet, Flower } from "lucide-react"

const logos = [
  { Icon: Share2, label: "NexusHealth" },
  { Icon: Activity, label: "CardioCare" },
  { Icon: Droplet, label: "VitalityPlus" },
  { Icon: Flower, label: "PureWellness" },
]

const Banner = () => {
  return (
    <section className="border-y border-black/3 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Label */}
        <p className="mb-8 text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-text-subtle/80">
          Trusted by forward-thinking health organizations
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-16">
          {logos.map(({ Icon, label }) => (
            <div
              key={label}
              className="
                group flex items-center gap-2
                text-base sm:text-lg md:text-xl
                font-semibold text-primary
                opacity-50 grayscale
                transition-all duration-300
                hover:opacity-100 hover:grayscale-0
              "
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
