import { ShieldCheck, ArrowBigUp, Brain, Clock} from "lucide-react";

const PaiaFeelsDifferent = () => {
  return (
    <div>
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl text-text-main mb-6 leading-[1.1] text-[#85494A] font-serif">
                Why Paia <span className="text-primary italic font-serif font-bold">Feels </span>Different
              </h2>
              <p className="text-text-muted mb-10 text-lg md:text-2xl font-normal text-[#85494A]">
                We built Paia because we were tired of apps that felt like
                medical charts or pink-washed calendars.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#F2E6E2] shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-[#461111] text-lg md:text-xl mb-3 flex items-center gap-2">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-[#B0A1BF] flex items-center justify-center">
                        <ArrowBigUp className="text-white w-5 h-5" />
                    </div>
                  Light-input tracking
                </h4>
                <p className="text-md md:text-lg text-[#AC8182] leading-relaxed font-medium">
                  Designed for real life, not perfect adherence. We value
                  consistency over intensity.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#F2E6E2] shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-[#461111] text-lg md:text-xl  mb-3 flex items-center gap-2">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-[#B0A1BF] flex items-center justify-center">
                        <Brain className="text-white w-5 h-5" />
                    </div>
                  Context not overwhelm
                </h4>
                <p className="text-md md:text-lg text-[#AC8182] leading-relaxed">
                  We explain 'why' you feel this way, gently, without dumping
                  raw data on you.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#F2E6E2] shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-[#461111] text-lg md:text-xl  mb-3 flex items-center gap-2">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-[#B0A1BF] flex items-center justify-center">
                        <Clock className="text-white w-5 h-5" />
                    </div>
                  Patterns over prescriptions
                </h4>
                <p className="text-md md:text-lg text-[#AC8182] leading-relaxed">
                  We help you find your own rhythm, not follow a rigid rule
                  book.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#F2E6E2] shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-[#461111] text-lg md:text-xl  mb-3 flex items-center gap-2">
                        <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-[#B0A1BF] flex items-center justify-center">
                        <ShieldCheck className="text-white w-5 h-5" />
                    </div>
                  Privacy-safe design
                </h4>
                <p className="text-md md:text-lg text-[#AC8182] leading-relaxed">
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
