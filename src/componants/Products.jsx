import axios from "axios";
import { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";

const Pagination = ({ num, currentPage, onPageChange }) => {
  const pages = [...Array(num).keys()];
  return (
    <div className="pagination flex justify-center py-6 gap-2 md:gap-4">
      {pages.map((v, i) => (
        <button
          className={`border border-solid border-black px-2 py-1 md:px-3 md:py-2 rounded-md ${
            currentPage === i ? "bg-gray-300" : ""
          }`}
          key={i}
          onClick={() => onPageChange(i)}
        >
          {v + 1}
        </button>
      ))}
    </div>
  );
};

const Products = ({ start, end }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const getProducts = async () => {
    try {
      const res = await axios.get("./data.json");
      setProducts(res.data.bakery.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  const prodsNumber = end - start;
  let pagesNumber = Math.ceil(prodsNumber / itemsPerPage);

  if (start === 0) {
    start = currentPage * itemsPerPage;
    end = start + itemsPerPage;
    pagesNumber = Math.ceil(products.length / itemsPerPage);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 lg:px-10 gap-4 md:gap-6">
        {products?.length > 0 ? (
          products
            .slice(start, end)
            .map((v) => <Singleproduct key={v.id} prod={v} />)
        ) : (
          <h1 className="col-span-full text-center text-xl">
            IS COOKING ....{" "}
          </h1>
        )}
      </div>
      {pagesNumber > 1 && (
        <Pagination
          num={pagesNumber}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};

export default Products;
