import React, { useEffect, useState } from "react";

const Spinner = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);
  return spinner && <progress className="progress w-full"></progress>;
};

export default Spinner;
