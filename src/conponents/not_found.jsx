import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>NotFound</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </>
  );
};

export default NotFound;
