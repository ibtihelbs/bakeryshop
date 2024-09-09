import H1 from "./H1";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url(./hero_mini.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          width: "100%",
          margin: "auto",
        }}
        className="rounded-3xl relative"
      >
        <img
          loading="lazy"
          src="./hero.jpg"
          alt="hero"
          className="rounded-3xl object-cover h-full w-full border-black border-[5px] p-1 border-double"
        />
        <div className="text-white  text-center font-bold absolute z-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <h2> Welcome to sweet dreams </h2>
          <H1 content={"Where Your Cravings Come to Life "} />
          <h2 className="text-right -translate-y-[130%] ">(Or So We Hear)!</h2>
          <Paragraph
            content={`You’re here because your cravings won, and your doctor hasn’t caught on yet. But hey, who’s counting pastries anyway? `}
          />
          <Link
            className="py-2 px-4 mt-6 rounded-full border border-solid border-white"
            to={"/shop"}
          >
            {" "}
            {"Buy Now"}{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
