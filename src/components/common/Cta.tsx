import React from "react"
import backgroundCta from "../../assets/organge-circle.png"

const Cta = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] md:min-h-[80vh] px-4 sm:px-6 flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundCta})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Card */}
        <div
          className="
            bg-white
            rounded-[48px] sm:rounded-[64px] md:rounded-[80px]
            shadow-2xl
            px-6 py-12
            sm:px-10 sm:py-14
            md:px-16 md:py-20
            min-h-[36vh] sm:min-h-[40vh] md:min-h-[60vh]
            flex flex-col items-center justify-center
            text-center
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
            Ready to empower your members?
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-black/70 leading-relaxed">
            Launch a meaningful women’s wellness benefit with zero technical
            overhead and real emotional impact.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button
              className="
                h-14 px-10 rounded-full
                bg-[#BD6E40] text-white font-medium
                transition-all duration-300
                hover:bg-[#a85f36]
                active:scale-[0.98]
                shadow-lg
              "
            >
              Request Partnership Overview
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
