import Landing from "../../components/common/Landing";
import Footer from "../../components/Footer";
import HowPaiaWorks from "../../components/common/HowPaiaWorks";
import TextBanner from "../../components/common/TextBanner";
import PaiaFeelsDifferent from "../../components/common/PaiaFeelsDifferent";
import WomenOrPartner from "../../components/common/WomenOrPartner";

export default function HomePage() {
  return (
    <>
      <Landing
        heading="Light-input tracking."
        headingTwo="Meaningful Insights."
        description=" Paia is a women's wellness intelligence companion that uses light, optional check-ins across cycle, mood, movement, nutrition and symptoms — then helps you connect the dots into calm, hormone-aware patterns."
      />
      <TextBanner />
      <HowPaiaWorks />
      <PaiaFeelsDifferent />
      <WomenOrPartner />
      <Footer />
    </>
  );
}
