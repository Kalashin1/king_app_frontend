/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";

const Navbar = ({
  courses
}) => {
  return (
    <div className="container-fluid">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: 1 }}>
            <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
              <div className="nav-item dropdown">
                <Link to={SCREENS.SHOP} className="nav-link" data-toggle="dropdown">Courses <i className="fa fa-angle-down float-right mt-1"></i></Link>
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  {courses && courses.map((course, index) => (
                    <Link to={SCREENS.COURSE(course.id)} className="dropdown-item" key={index}>{course.title}</Link>
                  ))}
                </div>
              </div>
              <Link to={SCREENS.SHOP} className="nav-item nav-link">Plans</Link>
              {/* <a href="" className="nav-item nav-link">Jeans</a>
              <a href="" className="nav-item nav-link">Swimwear</a>
              <a href="" className="nav-item nav-link">Sleepwear</a>
              <a href="" className="nav-item nav-link">Sportswear</a>
              <a href="" className="nav-item nav-link">Jumpsuits</a>
              <a href="" className="nav-item nav-link">Blazers</a>
              <a href="" className="nav-item nav-link">Jackets</a>
              <a href="" className="nav-item nav-link">Shoes</a> */}
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <Link to={SCREENS.HOME} className="text-decoration-none">
              <img width={80} height={80} src="/images/logo.svg" />
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <Link to={SCREENS.HOME} className="nav-item nav-link">Home</Link>
                <Link to={SCREENS.SHOP} className="nav-item nav-link active">Plans</Link>
                <Link to={SCREENS.SHOP} className="nav-item nav-link">Courses</Link>
                <Link to={SCREENS.CONTACT} className="nav-item nav-link">Contact</Link>
                {/* <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                    <a href="checkout.html" className="dropdown-item">Checkout</a>
                  </div>
                </div> */}
              </div>
              {/* <div className="navbar-nav ml-auto py-0">
                <a href="" className="nav-item nav-link">Login</a>
                <a href="" className="nav-item nav-link">Register</a>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;