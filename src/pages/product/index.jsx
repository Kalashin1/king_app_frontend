import BreadCrumb from "../../components/breadcrumb";
import Layout from "../layout";
import Navbar from "../shop/components/navbar";
import ProductDescription from "./components/product-description";
import ProductImageCarousel from "./components/product-image-carousel";
import ProductTab from "./components/product-tab";

const Product = () => {
  return (
    <Layout showCustomNavbar={true} CustomNavbar={Navbar}>
      <BreadCrumb />
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <ProductImageCarousel />
          <ProductDescription />
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <ProductTab />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;