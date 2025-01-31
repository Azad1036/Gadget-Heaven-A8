import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";
import Footer from "../component/Footer";
import { createContext, useState } from "react";

export const AddCardContext = createContext([]);
export const WishlistContext = createContext([]);

const MainLayout = () => {
  const [value, setValue] = useState(0);
  const [wish, setWish] = useState(0);

  const handleClickAddToCard = (id) => {
    if (id.length === 0) {
      setValue(0);
    }
    return setValue(id.length);
  };

  const handleClickWishlist = (id) => {
    if (id.length === 0) {
      setWish(0);
    }
    return setWish(id.length);
  };

  return (
    <div>
      <WishlistContext.Provider value={handleClickWishlist}>
        <AddCardContext.Provider value={handleClickAddToCard}>
          <Navber value={value} wish={wish} />
          <div className="min-h-[calc(100vh-271px)]">
            <Outlet />
          </div>
          <Footer />
        </AddCardContext.Provider>
      </WishlistContext.Provider>
    </div>
  );
};

export default MainLayout;
