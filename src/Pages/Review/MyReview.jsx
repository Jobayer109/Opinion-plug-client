import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Reviews from "./Reviews";

const MyReview = () => {
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

  const handleDeleteReview = (_id) => {
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          swal("Ok", "Your review is deleted successfully", "success");
          const remaining = reviews.filter((rvw) => rvw._id !== _id);
          setReviews(remaining);
        }
      });
  };

  const handleUpdateReview = (_id) => {
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <p className="text-center">{reviews.length ? "" : "No reviews were added"}</p>
      <div className="grid grid-cols-2 w-[80%] mx-auto gap-10 mb-24">
        {reviews?.map((review) => (
          <Reviews
            key={review._id}
            review={review}
            handleDeleteReview={handleDeleteReview}
          ></Reviews>
        ))}
      </div>
      <div className="card-actions justify-center">
        <Link to={`/review/${serviceReviews._id}`}>
          <button className="border border-black px-4 mb-24 w-52 py-1.5 hover:translate duration-300 ease-in  hover:bg-white bg-red-600 hover:text-black text-white">
            Write a review
          </button>
        </Link>
      </div>
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{serviceReviews.name}</h3>
            <div>
              <textarea className="textarea textarea-bordered mt-8 w-full h-36 text-justify"></textarea>
            </div>
            <div className="modal-action">
              <label
                onClick={() => handleUpdateReview(serviceReviews._id)}
                htmlFor="my-modal"
                className="border border-black px-4 mt-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-sm"
              >
                Update
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
