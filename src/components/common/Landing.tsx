import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tennis from "../../assets/backgrounds/tennis-bg.png";
import { useDownloadLink } from "../../lib/useDownloadLink";

type LandingProps = {
  heading: string;
  headingTwo?: string;
  description: string;
};

const Landing: React.FC<LandingProps> = ({
  heading,
  headingTwo,
  description,
}) => {
  const [mounted, setMounted] = useState(false);
  const download = useDownloadLink();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={tennis}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* MOBILE READABILITY OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 sm:hidden" />

      <section className="relative min-h-screen">
        <div className="relative z-10 flex min-h-screen flex-col px-6 pt-32">
          <div className="flex flex-1 items-center justify-center">
            <div
              className={`mx-auto max-w-5xl flex flex-col items-center gap-10 text-center
                transition-all duration-700 ease-out
                ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
            >
              {/* HEADING */}
              <h1 className="text-balance text-[2.25rem] font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {heading}
                {headingTwo && (
                  <span className="mt-2 block font-light italic text-white/80">
                    {headingTwo}
                  </span>
                )}
              </h1>

              {/* DESCRIPTION */}
              <p className="max-w-3xl text-white/90">
                {/* Mobile-short */}
                <span className="block sm:hidden text-base leading-relaxed">
                  Track less. Understand more.
                </span>

                {/* Desktop-full */}
                <span className="hidden sm:block text-lg sm:text-xl md:text-2xl leading-relaxed">
                  {description}
                </span>
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
                {/* PRIMARY */}
                <a
                  href={download.href}
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-white px-10 text-lg font-semibold text-black transition hover:bg-white/80"
                >
                  {download.label}
                </a>

                {/* SECONDARY */}
                <Link
                  to="/partners"
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white px-10 text-lg font-semibold text-white transition hover:bg-white/10"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;

