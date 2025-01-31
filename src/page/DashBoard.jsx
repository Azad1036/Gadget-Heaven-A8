import { createContext, useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getStoreAddToCard, getStoreWishlist } from "../Utiliti/Utiliti";
import { Helmet } from "react-helmet-async";

export const CardAddedContext = createContext([]);
export const WishListContext = createContext([]);

const DashBoard = () => {
  const data = useLoaderData();
  const [addTocard, setAddToCard] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const addToCards = getStoreAddToCard();

    const Wishlists = getStoreWishlist();

    const displayAddToCardlist = data.filter((cards) =>
      addToCards.includes(cards.product_id)
    );

    const displayWishList = data.filter((cards) =>
      Wishlists.includes(cards.product_id)
    );

    setAddToCard(displayAddToCardlist);
    setWishList(displayWishList);
  }, [data]);

  return (
    <div>
      {/* Dynamic Tilte */}
      <Helmet>
        <title>Gadget Heaven || DashBoard Page</title>
      </Helmet>
      {/* Text */}
      <div className="bg-[#9538E2] p-10">
        <div className="flex justify-center items-center gap-3 flex-col text-white">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <p className="w-4xl text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        {/* Card link */}
        <div className="flex justify-center gap-4 mt-5">
          <NavLink
            className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
            to={"cardAdded"}
          >
            Card
          </NavLink>
          <NavLink
            to={"wishlistAdded"}
            className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
          >
            Wishlist
          </NavLink>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <WishListContext.Provider value={wishList}>
          <CardAddedContext.Provider value={addTocard}>
            <Outlet />
          </CardAddedContext.Provider>
        </WishListContext.Provider>
      </div>
    </div>
  );
};

export default DashBoard;
