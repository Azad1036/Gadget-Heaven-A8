import { Outlet, useLoaderData } from "react-router-dom";
import Gadgets from "../component/Gadgets";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const category = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto mt-72 mb-24">
      <Helmet>
        <title>Gadget Heaven || Home Page</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex gap-5 mt-10">
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
