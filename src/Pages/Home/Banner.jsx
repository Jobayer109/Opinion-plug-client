import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className="bg-gray-300 border rounded-md">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            Fitness is not a destination. It is a way of Life.
          </h1>
          <p className="mt-6 mb-8 text-sm sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            No matter who are you, how much your age, where are you from;
            <br /> the platform 'Opinion plug' is always with you to train you and your mind to
            serve a better life.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/register">
              <button
                type="submit"
                className="w-44 border px-4 py-3 font-medium bg-red-600 hover:bg-white translate duration-300 ease-in hover:text-black hover:border-black text-white rounded-sm"
              >
                Join with me
              </button>
            </Link>
            <button
              type="button"
              className="w-44 border px-4 py-3 font-medium  translate duration-300 ease-in text-black hover:border-red-500 border-black ml-4  rounded-sm"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/allmaxcablefly1000.jpg"
        alt=""
        className="w-2/3 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
    // <div>
    //   <div
    //     className="hero h-96 mt-12 md:mb-96 lg:mb-96 md:relative lg:relative border border-red-600"
    //     style={{
    //       backgroundImage: `url("https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/allmaxcablefly1000.jpg")`,
    //     }}
    //   >
    //     <div className="hero-overlay bg-opacity-60"></div>
    //     <div className="hero-content text-center text-neutral-content rounded-xl"></div>
    //   </div>
    //   <div className="md:absolute lg:absolute w-full lg:w-[60%] p-8  px-36 rounded-lg left-60 top-2/3  border-b-4 border-red-600 text-center  hover:bg-gray-400 translate duration-500 ease-in shadow-xl bg-gray-300">
    //     <h1 className="mb-3 text-4xl  font-bold font-mono">
    //       <span className="text-red-600"></span>  {" "}
    //       <span className="text-red-600"></span>.
    //     </h1>

    //     <p className="text-sm mb-6 font-mono">
    //        '
    //     </p>

    //   </div>
    // </div>
  );
};

export default Banner;
