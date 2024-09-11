import React from "react";

const H1 = ({ content, align }) => {
  return (
    <h1
      className={`w-full  md:text-5xl text-xl tracking-tighter ${
        align ? "text-center" : ""
      }`}
    >
      {" "}
      {content}{" "}
    </h1>
  );
};

export default H1;
