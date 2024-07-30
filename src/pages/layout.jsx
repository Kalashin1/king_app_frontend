/* eslint-disable react/prop-types */
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect, createContext } from "react";
import { getDBITEMS } from "./home/helper";

export const ShopContext = createContext({});

const Layout = ({
  children,
  CustomNavbar,
  showCustomNavbar = false
}) => {
  const [courses, setCourses] = useState([]);
  const [cart, updateCart] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const set_up = async () => {
      const [_courses] = await getDBITEMS();
      setCourses(_courses);
      updateCart(JSON.parse(localStorage.getItem("cart")) ?? []);
    }

    set_up();
  }, [])

  return (
    <>
      <ShopContext.Provider
        value={{
          cart,
          updateCart,
          products,
          setProducts,
        }}
      >
        <Topbar />
        {showCustomNavbar ? <CustomNavbar courses={courses} /> : <Navbar courses={courses} />}
        {children}
        <Footer />
      </ShopContext.Provider>
    </>
  );
};

export default Layout;