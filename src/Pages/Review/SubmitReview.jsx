import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Contexts/AuthProvider";

const SubmitReview = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, name, price, rating, img } = service;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email || form.email.value;
    const userImg = form.photoURL.value || user?.photoURL;

    const userName = user?.displayName || form.userName.value;
    const comment = form.comment.value;
    const date = form.date.value;

    const review = {
      serviceId: _id,
      serviceName: name,
      email,
      rating,
      price,
      userName,
      date,
      img,
      comment,
      userImg,
    };

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Good job!", "Your review is submitted successfully!", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="mb-28 mt-10">
      <div className="w-[65%] mx-auto mb-44 bg-gray-300 p-8 rounded-lg mt-20 font-mono">
        <div className="mb-8 border border-black w-[60%] py-4 mx-auto font-mono bg-white">
          <h3 className="text-center font-semibold">
            Service name: <span className="text-red-600 font-bold text-xl">{name}</span>
          </h3>
          <div className="flex items-center ml-24">
            <p className="font-semibold ml-2">
              Price: $ <span className="text-red-600 font-bold">{price}</span>
            </p>
            <p className="ml-6 font-semibold">
              {" "}
              Rating: <span className="text-red-600 font-bold ">{rating}</span>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 ">
            <input
              type="text"
              name="serviceName"
              className="border rounded-lg p-3  font-bold"
              placeholder="Service name"
              defaultValue={name}
              readOnly
              required
            />

            <input
              type="text"
              name="userName"
              className="border rounded-lg p-3"
              placeholder="Your name"
              defaultValue={user?.displayName}
              readOnly
              required
            />
            <input
              type="email"
              name="email"
              className="border rounded-lg p-3"
              placeholder="email"
              defaultValue={user?.email}
              readOnly
              required
            />
            <input type="date" name="date" id="" className="border rounded-lg p-3" required />
            <input
              type="text"
              name="photoURL"
              className="border rounded-lg p-3"
              placeholder="your photo"
              defaultValue={user?.photoURL}
              readOnly
              required
              hidden
            />
          </div>
          <div className="my-8">
            <textarea
              name="comment"
              className="textarea textarea-bordered w-full h-36"
              placeholder="Write a review about this service..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <div className=" text-center mr-3">
              <input
                type="submit"
                className="border border-black px-4 mt-3 py-1.5 translate duration-300 ease-in  hover:bg-red-600 hover:text-white rounded-sm"
                value="Submit Review"
              />
            </div>
            <div>
              <Link to="/services">
                <button className="border border-black px-4 mt-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-sm">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitReview;
