/* eslint-disable react/prop-types */
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({
  children,
  CustomNavbar,
  showCustomNavbar = false
}) => {
  return (
    <>
      <Topbar />
      {showCustomNavbar ? <CustomNavbar /> : <Navbar />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;