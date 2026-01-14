import React from "react"
import { Key, Users, PieChart, Gem } from "lucide-react"

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
]

const HowPartnershipsWork = () => {
  return (
    <section className="py-24 px-6 bg-background-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="block mb-3 text-xs font-bold uppercase tracking-wider text-primary">
            How Partnerships Work
          </span>
          <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-primary">
            Simple, access-based partnership — no integrations required.
          </h2>
          <p className="text-lg text-text-subtle leading-relaxed">
            We've removed the technical friction. Launch a premium women's
            wellness benefit in days, not months.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="p-8 h-full rounded-3xl bg-surface-light border border-primary/5 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-background-light text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-primary">{title}</h3>
              <p className="text-sm text-text-subtle leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowPartnershipsWork
