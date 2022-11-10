import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Contexts/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  console.log(myReviews);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  const handleDeleteReview = (_id) => {
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
          if (data.deletedCount > 0) {
            
          swal("Ok", "Your review is deleted successfully", "success");
          const remaining = myReviews.filter((rvw) => rvw._id !== _id);
          setMyReviews(remaining);
        }
      });
  };

  const handleUpdateReview = (serviceId) => {
    fetch(`http://localhost:5000/reviews/${serviceId}`, {
      method: "PUT",
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
    <div className="grid grid-cols-3 gap-8 w-[70%] mx-auto my-20">
      {myReviews?.map((myReview) => (
        <MyReview
          key={myReview._id}
          myReview={myReview}
          handleDeleteReview={handleDeleteReview}
          handleUpdateReview={handleUpdateReview}
        ></MyReview>
      ))}
    </div>
  );
};;

export default MyReviews;
