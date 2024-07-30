import { useContext } from "react";
import { ShopContext } from "../../layout";
import { updateCartItemAmount } from "../../shop/helper";

const CartItems = () => {
  const {
    cart,
    updateCart
  } = useContext(ShopContext)
  return (
    <div className="col-lg-8 table-responsive mb-5">
      <table className="table table-bordered text-center mb-0">
        <thead className="bg-secondary text-dark">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {cart && cart.map((product, index) => (
            <tr key={index}>
              <td className="align-middle"><img src={product.thumbnail} alt="" style={{ width: '50px' }} /> {product.title}</td>
              <td className="align-middle">${product.price}</td>
              <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus" onClick={() => {
                      updateCart(
                        updateCartItemAmount(
                          cart,
                          product,
                          "DECREMENT"
                        )
                      );
                      localStorage.setItem("cart", JSON.stringify(cart));
                    }}>
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input type="text" className="form-control form-control-sm bg-secondary text-center" value={product.amount} />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus" onClick={() => {
                      updateCart(
                        updateCartItemAmount(
                          cart,
                          product,
                          "INCREAMENT"
                        )
                      );
                      localStorage.setItem("cart", JSON.stringify(cart));
                    }}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">${product.price * product.amount}</td>
              <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default CartItems;