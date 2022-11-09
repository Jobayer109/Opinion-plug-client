import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/about.svg";

const About = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse lg:ml-4">
        <img src={photo} className="max-w-sm rounded-lg h-96" alt="" />
        <div>
          <h1 className="text-4xl font-bold font-mono"> About</h1>
          <p className="py-6 text-justify text-gray-500 mr-20">
            Learners who complete Science of Exercise will have an improved physiological
            understanding of how your body responds to exercise, and will be able to identify
            behaviors, choices, and environments that impact your health and training.
          </p>
          <p className="text-gray-500 mb-8">
            {" "}
            You will explore a number of significant adjustments required by your body in order to
            properly respond to the physical stress of exercise, including changes in carbohydrate,
            fat and protein metabolism, nutritional considerations, causes of muscle soreness &
            fatigue, and the effectiveness and dangers of performance enhancing drugs.
          </p>
          <div className="card-actions">
            <Link>
              <button className="border border-black px-4 mt-3 mb-3 rounded-sm py-1.5 translate duration-500 ease-in bg-red-600 text-white hover:bg-white hover:text-black">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
