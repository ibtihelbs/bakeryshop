import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";
const AddCart = ({ v }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(
          addProduct({
            cart: v,
            price: parseFloat(v.price.replace(" TND", "")),
          })
        );
      }}
      className="border-solid border-[1px] px-2 py-1 text-[16px] border-black md:py-4 md:px-8 rounded-full hover:bg-red-400  "
    >
      add to cart
    </button>
  );
};

export default AddCart;
