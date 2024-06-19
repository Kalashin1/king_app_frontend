import Layout from "../layout";
import BreadCrumb from "../../components/breadcrumb";
import Navbar from "./components/navbar";
import ShopSidebar from "./components/shop-sidebar";
import Products from "./components/products";

const Shop = () => {
  return (
    <Layout showCustomNavbar={true} CustomNavbar={Navbar}>
      <BreadCrumb />
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <ShopSidebar />
          <Products />
        </div>
      </div>
    </Layout>
  );
};

export default Shop;