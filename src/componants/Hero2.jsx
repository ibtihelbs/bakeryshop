import Paragraph from "./Paragraph";
import XxxlText from "./XxxlText";
import CircularSpinner from "./CircularSpinner";
import { Link } from "react-router-dom";
const Hero2 = () => {
  return (
    <section
      id="hero"
      className="md:mt-16 mt-4  w-[96%] m-auto  flex flex-col gap-4 "
    >
      <XxxlText content={"SWEET DREAMS"} style={"underline"} />
      <div className="flex justify-between order-2 md:order-none ">
        <Paragraph
          style={"max-w-96 "}
          content={`You’re here because your cravings won, and your doctor hasn’t caught on yet. But hey, who’s counting pastries anyway?`}
        />
        <Link
          className=" py-2 px-4 mt-4 inline-block md:mt-6 rounded-full border border-solid border-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
          to={"/shop"}
        >
          <div className=" relative cursor-pointer  h-[100px] w-[100px] border-black border border-solid rounded-[50%] ">
            <img
              src="arrow.png"
              alt="arrow"
              className=" w-10 absolute  -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            />
            <CircularSpinner
              width={100}
              textStyle={{ fontWeight: "bolder", fontFamily: "Yeseva One" }}
            >
              <h1>BUY NOW</h1>
            </CircularSpinner>
          </div>
        </Link>
      </div>
      <img
        src="./hero.jpg"
        alt="hero"
        className="m-auto border border-solid border-black w-full rounded-lg"
      />
    </section>
  );
};

export default Hero2;
