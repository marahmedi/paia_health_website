import React from "react";

const TextBanner = () => {
  return (
    <section className="py-24 px-6 bg-background-alt">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight font-display">
          Most wellness apps track everything —{" "}
          <span className="text-text-muted italic font-serif">
            but explain very little.
          </span>
        </h2>
        <p className="text-text-muted text-lg leading-relaxed font-light">
          Siloed apps and over-tracking can lead to overwhelm without clarity.
          You input endless data points, but rarely get the "so what?" in
          return.
        </p>
        <div className="py-6">
          <span className="inline-block relative text-2xl md:text-3xl text-primary font-serif italic">
            Paia helps women track less — and understand more.
            <svg
              className="absolute -bottom-2 left-0 w-full h-2 text-primary/20"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 200 9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00025 6.99997C25.7509 9.36111 159.544 1.77782 198 1"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;
