import React from "react";

const Button = ({ content, type }) => {
  return (
    <button
      type={type}
      className="md:py-2 md:px-4 py-1 px-2 rounded-full border-black border-solid border-[1px] "
    >
      {content}
    </button>
  );
};

export default Button;
