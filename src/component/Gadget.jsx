import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Gadget = () => {
  const data = useLoaderData();

  const { category } = useParams();

  const [gadgetItem, setgadgetItem] = useState([]);

  useEffect(() => {
    if (category === "Al Product") {
      setgadgetItem(data);
    } else {
      const filterByCategory = data.filter(
        (categories) => categories.category === category
      );
      setgadgetItem(filterByCategory);
    }
  }, [data, category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {gadgetItem.map((item) => (
        <Card key={item.product_id} item={item}></Card>
      ))}
    </div>
  );
};

export default Gadget;
