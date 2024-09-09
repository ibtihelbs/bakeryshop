import React from "react";

const H1 = ({ content, align }) => {
  return (
    <h1
      className={`w-full  text-5xl tracking-tighter ${
        align ? "text-center" : ""
      }`}
    >
      {" "}
      {content}{" "}
    </h1>
  );
};

export default H1;
