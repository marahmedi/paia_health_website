import React from "react";
import {
  Droplet,
  Smile,
  Leaf,
  Activity,
  HeartHandshake,
} from "lucide-react";
import runners from "../../assets/backgrounds/runners-bg.png";
import SignalCard from "./SignalCard";

type SignalItem = {
  icon: React.ElementType;
  label: string;
};

type Props = {
  inView: boolean;
};

const signals: SignalItem[] = [
  { icon: Droplet, label: "Cycle & Phase" },
  { icon: Smile, label: "Mood & Energy" },
  { icon: Leaf, label: "Food & Gut" },
  { icon: Activity, label: "Movement" },
  { icon: HeartHandshake, label: "Symptoms" },
];

const HolisticTrackingSection: React.FC<Props> = ({ inView }) => {
  return (
    <section className="relative px-6 py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={runners}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <header
          className={`mb-16 transition-all duration-1000
            [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white text-center md:text-left">
            Holistic Signal Tracking
          </h2>
        
        </header>

        {/* Signals Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {signals.map((signal, i) => (
            <div
              key={signal.label}
              className={`transition-all duration-900
                [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <SignalCard {...signal} />
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000
            [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-2 text-sm md:text-lg font-medium text-[#461111]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B0A1BF]">
              <HeartHandshake className="h-4 w-4 text-white" />
            </div>
            Includes insights for PCOS, Endometriosis, and Perimenopause
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticTrackingSection;
