/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SCREENS } from "../navigation/constants";
const Categories = ({
  courses,
  plans
}) => {

  const category_array = [{ text: 'Plans', image: '/images/PHOTO-2024-11-17-10-57-49.jpg', amount: plans.length }, { text: 'Courses', image: '/images/PHOTO-2024-11-17-10-57-49.jpg', amount: courses.length }];

  const Category = ({
    text,
    image,
    // amount
  }) => {
    return (
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
          {/* <p className="text-right">{amount} {String(text).toLowerCase()}</p> */}
          <Link to={SCREENS.SHOP} className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src={image} alt="" />
          </Link>
          <h5 className="font-weight-semi-bold m-0">{text}</h5>
        </div>
      </div>
    )
  }
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Our Services</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {category_array.map((category, index) => (
          <Category {...category} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Categories;