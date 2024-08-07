/* eslint-disable react/prop-types */
const ProductImageCarousel = ({
  images
}) => {
  return (
    <div className="col-lg-5 pb-5">
      <div id="product-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner border">

          {images && images.map((image, index) => (
            <div className="carousel-item active" key={index}>
              <img className="w-100 h-100" src={image} alt="Image" />
            </div>
          ))}

        </div>
        <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
          <i className="fa fa-2x fa-angle-left text-dark"></i>
        </a>
        <a className="carousel-control-next" href="#product-carousel" data-slide="next">
          <i className="fa fa-2x fa-angle-right text-dark"></i>
        </a>
      </div>
    </div>
  );
};

export default ProductImageCarousel;