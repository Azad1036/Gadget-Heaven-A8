import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { product_title, product_image, price, product_id } = item || {};
  return (
    <div className="card bg-white shadow-lg rounded-2xl">
      <figure className="h-56 p-5">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="px-5 pb-5 flex flex-col grow">
        <h2 className="text-xl font-medium">{product_title}</h2>
        <p className="text-[#09080F99] my-3">Price : {price} $</p>
        <div className="card-actions">
          <Link to={`/gadgetdetails/${product_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
