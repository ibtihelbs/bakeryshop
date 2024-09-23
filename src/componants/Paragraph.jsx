import React from "react";

const Paragraph = ({ content, style }) => {
  return (
    <p
      className={`indent-1.5 font-bold tracking-wider md:text-base	text-sm ${style}`}
    >
      {" "}
      {content}{" "}
    </p>
  );
};

export default Paragraph;
