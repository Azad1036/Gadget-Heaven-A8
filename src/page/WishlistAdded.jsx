import { useContext } from "react";
import WishCard from "../component/WishCard";
import { WishListContext } from "./DashBoard";

const WishlistAdded = () => {
  const wishlistCard = useContext(WishListContext);
  return (
    <div className="flex flex-col gap-5 mb-10">
      {wishlistCard.length === 0 ? (
        <div className="text-center font-black text-4xl">
          No Wishlist Card Found
        </div>
      ) : (
        <>
          {wishlistCard.map((wishlist) => (
            <WishCard wishlist={wishlist} key={wishlist.product_id} />
          ))}
        </>
      )}
    </div>
  );
};

export default WishlistAdded;
