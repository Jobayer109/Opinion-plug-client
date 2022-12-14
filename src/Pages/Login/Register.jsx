import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Contexts/AuthProvider";
import Spinner from "../Shared/Spinner";

const Register = () => {
  const { createUser, profile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        logOut();
        navigate("/login");
        profile(name, photoURL);
        form.reset();
        console.log(result.user);
      })
      .catch((error) => {
        swal("ops !!", error.message, "error");
      });
  };

  return (
    <div>
      <Spinner></Spinner>
      <div className="flex items-center justify-evenly w-[80%] mx-auto my-24">
        <div className="w-1/2">
          <img
            className="w-[90%]"
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1667796897~exp=1667797497~hmac=dcb8badff13ec8f83348642c5fb78bc879636a5d2e5e45e0853c5624a89bd75c"
            alt=""
          />
        </div>
        <div className="p-4 w-1/2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 transition duration-700 ease-out hover:bg-gray-200 ">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <h5 className="text-3xl pt-3 pb-6 text-red-600 font-bold text-center ">Register</h5>
            <div>
              <input
                type="text"
                name="name"
                className="w-full border p-1 pl-3 rounded-lg"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="photoURL"
                className="w-full border p-1 pl-3 rounded-lg"
                placeholder="photo url"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="w-full border p-1 pl-3 rounded-lg"
                placeholder="email address"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                className="w-full border p-1 pl-3 rounded-lg"
                placeholder="password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full border px-4 py-2 rounded-md font-bold bg-red-600 hover:bg-white translate duration-300 ease-in hover:text-black hover:border-black text-white"
            >
              Register
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
