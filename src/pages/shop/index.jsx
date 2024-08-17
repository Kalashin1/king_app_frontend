import Layout from "../layout";
import BreadCrumb from "../../components/breadcrumb";
import Navbar from "./components/navbar";
// import ShopSidebar from "./components/shop-sidebar";
import Products from "./components/products";
import { useEffect, useState } from "react";
import { getDBITEMS } from "../home/helper";
import { SCREENS } from "../../navigation/constants";

const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const setup = async () => {
      const [_courses, _plans] = await getDBITEMS()
      const _products = [
        ..._plans.map((plan) => ({ ...plan, type: "plan" })),
        ..._courses.map((course) => ({ ...course, type: "course" }))
      ].sort((a, b) => a.title > b.title)
      console.log("products", _products);
      setProducts(_products)
    }

    setup();
  }, [])
  return (
    <Layout showCustomNavbar={true} CustomNavbar={Navbar}>
      <BreadCrumb
        currentPage="Shop"
        firstLevel={{ text: "Products", link: SCREENS.SHOP }}
      />
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          {/* <ShopSidebar /> */}
          <div className="col-lg-12 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search by name" />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                      Sort by
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">Popularity</a>
                      <a className="dropdown-item" href="#">Best Rating</a>
                    </div>
                  </div>
                </div>
              </div>
              {products.map((product, index) => (
                <Products key={index} {...product} />
              ))}
              { }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;