import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navlinks = [
    {
      labe: "Home",
      link: "/",
    },
    {
      labe: "Books",
      link: "/books",
    },
    {
      labe: "Blogs",
      link: "/blogs",
    },
    {
      labe: "Contact",
      link: "/contact",
    },

    {
      labe: "About",
      link: "/about",
    },
  ];

  return (
    <div className="navbar justify-between container mx-auto">
      {/* Desktop View */}
      <div className="navbar hidden lg:flex">
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          BookNest
        </Link>
        <ul className="navbar justify-end menu menu-horizontal px-1 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <button className="btn btn-ghost text-xl">
          <FaHeart />
        </button>
        <button className="btn btn-ghost text-xl">
          <CiSearch />
        </button>
        <button className="btn btn-ghost text-xl">
          <MdAccountCircle />
        </button>
        <button className="btn btn-ghost text-xl">
          <FaShoppingCart />
        </button>
      </div>

      {/* Tablet View */}
      <div className="navbar justify-between hidden md:flex lg:hidden">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          BookNest
        </Link>
        <ul className="navbar-center menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="">
              About
            </Link>
          </li>
        </ul>
        <div className="navbar-end w-[80px] ml-[20px]">
          <button className="btn btn-ghost">
            <CiSearch className="" />
          </button>
          <button className="btn btn-ghost">
            <MdAccountCircle />
          </button>
          <button className="btn btn-ghost">
            <FaShoppingCart />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden md:hidden navbar">
        <button onClick={toggleSidebar} className="btn btn-ghost">
          {/* Hamburger Icon */}
          <RxHamburgerMenu />
        </button>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl navbar-center ml-12"
        >
          BookNest
        </Link>
        <button className="navbar-end">
          <FaShoppingCart />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-[100px] bg-base-200 shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="btn btn-square btn-ghost absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          {/* Close Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="menu p-4">
          {navlinks.map((d, i) => (
            <Link key={i} className="font-bold" to={d.link}>
              {d.labe}
            </Link>
          ))}
        </ul>
      </div>

      {/* Backdrop (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Navbar;