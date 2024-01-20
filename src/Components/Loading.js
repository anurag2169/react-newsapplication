import React from "react";
import loadingimg from "./loading.gif";
const Loading = () => {
  return (
    <div className="text-center my-3">
      <img style={{ width: "50px" }} src={loadingimg} alt="loadingimg" />
    </div>
  );
};

export default Loading;
