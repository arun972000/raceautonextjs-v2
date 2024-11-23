import React from "react";
import dynamic from "next/dynamic";
const DynamicDashboard = dynamic(
  () => import("./components/Dashboard/Dashboard"),
  { ssr: false }
);

const page = () => {
  return (
    <>
      <DynamicDashboard />
    </>
  );
};

export default page;
