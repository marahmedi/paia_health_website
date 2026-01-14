import React from "react";
import { ExternalLink } from "lucide-react";

type PolicySectionProps = {
  title: string;
  children: React.ReactNode;
};

const PolicySection: React.FC<PolicySectionProps> = ({ title, children }) => (
  <section className="mb-10 last:mb-0">
    <h2 className="mb-4 text-[20px] font-bold text-secondary md:text-[24px]">
      {title}
    </h2>
    <div className="space-y-4 text-secondary/80 text-[14px] md:text-[16px]">
      {children}
    </div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-28 md:pt-32">
      <main className="mx-auto max-w-4xl px-4 pb-16">
        <div className="rounded-[34px] bg-white/80 p-6 shadow-custom md:p-12">
          {/* Title */}
          <header className="mb-10 text-center">
            <h1 className="mb-3 text-[24px] font-bold text-[#72382E] md:text-[32px]">
              Privacy Policy
            </h1>
            <p className="text-[14px] text-secondary/70 md:text-[16px]">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </header>

          <PolicySection title="Our Commitment to Your Privacy">
            <p>
              At Paia Health, we take your privacy seriously. This policy explains
              how we collect, use, and protect your information when you use our
              services, including our email communications and health tools.
            </p>
          </PolicySection>

          <PolicySection title="Information We Collect">
            <ul className="list-disc space-y-2 pl-6">
              <li>Email address (for guide delivery and optional updates)</li>
              <li>Health assessment responses (stored anonymously)</li>
              <li>Marketing preferences (opt-in only)</li>
            </ul>
          </PolicySection>

          <PolicySection title="How We Use Your Information">
            <ul className="list-disc space-y-2 pl-6">
              <li>Deliver requested resources</li>
              <li>Send educational content if opted in</li>
              <li>Improve our services and assessments</li>
            </ul>
          </PolicySection>

          <PolicySection title="Children’s Privacy">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Parental consent:</span>{" "}
                Recommended for users under 16.
              </li>
              <li>
                <span className="font-semibold">Data protection:</span>{" "}
                Responses are stored anonymously.
              </li>
              <li>
                <span className="font-semibold">Educational use:</span> Not a
                substitute for medical advice.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Cookies and Tracking Technologies">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Analytics:</span> Improve site
                performance
              </li>
              <li>
                <span className="font-semibold">Preferences:</span> Remember
                navigation settings
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
              This policy complies with the UK GDPR and Data Protection Act 2018.
              If you have concerns, you may contact the ICO:
            </p>
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-primary hover:underline"
            >
              Visit ICO Website <ExternalLink className="h-4 w-4" />
            </a>
          </PolicySection>

          <PolicySection title="Your Rights">
            <ul className="list-disc space-y-2 pl-6">
              <li>Access your data</li>
              <li>Update preferences</li>
              <li>Request deletion</li>
              <li>Opt out of marketing</li>
            </ul>
          </PolicySection>

          {/* Contact */}
          <div className="mt-14 rounded-[24px] bg-primary/5 p-6 text-center md:p-8">
            <h2 className="mb-3 text-[18px] font-bold text-secondary md:text-[22px]">
              Questions About Your Privacy?
            </h2>
            <p className="mb-5 text-[14px] text-secondary/80 md:text-[16px]">
              Contact us anytime if you have questions about your data or privacy.
            </p>
            <a
              href="mailto:hello@paiahealth.com"
              className="inline-flex items-center justify-center rounded-full bg-[#72382E]  px-6 py-3 text-white transition hover:bg-[#72382E] /90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
