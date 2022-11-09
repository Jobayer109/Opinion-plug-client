import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-96 mt-12 mb-60 relative border border-red-600"
        style={{
          backgroundImage: `url("https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/allmaxcablefly1000.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content rounded-xl"></div>
      </div>
      <div className="absolute w-[60%] p-8  px-36 rounded-lg left-60 top-2/3 bg-white border-b-4 border-red-600 text-center hover:bg-black hover:text-white translate duration-500 ease-in">
        <h1 className="mb-5 text-3xl  font-bold">
          <span className="text-red-600">Fitness</span> is not a destination. <br /> It is a way of{" "}
          <span className="text-red-600">Life</span>.
        </h1>

        <Link to="/register">
          <button
            type="submit"
            className="w-44 border px-4 py-3 font-medium bg-red-600 hover:bg-white translate duration-300 ease-in hover:text-black hover:border-black text-white rounded-sm"
          >
           Join with us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
