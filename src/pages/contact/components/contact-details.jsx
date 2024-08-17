const ContactDetails = () => {
  return (
    <div className="col-lg-5 mb-5">
      <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
      <p>Leave us a message by using the contact form. We would like to hear from you and your feedback would be appreciated.</p>
      <div className="d-flex flex-column mb-3">
        <h5 className="font-weight-semi-bold mb-3">Head Office</h5>
        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Fred Omojole Crescent. Gbagada, Lagos State.</p>
        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>dubekeconsultz@gmail.com</p>
        <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+234-816-614-4108</p>
      </div>
      <div className="d-flex flex-column">
        <h5 className="font-weight-semi-bold mb-3">
          Rivers Branch
        </h5>
        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Plot 146 Agip Federal Housing Estate, Rumueme, Port Harcourt</p>
        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>dubekeconsultz@gmail.com</p>
        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+234-816-614-4108</p>
      </div>
    </div>
  );
};

export default ContactDetails;