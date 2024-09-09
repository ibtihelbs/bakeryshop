import H1 from "./H1";
import Button from "./Button";
import Paragraph from "./Paragraph";

const More = () => {
  return (
    <section className="min-h-screen py-8 grid gap-8">
      <div className="m-auto text-center">
        <H1 content={"Because Regret Tastes "} />
        <H1 content={"Worse Than a Missed Pastry"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-black border-solid rounded-lg max-w-[600px] m-auto">
        <img
          src="https://media.giphy.com/media/xUOrw3Cefz0PcZrLFu/giphy.gif?cid=790b7611jskyqklvnqhjboo6oqzf0xb9eksvdbi07inyovyu&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="cake"
          className="rounded-lg h-[300px] w-full object-cover border border-black border-solid"
        />
        <div className="grid gap-4">
          <Paragraph
            content={`Ready to make a deliciously bad decision? We thought so. Go ahead, place
        an order. We promise not to judge (much). But hey, if you decide to skip
        out on these sweet treats, don’t worry – we’re sure you’ll be thinking
        about them at 2 a.m. when your midnight cravings hit.`}
          />
          <span className="block">
            <Button content={"Order Now"} type={"button"} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default More;
