import React from "react";
import {
  CheckCircle,
  Droplet,
  Smile,
  Leaf,
  Activity,
  HeartHandshake,
  Flower,
} from "lucide-react";
import runners from "../../assets/runners-bg.png";

const HowPaiaWorks = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HOW PAIA WORKS */}
      <section className="relative py-28 px-6 bg-[#72382E]">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                How Paia <span className="italic">Works</span>
              </h2>
              <p className="text-xl font-light text-white/90">
                A simple flow to understand your body better.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step
              icon={CheckCircle}
              title="1. Choose what matters"
              text="Customize your dashboard. Only track the signals that feel relevant to your current journey."
            />
            <Step
              icon={Activity}
              title="2. Log lightly"
              text="Quick, optional check-ins that take seconds, not minutes. No judgement for missed days."
            />
            <Step
              icon={Flower}
              title="3. See the patterns"
              text="Paia connects the dots between your cycle, food, and mood to reveal your unique rhythm."
            />
          </div>
        </div>
      </section>

      {/* HOLISTIC TRACKING */}
      <section className="relative py-24 px-6">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={runners}
            alt="runners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Holistic Signal Tracking
            </h2>
            <p className="max-w-2xl mx-auto font-light text-white/90">
              We look at the whole picture because your body is an interconnected
              system.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Signal icon={Droplet} label="Cycle & Phase" />
            <Signal icon={Smile} label="Mood & Energy" />
            <Signal icon={Leaf} label="Food & Gut" />
            <Signal icon={Activity} label="Movement" />
            <Signal icon={HeartHandshake} label="Symptoms" />
          </div>

          <div className="mt-12 text-center">
            <p className="inline-flex items-center gap-2 text-sm font-medium bg-white/90 px-5 py-2.5 rounded-full text-[#461111]">
              <HeartHandshake className="w-4 h-4" />
              Includes specialized insights for PCOS, Endometriosis, and
              Perimenopause.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

type StepProps = {
  icon: React.ElementType;
  title: string;
  text: string;
};

const Step = ({ icon: Icon, title, text }: StepProps) => (
  <div className="group p-8 rounded-3xl bg-white/80 hover:bg-white transition-all duration-300 hover:shadow-xl">
    <div className="w-14 h-14 mb-8 rounded-full bg-[#ebeae6] flex items-center justify-center group-hover:bg-[#461111] transition-colors">
      <Icon className="w-6 h-6 text-[#461111] group-hover:text-white" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-[#461111]">{title}</h3>
    <p className="leading-relaxed text-[#461111]/90">{text}</p>
  </div>
);

type SignalProps = {
  icon: React.ElementType;
  label: string;
};

const Signal = ({ icon: Icon, label }: SignalProps) => (
  <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/80 hover:bg-white transition-shadow hover:shadow-md">
    <Icon className="w-7 h-7 text-[#461111]" />
    <span className="text-sm font-semibold text-[#461111]">{label}</span>
  </div>
);

export default HowPaiaWorks;
