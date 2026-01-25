import { Check } from "lucide-react";
import bg from "../../../assets/backgrounds/blue-orange-bg.png";
import image from "../../../assets/woman-writing.png";

const WhyPaia = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT — TEXT */}
          <div className="flex-1">
            <h2 className="mb-10 text-3xl md:text-4xl font-semibold text-[#461111]">
              Why Partners Choose Paia
            </h2>

            <div className="flex flex-col gap-8">
              {[
                {
                  title: "Light-touch, low-operational overhead",
                  text: "No complex IT projects. Launch and onboard users effortlessly.",
                },
                {
                  title: "High emotional wellbeing value",
                  text: "Deepens engagement through genuine, compassionate support.",
                },
                {
                  title: "Women-specific health perspective",
                  text: "Tailored intelligence that speaks directly to women's lived experiences.",
                },
                {
                  title: "Privacy-first anonymised insights",
                  text: "Respect user trust while gaining macro-level understanding.",
                },
                {
                  title: "Suitable for pilots or phased programmes",
                  text: "Flexible structuring allows for testing and scaling at your pace.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 items-start">
                  {/* Tick */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Check className="h-5 w-5 text-[#461111]" />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#85494A]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="hidden lg:flex flex-1 justify-center">
            <img
              src={image}
              alt="Woman writing"
              className="max-w-md w-full rounded-3xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPaia;
