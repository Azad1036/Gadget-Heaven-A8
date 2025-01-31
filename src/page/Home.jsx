import { Outlet, useLoaderData } from "react-router-dom";
import Gadgets from "../component/Gadgets";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const category = useLoaderData();

  return (
    <div className="lg:max-w-6xl w-[94%] mx-auto md:mt-72 mt-56 mb-24">
      <Helmet>
        <title>Gadget Heaven || Home Page</title>
      </Helmet>
      <h1 className="md:text-4xl text-2xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex gap-5 mt-10">
        <div>
          <Gadgets category={category}></Gadgets>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
