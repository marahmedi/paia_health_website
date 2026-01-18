import React from "react";
import { Airplay, CreditCard, CalendarCheck } from "lucide-react";

const ctaCards = [
  {
    Icon: Airplay,
    title: "Paid Pilot Access",
    description:
      "A limited-term engagement to test uptake and value with a smaller segment of your audience before a full rollout.",
    bestFor: "Innovation Teams & HR Pilots",
  },
  {
    Icon: CreditCard,
    title: "Licensed Seats",
    description:
      "Bulk purchase of annual licenses for your employees or members. Simple distribution via access codes.",
    bestFor: "Benefits Platforms & Corporate Wellness",
    featured: true,
  },
  {
    Icon: CalendarCheck,
    title: "Event + Access",
    description:
      "Combine a digital access launch with a virtual or in-person workshop led by Paia experts on women's wellness patterns.",
    bestFor: "Community Launches & Conferences",
  },
];

const PartnershipFormats = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
            Partnership Formats
          </h2>
          <p className="text-[#85494A] max-w-2xl mx-auto text-lg md:text-xl">
            Flexible models designed to meet your organization's specific needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ctaCards.map(
            ({ Icon, title, description, bestFor, featured }, idx) => (
              <div
                key={idx}
                className={`
                  rounded-3xl p-10 flex flex-col h-full min-h-[420px]
                  transition-all duration-300
                  ${
                    featured
                      ? "bg-[#85494A] shadow-2xl"
                      : "bg-[#F2E6E2]"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-6
                    ${
                      featured
                        ? "bg-[#F2E6E2]"
                        : "bg-[#85494A]"
                    }
                  `}
                >
                  <Icon
                    className={`
                      h-6 w-6
                      ${
                        featured
                          ? "text-[#85494A]"
                          : "text-[#F2E6E2]"
                      }
                    `}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`
                    text-xl font-bold mb-4
                    ${
                      featured ? "text-white" : "text-[#85494A]"
                    }
                  `}
                >
                  {title}
                </h3>

                <p
                  className={`
                    flex-grow leading-relaxed mb-10
                    ${
                      featured
                        ? "text-white/80"
                        : "text-[#85494A]/80"
                    }
                  `}
                >
                  {description}
                </p>

                {/* Footer */}
                <div
                  className={`
                    pt-6 border-t
                    ${
                      featured
                        ? "border-white/20"
                        : "border-[#85494A]/20"
                    }
                  `}
                >
                  <span
                    className={`
                      block text-xs font-bold uppercase tracking-wider
                      ${
                        featured
                          ? "text-white/60"
                          : "text-[#85494A]"
                      }
                    `}
                  >
                    Best for
                  </span>
                  <p
                    className={`
                      mt-1 text-sm font-semibold
                      ${
                        featured
                          ? "text-white"
                          : "text-[#85494A]"
                      }
                    `}
                  >
                    {bestFor}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnershipFormats;
