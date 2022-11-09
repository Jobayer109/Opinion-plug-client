import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, img, price, description, rating } = service;
  return (
    <div className="card card-compact w-72 shadow-xl hover:translate duration-500 ease-in hover:bg-blue-100">
      <PhotoProvider>
        <PhotoView>
          <img className="h-44 w-[95%] mx-auto rounded-lg mt-2 " src={img} alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex items-center justify-between">
          <p className="font-semibold">
            Price: $ <span className="text-red-600 font-bold">{price}</span>
          </p>
          <div className="flex items-center">
            <FaStar className="mr-2 text-yellow-500 "></FaStar>
            <p className="text-red-600 font-bold"> {rating}</p>
          </div>
        </div>
        <p>
          {description.length > 100 ? description.slice(0, 100) + "... read more" : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
            <button className="border border-black px-4 mt-3 mb-3 rounded-sm py-1.5 translate duration-500 ease-in  hover:bg-red-600 hover:text-white">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
