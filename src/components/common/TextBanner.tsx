import { useEffect, useRef, useState } from "react";
import phone from "../../assets/screenshots/screenshot.png";

/* ---------------------------
   Lightweight in-view hook
---------------------------- */
const useInViewOnce = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const TextBanner = () => {
  const { ref, inView } = useInViewOnce(0.25);

  return (
    <section ref={ref} className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — TEXT */}
        <div
          className={`
            flex bg-white
            px-6 py-12
            sm:px-10 sm:py-14
            lg:px-14 lg:py-16
            xl:px-20 xl:py-20
            transition-all duration-1000
            [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            motion-reduce:transition-none
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <div className="mx-auto max-w-2xl lg:text-left">
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-medium leading-tight text-black">
              Most wellness apps track everything…{" "}
              <span className="block opacity-80">
                but explain{" "}
                <span className="italic font-semibold text-[#69474E]">
                  very little.
                </span>
              </span>
            </h2>

            {/* Body */}
            <p className="hidden md:block mt-5 text-xl sm:text-2xl leading-relaxed text-black/70">
              Siloed apps and over-tracking can lead to overwhelm without
              clarity. You input endless data points, but rarely get the “so
              what?” in return.
            </p>

            {/* Emphasis */}
            <p
              className={`
                md:mt-32 pt-10
                text-3xl sm:text-4xl font-serif text-black
                transition-all duration-1000 delay-200
                [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                motion-reduce:transition-none
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              Paia helps women{" "}
              <span className="italic text-[#69474E]">track less</span> and{" "}
              <span className="italic text-[#69474E]">
                understand more.
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT — PHONE */}
        <div
          className={`
            relative flex items-start justify-center
            bg-[#72382E] overflow-hidden
            transition-all duration-1000 delay-300
            [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            motion-reduce:transition-none
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div
            className="
              relative
              mt-12 sm:mt-14 lg:mt-10
              h-[45vh] sm:h-[50vh] lg:h-[65vh]
              w-full
              flex justify-center
            "
          >
            <img
              src={phone}
              alt="Paia app screenshot"
              className="
                h-full
                w-auto
                max-w-none
                object-cover
                translate-y-6
                lg:translate-y-20
              "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;
