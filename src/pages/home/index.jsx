import Layout from "../layout";
import Feature from "../../components/feature";
import Categories from "../../components/categories";
import Products from "../../components/products";

import { useEffect } from "react";
import { useState } from "react";
import { getDBITEMS } from "./helper";


const Home = () => {


  const [courses, setCourses] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const set_up = async () => {
      const [_courses, _plans] = await getDBITEMS()
      setCourses(_courses)
      setPlans(_plans)
    }

    set_up();
  }, [])

  return (
    <Layout>
      <Feature />
      <Categories courses={courses} plans={plans} />
      <Products courses={courses} />
    </Layout>
  )
}

export default Home;