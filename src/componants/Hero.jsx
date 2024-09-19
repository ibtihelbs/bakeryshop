import CircularSpinner from "./CircularSpinner";
import H1 from "./H1";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";
import XlText from "./XlText";

const Hero = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url(./mini.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mt-4 flex md:flex-row flex-col  md:justify-center border-black border-[5px] p-1 border-double h-[85vh] md:h-[500px] w-full m-auto rounded-3xl relative"
      >
        <img
          loading="lazy"
          className="m-auto object-cover md:object-contain relative md:h-full md:max-w-[60%] w-full  z-30 "
          src="./hero1.png"
          alt="hero"
        />
        <div className="absolute top-0  w-full h-full px-4">
          <div>
            <h2 className="text-center text-lg md:text-2xl">
              Welcome to Sweet Dreams
            </h2>
            <div className="flex md:flex-row flex-col md:justify-between h-full w-full ">
              <XlText content={"Where Your  "} />
              <div className="relative z-50">
                <XlText content={" Cravings "} />
              </div>
            </div>
            <div className="flex w-full justify-between pb-4 pr-4 items-end absolute z-100 bottom-0 ">
              <div className="relative z-50 ">
                <XlText content={" Come "} />
                <XlText content={"to Life"} />
                <h2 className="text-sm md:text-xl  md:mt-2">
                  (Or So We Hear)!
                </h2>
              </div>
              <div className="w-1/3 pr-4 z-50">
                <div className="hidden md:block ">
                  <Paragraph
                    content={`You’re here because your cravings won, and your doctor hasn’t caught on yet. But hey, who’s counting pastries anyway?`}
                  />
                </div>
                <div className=" relative  -top-full  float-end h-[100px] w-[100px] border-black border border-solid rounded-[50%] ">
                  <img
                    src="arrow.png"
                    alt="arrow"
                    className=" w-10 absolute  -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                  />
                  <CircularSpinner width={100}>
                    <Link
                      className="  py-2 px-4 mt-4 inline-block md:mt-6 rounded-full border border-solid border-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
                      to={"/shop"}
                    >
                      BUY NOW
                    </Link>
                  </CircularSpinner>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
