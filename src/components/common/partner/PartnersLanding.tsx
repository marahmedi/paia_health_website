import React, { useEffect, useState } from "react";
import bg from "../../../assets/backgrounds/partnerships-bg.png";
import phone from "../../../assets/screenshots/phone-landing.png";

type LandingCTA = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

type LandingProps = {
  heading: string;
  headingTwo?: string;
  description: string;
  topCta?: LandingCTA;
  bottomCtas?: LandingCTA[];
};

const PartnersLanding: React.FC<LandingProps> = ({
  heading,
  headingTwo,
  description,
  topCta,
  bottomCtas = [],
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      {/* BACKGROUND */}
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      <section className="relative z-10 min-h-screen overflow-hidden">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-28 pb-0 md:flex-row md:items-center md:gap-16 md:pt-32">
          
          {/* LEFT — TEXT */}
          <div
            className={`flex w-full flex-col items-start justify-center md:w-1/2
              transition-all duration-700 ease-out
              motion-reduce:transition-none
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
          >
            {topCta && (
              <a
                href={topCta.href}
                onClick={topCta.onClick}
                className="mb-6 inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-medium text-white backdrop-blur"
              >
                {topCta.label}
              </a>
            )}

            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {heading}
              {headingTwo && (
                <span className="mt-2 block font-light italic text-white/80">
                  {headingTwo}
                </span>
              )}
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
              {description}
            </p>

            {bottomCtas.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-4">
                {bottomCtas.map((cta, i) => {
                  const secondary = cta.variant === "secondary";

                  return (
                    <a
                      key={i}
                      href={cta.href}
                      onClick={cta.onClick}
                      className={`inline-flex h-11 items-center justify-center rounded-full px-7 font-semibold transition
                        ${
                          secondary
                            ? "border border-white text-white hover:bg-white hover:text-black"
                            : "bg-white text-black hover:bg-white/80"
                        }`}
                    >
                      {cta.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT — PHONE */}
          <div
            className={`relative mt-16 flex w-full items-end justify-center md:mt-0 md:w-1/2
              transition-all duration-700 delay-200 ease-out
              motion-reduce:transition-none
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src={phone}
              alt="Mobile app preview"
              className="
                w-full max-w-xs md:max-w-sm lg:max-w-md
                md:translate-y-40
                drop-shadow-2xl
                transform-gpu
              "
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartnersLanding;
