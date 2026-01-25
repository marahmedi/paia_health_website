import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tennis from "../../assets/backgrounds/tennis-bg.png";
import { useDownloadLink } from "../../lib/useDownloadLink";

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
  const download = useDownloadLink();
  const hasCustomCtas = bottomCtas.length > 0;

  const getCtaClasses = (variant?: LandingCTA["variant"]) =>
    `inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full px-10 text-lg font-semibold transition ${
      variant === "secondary"
        ? "border border-white text-white hover:bg-white/10"
        : "bg-white text-black hover:bg-white/80"
    }`;

  const topCtaClass =
    "inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-medium text-white backdrop-blur";

  const renderTopCta = () => {
    if (!topCta) return null;

    if (topCta.href) {
      if (topCta.href.startsWith("/")) {
        return (
          <Link to={topCta.href} onClick={topCta.onClick} className={topCtaClass}>
            {topCta.label}
          </Link>
        );
      }

      return (
        <a href={topCta.href} onClick={topCta.onClick} className={topCtaClass}>
          {topCta.label}
        </a>
      );
    }

    return (
      <button type="button" onClick={topCta.onClick} className={topCtaClass}>
        {topCta.label}
      </button>
    );
  };

  const renderCta = (cta: LandingCTA, index: number) => {
    const className = getCtaClasses(cta.variant);

    if (cta.href) {
      if (cta.href.startsWith("/")) {
        return (
          <Link key={index} to={cta.href} onClick={cta.onClick} className={className}>
            {cta.label}
          </Link>
        );
      }

      return (
        <a key={index} href={cta.href} onClick={cta.onClick} className={className}>
          {cta.label}
        </a>
      );
    }

    return (
      <button
        key={index}
        type="button"
        onClick={cta.onClick}
        className={className}
      >
        {cta.label}
      </button>
    );
  };

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
              {renderTopCta()}

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
                {hasCustomCtas ? (
                  bottomCtas.map(renderCta)
                ) : (
                  <>
                    <a
                      href={download.href}
                      className={getCtaClasses("primary")}
                    >
                      {download.label}
                    </a>
                    <Link to="/partners" className={getCtaClasses("secondary")}>
                      Partner With Us
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;

