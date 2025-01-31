import { ShowError, ShowSuccess } from "./Toast";

// Add To Card list
const getStoreAddToCard = () => {
  const storelist = localStorage.getItem("addcard-list");
  if (storelist) {
    const storelists = JSON.parse(storelist);
    return storelists;
  } else {
    return [];
  }
};

const addToStoreAddCard = (id) => {
  const storelist = getStoreAddToCard();
  if (storelist.includes(id)) {
    ShowError(id);
  } else {
    storelist.push(id);
    const storeliststr = JSON.stringify(storelist);
    localStorage.setItem("addcard-list", storeliststr);
    ShowSuccess(id);
  }
};

const removeAddToStoreCard = () => {
  localStorage.removeItem("addcard-list");
};

export { addToStoreAddCard, getStoreAddToCard, removeAddToStoreCard };

// Wish To Card list
const getStoreWishlist = () => {
  const storelist = localStorage.getItem("wish-list");
  if (storelist) {
    const storelists = JSON.parse(storelist);
    return storelists;
  } else {
    return [];
  }
};

const AddStoreWishlist = (id) => {
  const storelist = getStoreWishlist();
  if (storelist.includes(id)) {
    ShowError(id);
  } else {
    storelist.push(id);
    const storeliststr = JSON.stringify(storelist);
    localStorage.setItem("wish-list", storeliststr);
    ShowSuccess(id);
  }
};

export { AddStoreWishlist, getStoreWishlist };
