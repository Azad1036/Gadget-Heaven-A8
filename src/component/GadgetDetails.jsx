import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  AddStoreWishlist,
  addToStoreAddCard,
  getStoreAddToCard,
  getStoreWishlist,
} from "../Utiliti/Utiliti";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AddCardContext, WishlistContext } from "../layout/MainLayout";

const GadgetDetails = () => {
  const addToCard = useContext(AddCardContext);
  const wishToCard = useContext(WishlistContext);

  const { productId } = useParams();
  const data = useLoaderData();

  const findId = data.find((id) => id.product_id === productId);

  const {
    product_title,
    product_image,
    price,
    rating,
    description,
    specification,
    product_id,
  } = findId;

  const handleClickAddToCard = (id) => {
    addToStoreAddCard(id);
  };
  const handleClickWishlist = (id) => {
    AddStoreWishlist(id);
  };

  // Add To Card Length
  const cardLength = getStoreAddToCard();
  addToCard(cardLength);

  // Wish To Card Length
  const wishLength = getStoreWishlist();
  wishToCard(wishLength);

  return (
    <div className="min-h-screen md:mb-34 lg:mb-0 mb-48">
      <div className="bg-[#9538E2] md:p-10 p-6 md:pb-28 lg:mb-96 relative">
        <div className="flex justify-center items-center md:gap-3 gap-2 flex-col text-white">
          <h1 className="font-bold text-2xl">Product Details</h1>
          <p className="lg:w-4xl text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="flex justify-center  ">
          <div className="flex justify-center items-center absolute lg:top-40">
            <div className="flex flex-row w-[800px] bg-white shadow-lg rounded-2xl overflow-hidden">
              {/* Image Placeholder */}
              <div className="w-1/3  flex justify-center items-center">
                <div className="h-full py-6 pl-6">
                  <img
                    className="h-full w-full rounded-2xl border object-cover"
                    src={product_image}
                    alt=""
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-2/3 pr-6 pl-8 py-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {product_title}
                </h2>
                <p className="text-xl text-[#09080FCC] mb-4">Price: ${price}</p>

                {/* Stock Status */}
                <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded-full mb-4">
                  In Stock
                </div>

                {/* Description */}
                <p className=" text-sm text-[#09080F99] mb-4">{description}</p>

                {/* Specifications */}
                <div className="">
                  <h3 className="font-bold mb-2">Specification:</h3>
                  <ul className="text-sm text-[#09080F99] list-disc pl-5 mb-2">
                    {specification.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <h1>Rating ⭐ </h1>
                  <div>{rating}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    onClick={() => handleClickAddToCard(product_id)}
                    className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-xl"
                  >
                    Add To Cart
                  </Link>
                  <Link
                    onClick={() => handleClickWishlist(product_id)}
                    className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-4 py-2 rounded-xl"
                  >
                    ♥
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default GadgetDetails;
