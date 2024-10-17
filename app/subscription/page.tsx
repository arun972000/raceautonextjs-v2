import React from "react";
import "./page.css";
import Subscription from "./Subscription";

const page = async () => {
  return (
    <>
      <div className="pricing1 mt-5">
        <div className="container">
          <Subscription />
        </div>
      </div>
    </>
  );
};

export default page;
