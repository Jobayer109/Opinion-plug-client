import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Contexts/AuthProvider";
import Spinner from "../Shared/Spinner";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        form.reset();
        navigate(from, {replace: true});
        console.log(result.user);
      })
      .catch((error) => {
        swal("OPS.!!", error.message, "warning");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(provider)
      .then((result) => {})
      .catch((error) => {
        swal("OPS.!!", error.message, "warning");
      });
  };

  return (
    <div>
      {" "}
        <Spinner></Spinner>
      <div className="flex items-center justify-evenly w-[80%] mx-auto my-24 ">
        <div className="w-1/2">
          <img
            className="w-[80%]"
            src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=740&t=st=1667796009~exp=1667796609~hmac=b0392c83f220c9aca5c374bebecf7865b83f7d30a7feec61ca86c45035481d6d"
            alt=""
          />
        </div>
        <div className="p-4 w-1/2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 transition duration-700 ease-out hover:bg-gray-200 ">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <h5 className="text-3xl font-bold text-center text-gray-900 ">Sign in</h5>
            <div>
              <label for="email" className="block mb-1 text-sm font-medium text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border p-3 rounded-lg"
                placeholder="email"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                className="w-full border p-3 rounded-lg"
                placeholder="password"
                required
              />
            </div>
            <div>
              <Link
                to="/"
                className="ml-auto text-sm font-bold text-blue-700 hover:underline dark:text-blue-500"
              >
                Forget Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full border px-4 py-3 font-bold bg-red-600 hover:bg-white translate duration-300 ease-in hover:text-black hover:border-black text-white rounded-md"
            >
              Sign in
            </button>
            <div className="divider text-xs">OR</div>

            <div className="text-center">
              <button
                onClick={handleGoogleSignIn}
                className="text-xl mr-3 py-1.5 rounded-lg hover:bg-blue-500 hover:text-white flex items-center border translate duration-300 ease-in border-black w-full"
              >
                <FaGoogle className="ml-14 mr-3" />
                <p>Sign in with Google</p>
              </button>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
