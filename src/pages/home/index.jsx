import Layout from "../layout";
import Feature from "../../components/feature";
import Categories from "../../components/categories";
import Products from "../../components/products";

const Home = () => {
  return (
    <Layout>
      <Feature />
      <Categories />
      <Products />
    </Layout>
  )
}

export default Home;