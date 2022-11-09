import React from "react";
import swal from "sweetalert";
import banner from "../../assets/add service.svg";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const img = form.filename.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const service = {
      name,
      img,
      description,
      price,
      rating,
    };

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": " application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Done", "Service added successfully", "success");
          form.reset();
        }
      });
  };

  return (
    <section className="p-6 bg-yellow-300  h-screen pt-20 ">
      <form
        onSubmit={handleAddService}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid w-[80%] mx-auto"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-2xl text-center font-mono mb-2">Add Service</p>
            <img className="h-72" src={banner} alt="" />
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="Service name" className="text-sm">
                Service name
              </label>
              <input
                name="serviceName"
                type="text"
                placeholder="Service name"
                className="w-full rounded-md p-3"
                required
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label for="photoURL" className="text-sm ml-3">
                Photo upload
              </label>
              <input
                type="file"
                name="filename"
                accept="image/*"
                className="w-full rounded-md p-3"
                required
              />
            </div>

            <div className="col-span-full">
              <label for="" className="text-sm">
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="w-full rounded-md p-3"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="w-full rounded-md p-3"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="" className="text-sm">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Ex: 4.3"
                className="w-full rounded-md p-3"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div className=" text-center mr-3">
              <input
                type="submit"
                className="border border-black px-4 mt-3 py-1.5 translate duration-300 ease-in bg-red-600 hover:bg-white hover:text-black font-semibold text-white rounded-sm"
                value="Submit Review"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddService;
