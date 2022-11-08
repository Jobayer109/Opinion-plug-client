import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center mb-28 mt-12">
        <Link to='/services'>
          <button className="border border-black px-6 mt-3 py-1.5 translate duration-500 ease-in  hover:bg-red-600 hover:text-white">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
