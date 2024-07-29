/* eslint-disable react/prop-types */
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { getDBITEMS } from "./home/helper";

const Layout = ({
  children,
  CustomNavbar,
  showCustomNavbar = false
}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const set_up = async () => {
      const [_courses] = await getDBITEMS();
      setCourses(_courses);
    }

    set_up();
  }, [])

  return (
    <>
      <Topbar />
      {showCustomNavbar ? <CustomNavbar /> : <Navbar courses={courses} />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;