import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-sm">
      <div className=" h-full container mx-auto flex justify-between items-center px-4">
        <div>
          <Logo w={90} h={60} />
        </div>
        <div className="flex justify-center items-center  bg-gray-100">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search product here..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 ">
          <div>
            <FaUserCircle className="w-10 h-10 cursor-pointer text-gray-500" />
          </div>
          <div className="flex items-center">
            <FaShoppingCart className="w-10 h-10 cursor-pointer text-gray-500" />
            <div className="relative -top-3 left-1">
              <p className="text-gray-500 bg-red-400 rounded-full px-1 text-2xl font-bold -ml-2">
                0
              </p>
            </div>
            <Link to="/login">
              <button className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
