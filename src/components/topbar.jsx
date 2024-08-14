import { useContext } from "react";
import { ShopContext } from "../pages/layout";
const Topbar = () => {

  const {
    cart,
    // updateCart
  } = useContext(ShopContext)
  console.log("cart", cart);
  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-2 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          {/* <div className="d-inline-flex align-items-center">
            <a className="text-dark" href="">FAQs</a>
            <span className="text-muted px-2">|</span>
            <a className="text-dark" href="">Help</a>
            <span className="text-muted px-2">|</span>
            <a className="text-dark" href="">Support</a>
          </div> */}
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            {/* <a className="text-dark px-2" href="">
              <i className="fab fa-facebook-f"></i>
            </a> */}
            <a className="text-dark px-2" href="https://x.com/Dubeke_Consultz">
              <i className="fab fa-twitter"></i>
            </a>
            {/* <a className="text-dark px-2" href="">
              <i className="fab fa-linkedin-in"></i>
            </a> */}
            {/* <a className="text-dark px-2" href="">
              <i className="fab fa-instagram"></i>
            </a> */}
            <a className="text-dark pl-2" href="https://www.youtube.com/@dubekeconsultz">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row align-items-center py-3 px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a href="" className="text-decoration-none">
            <img width={80} height={80} src="/images/logo.svg" />
          </a>
        </div>
        {/* <div className="col-lg-6 col-6 text-left">
          <form action="">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for products" />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
        </div> */}
        {/* <div className="col-lg-3 col-6 text-right">
          <a href="" className="btn border">
            <i className="fas fa-heart text-primary"></i>
            <span className="badge">0</span>
          </a>
          <Link to={SCREENS.CART} className="btn border">
            <i className="fas fa-shopping-cart text-primary"></i>
            <span className="badge">{cart.length}</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;