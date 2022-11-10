import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";

const PublicReviews = () => {
  const serviceReviews = useLoaderData();
  console.log(serviceReviews);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceId=${serviceReviews._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [serviceReviews._id]);

  
  return (
    <div>
      <p className="text-center">{reviews.length ? "" : "No reviews were added"}</p>
      <div className="grid grid-cols-3 w-[80%] mx-auto gap-10 mb-24">
        {reviews?.map((review) => (
          <Reviews
            key={review._id}
            review={review}
          ></Reviews>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="card-actions justify-center">
          <Link to={`/review/${serviceReviews._id}`}>
            <button className="border border-black px-4 mb-24 w-44 py-1.5 hover:translate duration-300 ease-in  hover:bg-white bg-red-600 hover:text-black text-white">
              Write a review
            </button>
          </Link>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/myReviews`}>
            <button className="border border-black px-4 mb-24 w-44 py-1.5 hover:translate duration-300 ease-in  hover:bg-white bg-green-600 hover:text-black text-white ml-4">
              My review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicReviews;
