const XxxlText = ({ content, style }) => {
  return (
    <h1
      className={`md:text-[156px] text-center tracking-[-10px] leading-[60px] md:leading-none   text-6xl ${style}`}
    >
      {content}
    </h1>
  );
};

export default XxxlText;
