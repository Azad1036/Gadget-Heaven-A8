import {
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  Area,
} from "recharts";
import { getStoreAddToCard } from "../Utiliti/Utiliti";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const data = useLoaderData();
  const [rechartUse, setRechartUse] = useState([]);

  useEffect(() => {
    const rechart = getStoreAddToCard();
    const filterByRechart = data.filter((card) =>
      rechart.includes(card.product_id)
    );
    setRechartUse(filterByRechart);
  }, [data]);

  return (
    <div>
      {/* Dynamic Tilte */}
      <Helmet>
        <title>Gadget Heaven || Statistics Page</title>
      </Helmet>
      {/* Text */}
      <div className="bg-[#9538E2] md:p-10  ">
        <div className="flex justify-center items-center md:gap-3 gap-2 flex-col text-white">
          <h1 className="font-bold text-2xl">Statistics</h1>
          <p className="lg:w-4xl text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* Ui Dynamic */}
      <div className=" w-[90%] mx-auto mb-10">
        {rechartUse.length > 0 ? (
          <div className="shadow-2xl rounded-2xl p-5 bg-white">
            <ResponsiveContainer width="100%" height={600}>
              <ComposedChart
                width={500}
                height={400}
                data={rechartUse}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="product_title" />
                <YAxis />
                <Legend />
                <Area dataKey="price" fill="#9538E226" stroke="#9538E226" />

                <Bar dataKey="price" barSize={20} fill="#9538E2" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="font-black text-4xl h-80 ">
            <p className="flex justify-center h-full items-center">
              Data is not available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
