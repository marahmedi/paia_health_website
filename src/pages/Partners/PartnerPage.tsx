import Banner from "../../components/common/Banner";
import Footer from "../../components/Footer";
import PartnersLanding from "../../components/common/partner/PartnersLanding";
import HowPartnershipsWork from "../../components/common/partner/HowPartnershipsWork";
import WhyPaia from "../../components/common/partner/WhyPaia";
import PartnershipFormats from "../../components/common/partner/PartnershipFormats";
import Cta from "../../components/common/Cta";

export default function PartnerPage() {
  return (
    <>
      <PartnersLanding
        heading="A wellness and engagement companion designed for women."
        description=" Paia is a women's wellness intelligence companion that uses light, optional check-ins across cycle, mood, movement, nutrition and symptoms — then helps you connect the dots into calm, hormone-aware patterns."
     
        bottomCtas={[
          { label: "Discuss Partnerships" },
          { label: "For Partners", variant: "secondary", href: "/partners" },
        ]}
      />

      <Banner />
      <HowPartnershipsWork/>
      <WhyPaia/>
      <PartnershipFormats/>
      <Cta/>
      <Footer />
    </>
  );
}
