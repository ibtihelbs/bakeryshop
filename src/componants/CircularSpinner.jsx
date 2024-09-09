import React from "react";

const CircularSpinner = ({ children }) => {
  const elements = children.props.content.split("");
  return (
    <div className="relative flex items-center justify-center">
      {/* Circle for the spinner */}
      <div className="rounded-full border-t-4 border-b-4 border-blue-500 w-32 h-32"></div>

      {/* Circular elements */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-32">
          {elements.map((element, index) => {
            const angle = (index / elements.length) * 360;
            return (
              <span
                key={index}
                className="absolute animate-spin-slow"
                style={{
                  transform: `rotate(${angle}deg) translate(40px) rotate(-${angle}deg)`,
                  transformOrigin: "center 0",
                }}
              >
                {element}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularSpinner;
