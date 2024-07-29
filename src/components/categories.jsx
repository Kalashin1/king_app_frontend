/* eslint-disable react/prop-types */
const Categories = ({
  courses,
  plans
}) => {

  const category_array = [{ text: 'Plans', image: '/images/pexels-karolina-grabowska-4491459.jpg', amount: plans.length }, { text: 'Courses', image: '/images/pexels-katerina-holmes-5905492.jpg', amount: courses.length }];

  const Category = ({
    text,
    image,
    amount
  }) => {
    return (
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
          <p className="text-right">{amount} {String(text).toLowerCase()}</p>
          <a href="" className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src={image} alt="" />
          </a>
          <h5 className="font-weight-semi-bold m-0">{text}</h5>
        </div>
      </div>
    )
  }
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Our Courses</span></h2>
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