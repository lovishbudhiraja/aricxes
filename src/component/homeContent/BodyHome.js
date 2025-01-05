import Footer from "../footer/Footer";
import NavBar from "../headerNavLinks/NavBar";
import HeroBanner from "../heroBanner/HeroBanner";
import WelcomeToAgency from "../homeContent/WelcomeToAgency";
import Services from "../homeContent/market/Market";
import OurServices from "../homeContent/services/OurServices";
import WorkingProcess from "../homeContent/stratergy/WorkingProcess";
import ChooseUs from "../homeContent/whychoose/ChooseUs";

function BodyHome() {
  return (
    <>
      <HeroBanner />
      <WelcomeToAgency />
      <OurServices />
      <Services />
      <WorkingProcess />
      <ChooseUs />
    </>
  );
}

export default BodyHome;
