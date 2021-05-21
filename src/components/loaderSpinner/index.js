import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner = ({
  type = "TailSpin",
  color = "#22C680",
  height = 100,
  width = 100,
  timeout = 0,
}) => {
  return (
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
      timeout={timeout}
    />
  );
};

export default LoaderSpinner;
