import BreadCrumb from "../../components/breadcrumb";
import Layout from "../layout";
import Navbar from "../shop/components/navbar";
import ContactDetails from "./components/contact-details";
import ContactForm from "./components/contact-form";

const Contact = () => {
  return (
    <Layout showCustomNavbar={true} CustomNavbar={Navbar}>
      <BreadCrumb />

      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
        </div>
        <div className="row px-xl-5">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;