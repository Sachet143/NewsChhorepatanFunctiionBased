import React from "react";
import spinner from "../Spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
