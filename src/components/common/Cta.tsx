import React from "react"
import backgroundCta from "../assets/background-cta.png"


const Cta = () => {
  return (
    <>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#F3F1ED]">
        <div className="relative mx-auto max-w-5xl rounded-[2.5rem] overflow-hidden text-center px-6 py-28 md:py-52 shadow-2xl shadow-primary/20">
            <img src={backgroundCta} alt="background-cta" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8">
            {/* <Handshake className="text-black/65 h-12 w-12 mb-2" /> */}
            <h2 className="text-3xl md:text-5xl font-medium text-black tracking-tight">
              Ready to empower your members?
            </h2>
            {/* <p className="mb-4 text-lg font-medium text-black">
              Join us in redefining women's wellness through intelligent,
              compassionate technology.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="h-14 min-w-[220px] rounded-full bg-[#F3F1ED]/90 cursor-pointer px-10 text-base  text-text-black/75  transition-all hover:bg-[#F3F1ED]/50 hover:text-black shadow-lg">
                Request Partnership Overview
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cta
