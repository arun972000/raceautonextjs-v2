import React from "react";
import Magazine from "./Magazine";

const page = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <Magazine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
