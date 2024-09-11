import React from "react";

const Paragraph = ({ content }) => {
  return (
    <p className=" indent-1.5 tracking-wider md:text-base	text-sm">
      {" "}
      {content}{" "}
    </p>
  );
};

export default Paragraph;
