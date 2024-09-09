import { Link } from "react-router-dom";
import AddCart from "./AddCart";

const Singleproduct = ({ prod }) => {
  // Modify the image path for the minified version
  const minified = prod.image_url.replace("./images", "./images/mini");

  return (
    <div className="md:p-4 border-solid border-[1px] border-black rounded-lg shadow-lg">
      <Link
        to={`/single/${prod.id}`}
        className="block w-full h-[200px] md:h-[250px] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${minified})`,
        }}
      >
        <img
          src={prod.image_url}
          alt={prod.name}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg hidden md:block"
        />
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start p-4 mt-2">
        <div className="flex flex-col md:w-3/4">
          <h2 className="text-lg md:text-xl font-semibold">{prod.name}</h2>
          <p className="text-base md:text-lg font-bold text-gray-800">
            {prod.price}
          </p>
        </div>

        <div className="flex justify-end w-full md:ml-4 mt-2 md:mt-0">
          <AddCart v={prod} />
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
