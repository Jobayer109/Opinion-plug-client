import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import PublicReviews from "../Review/PublicReviews";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { name, img, price, description, rating } = service;

  return (
    <div>
      {" "}
      <div className="card card-side w-[80%] mx-auto shadow-xl mt-20 mb-20 py-4 hover:bg-blue-100 translate duration-500 ease-out  border border-gray-300">
        <figure>
          <img
            className="w-96 h-full p-8 rounded-r-full hover:translate-x-2 duration-500 ease-out"
            src={img}
            alt="exercise"
          />
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
          
        </div>
      </div>
<PublicReviews></PublicReviews>
    </div>
  );
};

export default ServiceDetails;
