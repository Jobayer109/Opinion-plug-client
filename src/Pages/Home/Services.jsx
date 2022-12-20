import React, { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(null);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(`https://opinion-plug-server.vercel.app/services?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        setCount(data.count);
      });
  }, [page, size]);
  return (
    <div>
      {" "}
      <div>
        <h2 className="text-center text-3xl font-bold mb-12 mt-20 w-[70%] mx-auto  text-red-600 border-b-2 pb-3">
          Services
        </h2>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full sm:w-[90%] md:w-[90%] lg:w-[90%] mx-36 md:mx-auto lg:mx-auto ">
        {services.length === 0 ? (
          <Spinner />
        ) : (
          services?.map((service) => <Service key={service._id} service={service}></Service>)
        )}
      </div>
      <div className="text-center mb-36">
        <p className="mt-2 text-sm font-mono">Currently selected page:{page + 1}</p>
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            key={number}
            className="btn btn-xs btn-outline mr-3 border-b-2"
          >
            {number + 1}
          </button>
        ))}

        <select
          onChange={(e) => setSize(e.target.value)}
          defaultValue={size}
          className="border rounded-md border-gray-500 pb-1"
        >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default Services;
