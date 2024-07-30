import Layout from "../layout";
import Navbar from "../shop/components/navbar";
import BreadCrumb from "../../components/breadcrumb";
import ProductImageCarousel from "../product/components/product-image-carousel";
import ProductDescription from "../product/components/product-description";
// import ProductTab from "../product/components/product-tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCourseById } from "./helper";
const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState()

  useEffect(() => {
    const getCourse = async () => {
      const [error, _course] = await getCourseById(id);

      if (error) {
        alert("error fetching course")
        console.log(_course);
      }

      if (_course) {
        setCourse(_course);
      }
    }

    getCourse()
  }, [id])

  console.log("course", course)

  return (
    <Layout showCustomNavbar={true} CustomNavbar={Navbar}>
      <BreadCrumb />
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <ProductImageCarousel images={[course?.thumbnail]} />
          <ProductDescription description={course?.description} price={course?.price} title={course?.title} />
        </div>
        {/* <div className="row px-xl-5">
          <div className="col">
            <ProductTab />
          </div>
        </div> */}
      </div>
    </Layout>
  )
}

export default Course;