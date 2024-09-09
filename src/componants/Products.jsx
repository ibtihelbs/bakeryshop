import axios from "axios";
import { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";

const Pagination = ({ num, currentPage, onPageChange }) => {
  const pages = [...Array(num).keys()];
  return (
    <div className="pagination flex justify-center py-6 gap-3">
      {pages.map((v, i) => (
        <button
          className={`border border-solid border-black px-3 py-2 rounded-md ${
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
    const res = await axios.get("http://localhost:3000/bakery");
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);
  const prodsNumber = end - start;
  let pagesNumber = Math.ceil(prodsNumber / itemsPerPage);

  if (start == 0) {
    start = currentPage * itemsPerPage;
    end = start + itemsPerPage;
    pagesNumber = Math.ceil(products.length / itemsPerPage);
  }

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 px-10 gap-5">
        {products.length > 0 ? (
          products
            .slice(start, end)
            .map((v) => <Singleproduct key={v.id} prod={v} />)
        ) : (
          <h1>IS COOKING .... </h1>
        )}
      </div>
      {pagesNumber > 1 ? (
        <Pagination
          num={pagesNumber}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      ) : null}
    </>
  );
};

export default Products;
