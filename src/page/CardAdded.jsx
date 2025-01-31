import { useContext, useEffect, useState } from "react";
import { CardAddedContext } from "./DashBoard";
import AddCard from "../component/AddCard";
import { removeAddToStoreCard } from "../Utiliti/Utiliti";
import { useNavigate } from "react-router-dom";

const CardAdded = () => {
  const navigate = useNavigate();

  const [addCard, setAddCard] = useState([]);

  const addTocard = useContext(CardAddedContext);

  // Count Total Price
  const totalValue = addTocard.reduce(
    (current, card) => current + card.price,
    0
  );

  // Price Sort
  const handleClickSorting = (add) => {
    const sorting = [...add].sort((a, b) => b.price - a.price);
    setAddCard(sorting);
  };

  // Purchase To Product
  const handleClickPurchase = () => {
    document.getElementById("my_modal_5").showModal();
    removeAddToStoreCard();
  };

  const closeModal = () => {
    navigate("/");
  };

  // Sort Price Call Again Data
  useEffect(() => {
    setAddCard(addTocard);
  }, [addTocard]);

  return (
    <div>
      {/* Card Price */}
      <div className="md:flex md:flex-row flex-col justify-between my-5">
        <div>
          <p className="md:text-2xl text-base font-bold">Cart</p>
        </div>
        <div className="md:flex md:flex-row flex-col gap-5 items-center">
          <h1 className="md:text-2xl text-base  font-bold lg:mr-10 mr-2">
            Total cost: $ {totalValue}
          </h1>
          <button
            className="btn btn-outline"
            onClick={() => handleClickSorting(addTocard)}
          >
            Sort by Price
          </button>
          <button className="btn btn-primary" onClick={handleClickPurchase}>
            Purchase
          </button>
        </div>
        {/* Local Storage To Show Card*/}
      </div>
      <div className="flex flex-col gap-5 mb-5">
        {addCard.length === 0 ? (
          <div className="text-center font-black text-4xl">
            No Added Card Found
          </div>
        ) : (
          <>
            {addCard.map((cardlist) => (
              <AddCard cardlist={cardlist} key={cardlist.product_id} />
            ))}
          </>
        )}
      </div>
      {/* Modla */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn hidden"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-center mb-5">
            <img
              src="https://img.icons8.com/?size=100&id=Ru8wO4IxPlVM&format=png&color=000000"
              alt=""
            />
          </div>
          <h3 className="font-bold text-2xl text-center">
            Payment Successfully
          </h3>
          <p className="mt-6 text-center text-[#09080F99]">
            Thanks for purchasing.
          </p>
          <p className="text-center text-[#09080F99]">Total: ${totalValue}</p>
          <div className="modal-action" onClick={closeModal}>
            <form method="dialog" className="w-full rounded-2xl">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CardAdded;
