import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Activity,
  Flower,
} from "lucide-react";

import HolisticTrackingSection from "./HolisticTrackingSection";
import papaya from "../../assets/backgrounds/papaya-bg.png";

/* ---------------------------
   Lightweight in-view hook
---------------------------- */
const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
};

const HowPaiaWorks = () => {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -30% 0px",
  });

  return (
    <div ref={ref} className="w-full overflow-hidden">
      {/* HOW PAIA WORKS */}
      <section className="relative py-16 md:py-28 px-4 md:px-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${papaya})` }}
        />
        
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-[#72382E]/20" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* HEADER */}
          <div
            className={`mb-12 md:mb-20 transition-all duration-1000
              [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
              motion-reduce:transition-none
              ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
              How Paia <span className="italic">Works</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-white/90 max-w-xl">
              A simple flow to understand your body better.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`transition-all duration-1000
                  [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none
                  ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${i * 160}ms` }}
              >
                <Step {...step} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOLISTIC TRACKING */}
      <HolisticTrackingSection inView={inView} />
    </div>
  );
};

/* ---------------------------
   Data
---------------------------- */
const steps = [
  {
    icon: CheckCircle,
    title: "1. Choose what matters",
    text: "Customize your dashboard. Only track the signals that feel relevant to your current journey.",
  },
  {
    icon: Activity,
    title: "2. Log lightly",
    text: "Quick, optional check-ins that take seconds, not minutes. No judgement for missed days.",
  },
  {
    icon: Flower,
    title: "3. See the patterns",
    text: "Paia connects the dots between your cycle, food, and mood to reveal your unique rhythm.",
  },
];

/* ---------------------------
   UI Components
---------------------------- */
type StepProps = {
  icon: React.ElementType;
  title: string;
  text: string;
};

const Step = ({ icon: Icon, title, text }: StepProps) => (
  <div className="group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/90 hover:bg-white transition-all duration-300 hover:shadow-xl">
    <div className="mb-6 md:mb-8 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#ebeae6] transition-colors group-hover:bg-[#461111]">
      <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#461111] group-hover:text-white" />
    </div>
    <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-[#461111]">{title}</h3>
    <p className="text-sm md:text-base leading-relaxed text-[#461111]/90">{text}</p>
  </div>
);

export default HowPaiaWorks;