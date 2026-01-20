import React from "react";
import { ExternalLink } from "lucide-react";
import Navbar from "../../components/navbars/HomeNavbar";
import Footer from "../../components/Footer";

type PolicySectionProps = {
  title: string;
  children: React.ReactNode;
};

const PolicySection: React.FC<PolicySectionProps> = ({ title, children }) => (
  <section className="mb-12 last:mb-0">
    <h2 className="mb-4 text-lg font-semibold text-[#72382E] sm:text-xl">
      {title}
    </h2>
    <div className="space-y-4 text-sm leading-relaxed text-secondary/80 sm:text-base">
      {children}
    </div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background pt-24 sm:pt-28">
        <main className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <div className="rounded-3xl bg-white/90 p-6 shadow-custom sm:p-10 md:p-14">
            {/* Header */}
            <header className="mb-12 text-center">
              <h1 className="mb-3 text-2xl font-semibold text-[#72382E] sm:text-3xl">
                Privacy Policy
              </h1>
              <p className="text-sm text-secondary/60 sm:text-base">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>

            <PolicySection title="Our Commitment to Your Privacy">
              <p>
                At Paia Health, we take your privacy seriously. This policy
                explains how we collect, use, and protect your information when
                you use our services, including our email communications and
                health tools.
              </p>
            </PolicySection>

            <PolicySection title="Information We Collect">
              <ul className="list-disc space-y-2 pl-5">
                <li>Email address (for guide delivery and optional updates)</li>
                <li>Health assessment responses (stored anonymously)</li>
                <li>Marketing preferences (opt-in only)</li>
              </ul>
            </PolicySection>

            <PolicySection title="How We Use Your Information">
              <ul className="list-disc space-y-2 pl-5">
                <li>Deliver requested resources</li>
                <li>Send educational content if opted in</li>
                <li>Improve our services and assessments</li>
              </ul>
            </PolicySection>

            <PolicySection title="Children’s Privacy">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-secondary">
                    Parental consent:
                  </span>{" "}
                  Recommended for users under 16.
                </li>
                <li>
                  <span className="font-medium text-secondary">
                    Data protection:
                  </span>{" "}
                  Responses are stored anonymously.
                </li>
                <li>
                  <span className="font-medium text-secondary">
                    Educational use:
                  </span>{" "}
                  Not a substitute for medical advice.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Cookies and Tracking Technologies">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-secondary">Analytics:</span>{" "}
                  Improve site performance
                </li>
                <li>
                  <span className="font-medium text-secondary">
                    Preferences:
                  </span>{" "}
                  Remember navigation settings
                </li>
              </ul>
              <p>You can control cookies via your browser settings.</p>
            </PolicySection>

            <PolicySection title="Third-Party Services">
              <p>
                We work with trusted providers for analytics, email delivery, and
                secure storage. These providers comply with UK GDPR standards.
              </p>
            </PolicySection>

            <PolicySection title="Regulatory Compliance">
              <p>
                This policy complies with the UK GDPR and Data Protection Act
                2018. If you have concerns, you may contact the ICO:
              </p>
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[#72382E] hover:underline"
              >
                Visit ICO Website <ExternalLink className="h-4 w-4" />
              </a>
            </PolicySection>

            <PolicySection title="Your Rights">
              <ul className="list-disc space-y-2 pl-5">
                <li>Access your data</li>
                <li>Update preferences</li>
                <li>Request deletion</li>
                <li>Opt out of marketing</li>
              </ul>
            </PolicySection>

            {/* Contact CTA */}
            <div className="mt-16 rounded-2xl bg-[#72382E]/5 p-6 text-center sm:p-8">
              <h2 className="mb-2 text-lg font-semibold text-secondary sm:text-xl">
                Questions About Your Privacy?
              </h2>
              <p className="mb-6 text-sm text-secondary/80 sm:text-base">
                Contact us anytime if you have questions about your data or
                privacy.
              </p>
              <a
                href="mailto:hello@paiahealth.com"
                className="inline-flex items-center justify-center rounded-full bg-[#72382E] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5f2e27]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
