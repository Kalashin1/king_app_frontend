import {
  Link
} from 'react-router-dom';
import { SCREENS } from '../navigation/constants';

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          {/* <a href="" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">D</span>ubeke</h1>
          </a> */}
          {/* <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p> */}
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Fred Omojole Crescent. Gbagada, Lagos State.<br />Plot 146 Agip Federal Housing Estate, Rumueme, Port Harcourt</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>dubekeconsultz@gmail.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+234-816-614-4108</p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <Link to="/" className="text-dark mb-2"><i className="fa fa-angle-right mr-2"></i>Home</Link>
                <Link to={SCREENS.SHOP} className="text-dark mb-2"><i className="fa fa-angle-right mr-2"></i>Courses</Link>
                <Link className="text-dark mb-2" to={SCREENS.SHOP}><i className="fa fa-angle-right mr-2"></i>Plans</Link>
                {/* <Link className="text-dark mb-2" to="/"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</Link> */}
                <Link className="text-dark mb-2" to={SCREENS.CONTACT}><i className="fa fa-angle-right mr-2"></i>Contact</Link>
              </div>
            </div>
            
            {/* <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
              <form action="">
                <div className="form-group">
                  <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                    required="required" />
                </div>
                <div>
                  <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-dark">
            &copy;
            Distributed By <Link to="/" target="_blank">Dubeke</Link>
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          <img className="img-fluid" src="img/payments.png" alt="" />
        </div>
      </div>
    </div>
  )
};

export default Footer;