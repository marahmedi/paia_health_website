import React from "react";
import { ShieldCheck, ArrowBigUp, Brain, Clock} from "lucide-react";

const PaiaFeelsDifferent = () => {
  return (
    <div>
      <section className="py-28 px-6 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 leading-[1.1]">
                Why Paia Feels Different
              </h2>
              <p className="text-text-muted mb-10 text-lg font-light">
                We built Paia because we were tired of apps that felt like
                medical charts or pink-washed calendars.
              </p>
              <button className="w-fit h-12 px-8 bg-white text-black font-bold rounded-full hover:bg-black/20 transition-colors shadow-lg">
                Join Early Access
              </button>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-text-main text-lg mb-3 flex items-center gap-2">
                  <ArrowBigUp className="text-primary" />
                  Light-input tracking
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Designed for real life, not perfect adherence. We value
                  consistency over intensity.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-text-main text-lg mb-3 flex items-center gap-2">
                  <Brain className="text-primary" />
                  Context not overwhelm
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  We explain 'why' you feel this way, gently, without dumping
                  raw data on you.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-text-main text-lg mb-3 flex items-center gap-2">
                  <Clock className="text-primary" />
                  Patterns over prescriptions
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  We help you find your own rhythm, not follow a rigid rule
                  book.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-text-main text-lg mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-primary" />
                  Privacy-safe design
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Your health data stays on your device. We believe your body is
                  your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaiaFeelsDifferent;
