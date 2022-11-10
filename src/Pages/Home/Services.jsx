import React, { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
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
      <Spinner></Spinner>
      <h2 className="text-center text-3xl font-bold mb-12 mt-20  text-red-600 border-b-2 pb-3">
        Services
      </h2>
      <div className="grid grid-cols-3 gap-10 w-[80%] mx-auto mb-36">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
