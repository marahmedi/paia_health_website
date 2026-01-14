import React, { useEffect, useState } from "react";
import { LightRays } from "../ui-components/LightRays";
import { InteractiveHoverButton } from "../ui-components/InteractiveHoverButton";
import tennis from "../../assets/tennis-bg.png";

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

const Landing: React.FC<LandingProps> = ({
  heading,
  headingTwo,
  description,
  topCta,
  bottomCtas = [],
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 300);
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={tennis}
        alt="tennis"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <section className="relative min-h-screen">
        {/* LIGHT RAYS */}
        <div className="absolute inset-0">
          <LightRays className="absolute inset-0" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-screen flex-col px-6">
          <div className="flex flex-1 items-center justify-center">
            <div
              className={`mx-auto max-w-4xl flex flex-col items-center gap-8 text-center
                transition-all duration-700 ease-out
                motion-reduce:transition-none
                ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
            >
              {/* TOP CTA */}
              {topCta && (
                <div
                  className={`transition-all duration-700 delay-100
                    motion-reduce:transition-none
                    ${
                      mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                >
                  <InteractiveHoverButton
                    onClick={topCta.onClick}
                    className="text-sm font-semibold"
                  >
                    {topCta.label}
                  </InteractiveHoverButton>
                </div>
              )}

              {/* HEADING */}
              <h1
                className={`text-balance text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl
                  transition-all duration-700 delay-200
                  motion-reduce:transition-none
                  ${
                    mounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
              >
                <span className="text-white font-bold block">
                  {heading}
                </span>
                {headingTwo && (
                  <span className="block italic text-white/80 font-light mt-2">
                    {headingTwo}
                  </span>
                )}
              </h1>

              {/* DESCRIPTION */}
              <p
                className={`max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl
                  transition-all duration-700 delay-300
                  motion-reduce:transition-none
                  ${
                    mounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
              >
                {description}
              </p>

              {/* BOTTOM CTAs */}
              {bottomCtas.length > 0 && (
                <div
                  className={`mt-6 flex flex-col gap-4 sm:flex-row
                    transition-all duration-700 delay-500
                    motion-reduce:transition-none
                    ${
                      mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                >
                  {bottomCtas.map((cta, index) => {
                    const isSecondary = cta.variant === "secondary";

                    return (
                      <a
                        key={index}
                        href={cta.href}
                        onClick={cta.onClick}
                        className={`inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold
                          transition-colors duration-200
                          ${
                            isSecondary
                              ? "border border-white text-white hover:bg-white/80 hover:text-black"
                              : "bg-white text-black hover:bg-white/70"
                          }`}
                      >
                        {cta.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
