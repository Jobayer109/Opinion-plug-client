import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Reviews from "./Reviews";

const MyReview = () => {
  const serviceReviews = useLoaderData();
  const [reviews, setReviews] = useState([]);

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
        if (data.deletedCount) {
          swal("Ok", "Your review is deleted successfully", "success");
          const remaining = reviews.filter((rvw) => rvw._id !== _id);
          setReviews(remaining);
        }
        console.log(data);
      });
  };

  return (
    <div className="grid grid-cols-2 w-[80%] mx-auto gap-10 mb-24">
      {reviews?.map((review) => (
        <Reviews key={review._id} review={review} handleDeleteReview={handleDeleteReview}></Reviews>
      ))}
    </div>
  );
};

export default MyReview;
