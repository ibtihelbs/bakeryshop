import { motion } from "framer-motion";

const CircularSpinner = ({ children, width, textStyle, degree }) => {
  const textEl = children.props.children || children.props.content;
  const toArr = textEl.split("");

  const fraction = (degree || 180) / toArr.length;
  return (
    <motion.div
      className="relative  flex items-center justify-center rounded-full border-3 border-current"
      style={{
        height: `${width}px`,
        width: `${width}px`,
      }}
      animate={{ rotate: 360 }} // Rotate the entire circle
      transition={{
        duration: 10, // Full rotation time
        ease: "linear",
        repeat: Infinity, // Infinite rotation
      }}
    >
      <div className="absolute w-full h-full">
        {toArr.map((v, i) => (
          <span
            className="absolute"
            key={i}
            style={{
              transform: `rotate(${fraction * i}deg)`,
              transformOrigin: `0 ${width / 2}px`,
              top: 0,
              left: "50%",
              color: "inherit", // Adjust text color as needed
              ...textStyle,
            }}
          >
            {v}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default CircularSpinner;
