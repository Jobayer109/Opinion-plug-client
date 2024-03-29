import React, { useContext } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { AuthContext } from "../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        localStorage.clear();
      })
      .then((error) => {});
  };

  return (
    <div className="navbar lg:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FaBars className="text-2xl text-blue-800"></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact text-lg dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-60"
          >
            {user?.email ? (
              <>
                <li>
                  <Link
                    className="  text-lg hover:bg-red-500 hover:text-white text-blue-800"
                    to="/myReviews"
                  >
                    My Review
                  </Link>
                </li>
                <li>
                  <Link
                    className="  text-lg hover:bg-red-500 hover:text-white text-blue-800"
                    to="/addService"
                  >
                    Add Service
                  </Link>
                </li>

                <li>
                  <Link
                    className="  text-lg hover:bg-red-500 hover:text-white text-blue-800"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="  text-lg hover:bg-red-500 hover:text-white text-blue-800"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="  text-lg hover:bg-red-500 hover:text-white text-blue-800"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="  text-lg hover:bg-red-500 hover:text-white text-blue-800"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/">
          <img className="h-6 object-contain" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end">
        {user?.photoURL && (
          <div className="avatar mr-4 hidden sm:block md:block lg:block">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
        )}

        {user?.email ? (
          <>
            <Link to="/login">
              <button
                onClick={handleSignOut}
                className="border px-4 py-2 font-medium bg-red-600 hover:bg-white translate duration-300 ease-in hover:text-black hover:border-black text-white rounded-sm hidden sm:block md:block lg:block"
              >
                Sign out
              </button>
            </Link>
            <Link onClick={handleSignOut} to="/login">
              <FaSignOutAlt className="sm:hidden md:hidden lg:hidden text-2xl text-red-500" />
            </Link>
          </>
        ) : (
          <Link to="/login">
            <button className="border px-4 py-2 font-medium bg-red-500 hover:bg-white translate duration-300 ease-in hover:text-black hover:border-black text-white rounded-sm">
              Sign in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
