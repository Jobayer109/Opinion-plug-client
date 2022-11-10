import React from "react";
import { FaCalendarAlt } from "react-icons/fa";


const Reviews = ({ review }) => {
  const { comment, userName, date, userImg} = review;
  

  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-600 border bg-blue-100">
      <div className="flex justify-between p-2">
        <div className="flex space-x-2">
          <div>
            <img
              src={userImg}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{userName}</h4>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400" />
              <p className="text-xs dark:text-gray-400 font-semibold ml-2">{date}</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Reviews;
