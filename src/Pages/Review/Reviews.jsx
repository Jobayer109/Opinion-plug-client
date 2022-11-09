import React, { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthProvider";

const Reviews = ({ review, handleDeleteReview }) => {
  const { user } = useContext(AuthContext);
  const { country, comment, userName, email, _id } = review;
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-600 border bg-yellow-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={user?.photoURL}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{userName}</h4>
            <span className="text-xs dark:text-gray-400">{email}</span> <br />
            <span className="text-xs dark:text-gray-400">{country}</span>
          </div>
        </div>
        <div>
          <FaTrash
            onClick={() => handleDeleteReview(_id)}
            className="text-xl mb-3 text-red-700"
          />
          <FaEdit className="text-xl" />
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Reviews;
