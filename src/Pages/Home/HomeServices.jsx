import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeService from "./HomeService";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("http://localhost:5000/homeServices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
    return (
      <div>
        <div className="grid grid-cols-3 gap-10 w-[90%] mx-auto">
          {services.map((service) => (
            <HomeService key={service._id} service={service}></HomeService>
          ))}
        </div>
        <div className="text-center mb-28 mt-12">
          <Link to="/services">
            <button className="border border-red-600 text-red-500 font-bold px-6 mt-3 py-1.5 translate duration-500 ease-in  hover:bg-red-600 hover:text-white rounded-sm">
              See more
            </button>
          </Link>
        </div>
      </div>
    );
};

export default HomeServices;
