import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, name, img, price, description, rating } = service;

  return (
    <div className="card card-side w-[80%] mx-auto shadow-xl mt-20 mb-36 py-4 hover:bg-yellow-100 translate duration-500 ease-out  border-2 border-black">
      <figure>
        <img className="w-96 h-full p-8 rounded-r-full" src={img} alt="Movie" />
      </figure>
      <div className="card-body w-3/5">
        <div className="flex items-center justify-between">
          <h2 className="card-title font-bold font-mono text-2xl">{name}</h2>
          <FaHeart className="mr-1 text-red-500 shadow-lg text-xl" />
        </div>
        <div className="flex">
          <p className="font-semibold">
            Price: $ <span className="font-bold text-red-600">{price}</span>
          </p>
          <div className="flex items-center">
            <FaStar />
            <p className="ml-2 text-red-600 font-bold">{rating}</p>
          </div>
        </div>
        <p className="text-justify">{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/myReview/${_id}`}>
            <button className="border border-black px-4 mt-3 py-1.5 translate duration-300 ease-in  hover:bg-red-600 hover:text-white">
              Write a review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
