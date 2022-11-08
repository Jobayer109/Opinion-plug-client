import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <div className="navbar lg:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FaBars className="text-2xl text-blue-800"></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact font-mono text-xl dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <Link
                className=" hover:border hover:border-red-600 text-xl hover:bg-white text-blue-800"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className=" hover:border hover:border-red-600 text-xl hover:bg-white text-blue-800"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className=" hover:border hover:border-red-600 text-xl hover:bg-white text-blue-800"
                to="/myReview"
              >
                My Review
              </Link>
            </li>
            <li>
              <Link
                className=" hover:border hover:border-red-600 text-xl hover:bg-white text-blue-800"
                to="/addService"
              >
                Add Service
              </Link>
            </li>
            <li>
              <Link
                className=" hover:border hover:border-red-600 text-xl hover:bg-white text-blue-800"
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className=" hover:border hover:border-red-600 text-xl hover:bg-white text-blue-800"
                to="/profile"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img className="h-6" src={logo} alt="" />
      </div>
      <div className="navbar-end">
        <div className="avatar mr-4">
          <div className="w-12 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <Link to="/login">
          <button className="border px-4 py-2 font-bold bg-blue-800 hover:bg-white translate duration-500 ease-in hover:text-black hover:border-black text-white rounded-sm">
            Sign in
          </button>
        </Link>
        <button className="border px-4 py-2 font-bold bg-red-600 hover:bg-white translate duration-500 ease-in hover:text-black hover:border-black text-white rounded-sm">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
