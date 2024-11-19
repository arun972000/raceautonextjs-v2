import React from "react";
import "./page.css";
import Subscription from "./Subscription";
import MyHorizontalBarChart from "./HorizontalChart";
import DonutChart from "./SubscribersDonutChart";
import TextArea from "./TextArea";
import Image from "next/image";
import SubscriptionForm from "./SubscriptionForm";

const page = async () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TextArea />

          </div>
          <div className="col-lg-8">
            <MyHorizontalBarChart />
          </div>
          <div className="col-lg-4">
            <DonutChart />
          </div>
          <div className="col-12">
            <h2 className="text-center my-3 text-primary">We’re reaching subscribers worldwide!</h2>
            <div className="d-flex justify-content-center">
              <div
                style={{
                  position: "relative",
                  width: "60%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/subscribers map.gif"
                  alt="subscriber map"
                  fill
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pricing1 mt-5">
        <div className="container">
          <Subscription />
        </div>
      </div>
    </>
  );
};

export default page;
