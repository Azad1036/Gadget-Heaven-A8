import PropTypes from "prop-types";

const WishCard = ({ wishlist }) => {
  const { product_image, product_title, description, price } = wishlist;
  return (
    <div>
      <div className="flex gap-5 items-center bg-white border border-[#09080F1A] rounded-xl p-2 w-full mt-5">
        <div className="w-28 h-28  rounded-lg">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={product_image}
            alt=""
          />
        </div>

        <div className="flex justify-between  w-full items-center">
          <div>
            <h2 className="text-2xl text-[#09080F] font-semibold">
              {product_title}
            </h2>
            <p className="text-[#09080F99] py-1">
              <span className="font-bold text-[#09080F]">Description:</span>{" "}
              {description}
            </p>
            <p className=" text-[#09080FCC] font-semibold text-xl">
              Price: ${price}
            </p>
            <button className="btn btn-primary mt-0.5">Add To Card</button>
          </div>
          <div>
            <img
              className="w-10 text-[#FF0000]"
              src="https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=000000"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

WishCard.propTypes = {
  wishlist: PropTypes.object,
};

export default WishCard;
