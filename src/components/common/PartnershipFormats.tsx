import React from 'react'
import { Airplay, CreditCard, CalendarCheck} from "lucide-react"

const ctaCards = [
    {
      Icon: Airplay,
      title: "Paid Pilot Access",
      description:
        "A limited-term engagement to test uptake and value with a smaller segment of your audience before a full rollout.",
      bestFor: "Innovation Teams & HR Pilots",
      bg: "bg-white text-black border border-primary/5",
    },
    {
      Icon: CreditCard,
      title: "Licensed Seats",
      description:
        "Bulk purchase of annual licenses for your employees or members. Simple distribution via access codes.",
      bestFor: "Benefits Platforms & Corporate Wellness",
      bg: "bg-black text-white relative overflow-hidden shadow-2xl shadow-primary/20",
      special: true,
    },
    {
      Icon: CalendarCheck,
      title: "Event + Access",
      description:
        "Combine a digital access launch with a virtual or in-person workshop led by Paia experts on women's wellness patterns.",
      bestFor: "Community Launches & Conferences",
      bg: "bg-background-light text-primary border border-primary/5",
    },
  ]

const PartnershipFormats = () => {
  return (
    <div>
       {/* Partnership Formats Cards */}
       <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
              Partnership Formats
            </h2>
            <p className="text-text-subtle max-w-2xl mx-auto">
              Flexible models designed to meet your organization's specific
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ctaCards.map(({ Icon, title, description, bestFor, bg, special }, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl flex flex-col items-start h-full transition-all duration-300 ${
                  special
                    ? "relative overflow-hidden"
                    : "card-hover"
                } ${bg}`}
              >
                <div
                  className={`p-3 rounded-xl mb-6 shadow-sm transition-colors ${
                    special ? "relative z-10 bg-white/10 backdrop-blur-sm border border-white/10" : ""
                  }`}
                >
                  <Icon
                    className={`text-3xl ${special ? "text-white" : "text-primary"}`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    special ? "text-white relative z-10" : "text-black"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mb-8 flex-grow leading-relaxed ${
                    special ? "text-white/80 relative z-10" : "text-text-subtle"
                  }`}
                >
                  {description}
                </p>
                <div
                  className={`w-full pt-6 border-t ${
                    special ? "border-white/20 relative z-10" : "border-primary/5"
                  }`}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      special ? "text-white/60" : "text-text-subtle/70"
                    }`}
                  >
                    Best for
                  </span>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      special ? "text-white" : "text-primary"
                    }`}
                  >
                    {bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnershipFormats
