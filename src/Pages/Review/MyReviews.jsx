import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Contexts/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://opinion-plug-server.vercel.app/review?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return logOut();
          }
          return res.json();
        })
        .then((data) => {
          setMyReviews(data);
        });
    }
  }, [user?.email, logOut]);

  const handleDeleteReview = (_id) => {
    fetch(`https://opinion-plug-server.vercel.app/reviews/${_id}`, {
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
    fetch(`https://opinion-plug-server.vercel.app/reviews/${serviceId}`, {
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
    <div>
      <p className="text-center my-24 ">{myReviews.length ? "" : "No reviews were added"}</p>
      <div className="grid grid-cols-3 gap-8 w-[70%] mx-auto my-20">
        {myReviews?.map((myReview) => (
          <MyReview
            key={myReview._id}
            myReview={myReview}
            handleDeleteReview={handleDeleteReview}
          ></MyReview>
        ))}
      </div>
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription to use Wikipedia for
              free!
            </p>
            <div className="modal-action">
              <label onClick={handleUpdateReview} htmlFor="my-modal" className="btn">
                Update
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
