import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddCart from "../componants/AddCart";

const SingleProduct = () => {
  const id = useParams().id - 1;
  const [products, setProducts] = useState({});

  const getProducts = async () => {
    const res = await axios.get(`/data.json`);
    setProducts(res.data.bakery.products[id]);
  };

  useEffect(() => {
    getProducts();
    console.log(products, Boolean(products));
  }, []);

  return (
    <>
      {Boolean(products) ? (
        <div className="grid grid-cols-1 md:grid-cols-3  md:gap-7 p-5 md:p-20">
          {/* Image Section */}
          <img
            src={products.image_url}
            alt={products.name}
            className="h-[150px]  w-full md:h-[400px] md:w-[400px] object-cover rounded-lg border-black border-[1px] border-solid"
          />

          {/* Product Details Section */}
          <div className="md:col-span-2 flex flex-col md:gap-4 gap-2 rounded-lg p-5 md:p-11 border-black border-[1px] border-solid">
            <h1 className="text-xl md:text-3xl font-bold">{products.name}</h1>
            <p className="px-2 py-1 text-xs rounded-full border border-solid self-start border-black md:text-sm">
              {products.category}
            </p>
            <div className="flex justify-between md:order-3 items-center w-full md:w-[500px] mt-4">
              <h2 className="text-lg md:text-2xl font-semibold">
                {products.price}
              </h2>
              <AddCart v={products} />
            </div>
            <div className="flex flex-wrap gap-2">
              {products.tags?.map((tag, i) => (
                <span key={i} className="text-gray-600">
                  {" "}
                  {tag}{" "}
                </span>
              ))}
            </div>

            <p className="max-w-full md:max-w-72 text-sm md:text-base">
              {products.description}
            </p>

            {/* Price and Add to Cart */}
          </div>
        </div>
      ) : (
        <h1 className="text-center text-xl">Loading...</h1>
      )}
    </>
  );
};

export default SingleProduct;
