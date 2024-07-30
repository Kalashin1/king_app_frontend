import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb";
import Layout from "../layout";
import Navbar from "../shop/components/navbar";
import ProductDescription from "./components/product-description";
import ProductImageCarousel from "./components/product-image-carousel";
// import ProductTab from "./components/product-tab";
import { useEffect, useState } from "react";
import { getPlanById } from "./helper";

const Product = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState();

  useEffect(() => {
    const run_setup = async () => {
      const [error, _plan] = await getPlanById(id)
      if (error) {
        alert("error fetching plan");
        console.log(error)
      }

      if (_plan) {
        setPlan(_plan);
      }
    }

    run_setup();
  }, [id])
  return (
    <Layout showCustomNavbar={true} CustomNavbar={Navbar}>
      <BreadCrumb />
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <ProductImageCarousel images={[plan?.thumbnail]} />
          <ProductDescription description={plan?.description} price={plan?.price} title={plan?.title} />
        </div>
        {/* <div className="row px-xl-5">
          <div className="col">
            <ProductTab />
          </div>
        </div> */}
      </div>
    </Layout>
  );
}

export default Product;