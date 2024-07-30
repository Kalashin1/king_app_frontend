import BreadCrumb from "../../components/breadcrumb"
import Layout from "../layout"
import Navbar from "../shop/components/navbar"
import CartItems from "./components/cart-items"
import CartSummary from "./components/cart-summary"

const Cart = () => {


  return (
    <Layout showCustomNavbar={true} CustomNavbar={Navbar}>
      <BreadCrumb />

      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <CartItems />

          <CartSummary />
        </div>
      </div>
    </Layout>
  )
}

export default Cart