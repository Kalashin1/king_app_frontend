import { useContext, useMemo } from "react";
import { ShopContext } from "../../layout";
import { formatAsCurrency } from "../../helper";

const CartSummary = () => {

  const {
    cart,
  } = useContext(ShopContext);

  const total = useMemo(() => {
    const subtotals = cart?.map((item) => item.amount * parseFloat(item.price));
    let total = 0;
    subtotals?.length
      ? (total = subtotals.reduce((acc, item) => acc + item))
      : (total = 0);
    return total;
  }, [cart]);
  return (
    <div className="col-lg-4">
      <form className="mb-5" action="">
        <div className="input-group">
          <input type="text" className="form-control p-4" placeholder="Coupon Code" />
          <div className="input-group-append">
            <button className="btn btn-primary">Apply Coupon</button>
          </div>
        </div>
      </form>
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
        </div>
        <div className="card-body">
          {/* <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">Subtotal</h6>
            <h6 className="font-weight-medium">$150</h6>
          </div> */}
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Items</h6>
            <h6 className="font-weight-medium">{formatAsCurrency(total, 'USD')}</h6>
          </div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">Total</h5>
            <h5 className="font-weight-bold">{formatAsCurrency(total, 'USD')}</h5>
          </div>
          <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;