import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = ({ setIsOpen, isOpen }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Shop" },
    { name: "Contact", link: "../#contact" },
  ];

  const [user, setUser] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu
  const isUser = useSelector((state) => state.userReducer.current);

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to={"/"}>
        <h2 className="text-2xl font-bold">Sweet Dreams</h2>
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {links.map((v, i) => (
          <li key={i} className="hover:text-gray-700 transition duration-300">
            <Link to={v.link}>{v.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <button onClick={() => setUser(!user)}>
          <img src="/user.png" alt="user" className="h-7 w-7" />
        </button>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src="/add-to-cart.png" alt="cart" className="h-8 w-8" />
        </button>
        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden focus:outline-none"
        >
          <img src="/menu.png" alt="menu" className="h-7 w-7" />
        </button>
      </div>

      {/* User Dropdown */}
      {user && (
        <ul className="absolute right-5 top-full p-4 z-10 bg-white rounded-lg border-[1px] border-solid border-black">
          {!Boolean(isUser) ? (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/account"}>Account</Link>
            </li>
          )}
        </ul>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute z-20 right-0 top-full border border-solid border-black rounded-lg  bg-white py-4 shadow-md md:hidden flex flex-col gap-4">
          {links.map((v, i) => (
            <li key={i} className="px-6 hover:bg-gray-500">
              <Link to={v.link}>{v.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
