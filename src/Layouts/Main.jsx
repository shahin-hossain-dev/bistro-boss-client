import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Navbar/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
