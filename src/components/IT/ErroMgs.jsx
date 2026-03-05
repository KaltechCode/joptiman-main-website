import React from "react";

const ErrorMsg = ({ msg }) => {
  return (
    <div style={{ color: "red" }} className="mt-5">
      {msg}
    </div>
  );
};

export default ErrorMsg;
