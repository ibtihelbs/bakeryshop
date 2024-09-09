import Contact from "../componants/Contact";
import Hero from "../componants/Hero";
import Products from "../componants/Products";
import More from "../componants/More";
import XlText from "../componants/XlText";
import Paragraph from "../componants/Paragraph";
import { InfiniteSlider } from "../componants/InfiniteSlider";
import H1 from "../componants/H1";

const Home = () => {
  return (
    <div className="px-4 md:px-10">
      <Hero />

      <div>
        <InfiniteSlider>
          <XlText content={"Life’s Short, Eat the Cake First"} />
          <XlText content={"Life’s Short, Eat the Cake First"} />
        </InfiniteSlider>

        <div className="flex flex-col md:flex-row gap-4 max-w-[800px] m-auto">
          <div>
            <h2 className="text-xl md:text-2xl">
              We believe in living life with a little extra butter, a sprinkle
              of sarcasm, and a dash of "why not?"
            </h2>
            <Paragraph
              content={`We won’t tell you that our pastries
          are the best in town (even though they totally are), but we will say
          that if you miss out, your taste buds might never forgive you.
          Seriously, they're texting us right now.`}
            />
          </div>
          <img
            src="./eat.avif"
            alt="eat"
            className="w-full md:w-96 h-48 md:h-60 border-solid border rounded-lg border-black"
          />
        </div>
      </div>

      <div className="text-center mt-6">
        <XlText content={"Latest pastries"} />
      </div>

      <Products start={3} end={6} />

      <div className="my-10">
        <InfiniteSlider>
          <XlText content={"- A Guilty Pleasure in Every Bite"} />
          <XlText content={"- A Guilty Pleasure in Every Bite"} />
        </InfiniteSlider>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-[900px] m-auto">
          <img src="./no-bg/1.png" alt="croissant" className="mx-auto" />
          <div className="md:row-span-2 self-center p-4">
            <H1 content={"cakes so rich your bank account might get jealous"} />
            <Paragraph
              content={`We've got everything you need to
          make that cheat day worth it. And don’t even get us started on our
          cookies – they’re so good, they should come with a warning label (but
          we won’t do that because, well, life’s about risks, isn’t it?).`}
            />
          </div>
          <img src="./no-bg/2.png" alt="croissant" className="mx-auto" />
          <img src="./no-bg/3.png" alt="croissant" className="mx-auto" />
          <img src="./no-bg/4.png" alt="croissant" className="mx-auto" />
        </div>
      </div>

      <div className="text-center mt-6">
        <XlText content={"Hottest pastries"} />
      </div>

      <Products start={5} end={8} />

      <More />

      <Contact />
    </div>
  );
};

export default Home;
