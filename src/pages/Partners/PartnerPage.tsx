import Landing from "../../components/common/Landing";
import Banner from "../../components/common/Banner";
import Footer from "../../components/Footer";

export default function PartnerPage() {
  return (
    <>
      <Landing
        heading="Light-input tracking. Meaningful Insights."
        description=" Paia is a women's wellness intelligence companion that uses light, optional check-ins across cycle, mood, movement, nutrition and symptoms — then helps you connect the dots into calm, hormone-aware patterns."
        topCta={{ label: "Accepting Early Access", href: "#waitlist" }}
        bottomCtas={[
          { label: "Join Waitlist"},
          { label: "For Partners", variant: "secondary", href: "/partners" },
        ]}
      />

      <Banner />
      <Footer />
    </>
  );
}
