import React from "react";
import { FaMehRollingEyes } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center sm:p-16 bg-black h-screen">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <FaMehRollingEyes className="text-red-600 text-6xl" />
        <p className="text-2xl text-gray-400"> Ops... I think you forget your route.</p>
        <Link
          to="/"
          rel="noopener noreferrer"
          className="px-8 py-3 font-semibold rounded bg-red-600 text-white hover:bg-green-500 hover:text-black"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
