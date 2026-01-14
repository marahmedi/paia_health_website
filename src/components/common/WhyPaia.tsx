import React from "react";
import { Check } from "lucide-react";
import phoneBg from "../assets/Homepage.png";
import { Iphone } from "../ui-components/Iphone";

const WhyPaia = () => {
  return (
    <section className="py-24 px-6 bg-background-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
              Why Partners Choose Paia
            </h2>
            <div className="flex flex-col gap-8">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-8 h-8 mt-0.5 rounded-full bg-white border border-primary/10 text-primary flex items-center justify-center shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">
                    Light-touch, low-operational overhead
                  </h4>
                  <p className="text-sm text-text-subtle mt-2 leading-relaxed">
                    No complex IT projects. Launch and onboard users
                    effortlessly.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-8 h-8 mt-0.5 rounded-full bg-white border border-primary/10 text-primary flex items-center justify-center shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">
                    High emotional wellbeing value
                  </h4>
                  <p className="text-sm text-text-subtle mt-2 leading-relaxed">
                    Deepens engagement through genuine, compassionate support.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-8 h-8 mt-0.5 rounded-full bg-white border border-primary/10 text-primary flex items-center justify-center shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">
                    Women-specific health perspective
                  </h4>
                  <p className="text-sm text-text-subtle mt-2 leading-relaxed">
                    Tailored intelligence that speaks directly to women's lived
                    experiences.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-8 h-8 mt-0.5 rounded-full bg-white border border-primary/10 text-primary flex items-center justify-center shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">
                    Privacy-first anonymised insights
                  </h4>
                  <p className="text-sm text-text-subtle mt-2 leading-relaxed">
                    Respect user trust while gaining macro-level understanding.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-8 h-8 mt-0.5 rounded-full bg-white border border-primary/10 text-primary flex items-center justify-center shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">
                    Suitable for pilots or phased programmes
                  </h4>
                  <p className="text-sm text-text-subtle mt-2 leading-relaxed">
                    Flexible structuring allows for testing and scaling at your
                    pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.5] w-[200px] px-20">
            <Iphone src={phoneBg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPaia;
