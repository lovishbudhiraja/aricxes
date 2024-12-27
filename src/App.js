import Navbar from "./component/headerNavLinks/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import ApiContext from "./utils/DataContext";
import Loader from "./component/Loader";
import HeroBanner from "./component/heroBanner/HeroBanner";
import WelcomeToAgency from "./component/homeContent/WelcomeToAgency";
import Services from "./component/homeContent/market/Market";
import OurServices from "./component/homeContent/services/OurServices";
import WorkingProcess from "./component/homeContent/stratergy/WorkingProcess";
import ChooseUs from "./component/homeContent/whychoose/ChooseUs";
import Footer from "./component/footer/Footer";
// import ModalBox from "./component/modalbox/ModalBox";

function App() {
  const [apiCall, setApiCall] = useState([]);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3333/data");
      setApiCall(response.data); // Only store the data part
    } catch (error) {
      setApiError(error.response.data ? error.message : "This API has errors");
    } finally {
      setApiLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (apiLoading) {
    return <Loader />;
  }

  if (apiError) {
    return <div>Error: {apiError}</div>;
  }
  return (
    <>
      <ApiContext.Provider value={{ apiCall, apiError, apiLoading }}>
        <Navbar />
        <HeroBanner />
        <WelcomeToAgency />
        <OurServices />
        <Services />
        <WorkingProcess />
        <ChooseUs />
        <Footer />
        {/* <ModalBox /> */}
      </ApiContext.Provider>
    </>
  );
}

export default App;
