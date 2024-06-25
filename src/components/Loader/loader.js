import React from "react";

const Loader = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div
          className="spinner-border"
          style={{
            width: "3rem",
            height: "3rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
