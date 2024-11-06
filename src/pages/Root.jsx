import React, { useState } from "react";
import Navbar from "../componants/Navbar";
import { Outlet } from "react-router-dom";
import Cart from "../componants/Cart";

const Root = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="noise"></div>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen == true ? <Cart /> : ""}
      <Outlet />
    </>
  );
};

export default Root;
