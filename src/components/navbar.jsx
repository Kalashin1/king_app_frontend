import { Link } from "react-router-dom";
import { SCREENS } from "../navigation/constants";

/* eslint-disable react/prop-types */
const Navbar = ({
  courses
}) => {

  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
            <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">Courses<i className="fa fa-angle-down float-right mt-1"></i></a>
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  {courses?.map((course, index) => (
                    <Link to={SCREENS.COURSE(course.id)} className="dropdown-item" key={index}>{course.title}</Link>
                  ))}
                </div>
              </div>
              <Link to={SCREENS.SHOP} className="nav-item nav-link">Plans</Link>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <img width={100} height={100} src="/images/logo.svg" />
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/shop" className="nav-item nav-link">Plans</Link>
                <Link to="/shop" className="nav-item nav-link">Courses</Link>
                {/* <Link to="/detail" className="nav-item nav-link">About Us</Link> */}
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>
              {/* <div className="navbar-nav ml-auto py-0">
                <a href="" className="nav-item nav-link">Login</a>
                <a href="" className="nav-item nav-link">Register</a>
              </div> */}
            </div>
          </nav>
          <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: '410px' }}>
                <img className="img-fluid" src="/images/pexels-karolina-grabowska-4491459.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: '700px' }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Building Plans</h3>
                    <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: '410px' }}>
                <img className="img-fluid" src="/public/images/pexels-katerina-holmes-5905492.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: '700px' }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Engineering Courses</h3>
                    <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
              <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                <span className="carousel-control-prev-icon mb-n2"></span>
              </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
              <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                <span className="carousel-control-next-icon mb-n2"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;