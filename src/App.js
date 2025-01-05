import NavBar from "./component/headerNavLinks/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import ApiContext from "./utils/DataContext";
import Loader from "./component/Loader";
import Footer from "./component/footer/Footer";
import BodyHome from "./component/homeContent/BodyHome";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CompanyInfo from "./component/contentPages/companyInfo/CompanyInfo";
import Error from "./component/contentPages/error/Error";
import ContactUs from "./component/contentPages/contact/ContactUs";
import OurServices from "./component/contentPages/ourservices/OurServices";
// import ModalBox from "./component/modalbox/ModalBox";

function App() {
  const [apiCall, setApiCall] = useState([]);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3333/data");
      setApiCall(response.data); // Only store the data part
      // console.log(response.data);
    } catch (error) {
      setApiError(error.response.data ? error.message : "This API has errors");
    } finally {
      setApiLoading(false);
    }
  };
  const AppComp = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppComp />,
      children: [
        {
          path: "/",
          element: <BodyHome />,
          errorElement: <Error />,
        },
        {
          path: "/about-us",
          element: <CompanyInfo />,
          errorElement: <Error />,
        },
        {
          path: `/`,
          element: <OurServices />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  if (apiLoading) {
    return <Loader />;
  }

  if (apiError) {
    return <div>Error: {apiError}</div>;
  }
  return (
    <>
      <ApiContext.Provider value={{ apiCall, apiError, apiLoading }}>
        <RouterProvider router={AppRouter} />
        {/* <ModalBox /> */}
      </ApiContext.Provider>
    </>
  );
}

export default App;
