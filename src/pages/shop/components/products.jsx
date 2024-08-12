import { Link } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";
import { ShopContext } from "../../layout";
import { useContext } from "react";
import { updateCartItemAmount } from "../helper";
/* eslint-disable react/prop-types */
const Products = ({
  price,
  title,
  thumbnail,
  id,
  type
}) => {
  const {
    cart,
    updateCart
  } = useContext(ShopContext)
  return (

    <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src={thumbnail} alt="" />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{title}</h6>
          <div className="d-flex justify-content-center">
            <h6>${price}</h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          {type === "plan" && (<Link to={SCREENS.PLAN(id)} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>)}
          {type === "course" && (<Link to={SCREENS.COURSE(id)} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>)}
          <button onClick={() => {
            const product = cart?.find((item) => item.id === id);
            if (product)
              updateCart(
                updateCartItemAmount(
                  cart,
                  product,
                  "INCREAMENT"
                )
              );
            else {
              updateCart([...(cart ?? []), { title, price, id, thumbnail, amount: 1 }]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...(cart ?? []), { title, price, id, thumbnail, amount: 1 }])
              );
            }
          }} className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
        </div>
      </div>
    </div>
  )
};

export default Products;