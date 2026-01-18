import React from "react";
import { Link } from "react-router-dom";
import ForWomen from "../../assets/backgrounds/smiling-woman-bg.png";
import ForPartners from "../../assets/backgrounds/yoga-woman-bg.png";

const WomenOrPartner = () => {
  return (
    <section className="w-full">
      <div className="grid min-h-[80vh] grid-cols-1 md:grid-cols-2">
        {/* FOR WOMEN */}
        <div className="group relative flex items-center justify-center min-h-[60vh] md:min-h-[80vh]">
          {/* Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${ForWomen})` }}
          />
          {/* Dark overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
          {/* Card */}
          <div className="relative z-10 mx-4 max-w-sm md:max-w-md">
            <div className="rounded-3xl bg-white p-6 md:p-10 text-center shadow-xl">
              <h3 className="mb-3 text-2xl md:text-3xl font-serif font-bold text-[#85494A]">
                For Women
              </h3>
              <p className="mb-6 text-base md:text-lg font-light text-text-muted">
                Gain clarity on your body's language. Feel validated,
                understood, and in control of your wellbeing.
              </p>
              <Link to="/women" className="inline-block">
                <button className="h-11 md:h-12 rounded-full bg-[#69474E] px-6 md:px-8 text-sm md:text-base font-semibold text-white transition hover:bg-[#5a3b40]">
                  Start Your Journey
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* FOR PARTNERS */}
        <div className="group relative flex items-center justify-center overflow-hidden min-h-[60vh] md:min-h-[80vh]">
          {/* Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${ForPartners})` }}
          />
          {/* Dark overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
          {/* Card */}
          <div className="relative z-10 mx-4 max-w-sm md:max-w-md">
            <div className="rounded-3xl bg-white p-6 md:p-10 text-center shadow-xl">
              <h3 className="mb-3 text-2xl md:text-3xl font-serif font-bold text-[#85494A]">
                For Partners
              </h3>
              <p className="mb-6 text-base md:text-lg font-light text-text-muted">
                Understand the hormonal context behind the moods. Learn how to
                support her best — right when she needs it.
              </p>
              <Link to="/partners">
                <button className="h-11 md:h-12 rounded-full bg-[#69474E] px-6 md:px-8 text-sm md:text-base font-semibold text-white transition hover:bg-[#5a3b40]">
                  Partner with Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenOrPartner;