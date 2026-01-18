import React from "react";
import { Key, Users, PieChart, Gem } from "lucide-react";

const cards = [
  {
    Icon: Key,
    title: "Licensed Access",
    description:
      "Provide immediate access to your members via partner codes or licensed seat allocation.",
  },
  {
    Icon: Users,
    title: "Cohort Programs",
    description:
      "Optionally run cohort-based activation programs to drive community engagement.",
  },
  {
    Icon: PieChart,
    title: "Anonymised Themes",
    description:
      "Receive aggregated, privacy-first reports on high-level engagement themes.",
  },
  {
    Icon: Gem,
    title: "Paia Branding",
    description:
      "Paia remains fully branded, maintaining trust as an independent third-party companion.",
  },
];

const HowPartnershipsWork = () => {
  return (
    <section className="bg-background-light px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* LEFT — TEXT */}
        <div className="max-w-xl">
          <span className="block mb-4 text-lg md:text-xl uppercase tracking-wider text-[#AC8182]">
            How Partnerships Work
          </span>

          <h2 className="mb-6 text-3xl sm:text-5xl font-medium text-[#69474E] leading-tight">
            Simple, access-based partnership —
            <span className="block opacity-80">no integrations required.</span>
          </h2>

          <p className="text-lg text-[#69474E]/80 leading-relaxed">
            We've removed the technical friction. Launch a premium women’s
            wellness benefit in days, not months — without engineering work,
            data sharing, or platform dependencies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="
        rounded-2xl bg-[#69474E] p-6
        border border-white/10
        shadow-sm
        transition-all duration-300
        hover:shadow-md
      "
            >
              <div className="flex items-center justify-center w-11 h-11 mb-5 rounded-full bg-white/15 text-white">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mb-2 text-base font-semibold text-white">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-white/80">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowPartnershipsWork;
