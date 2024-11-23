import React from "react";
import dynamic from "next/dynamic";

const Create_Market = dynamic(() => import("./create"), { ssr: false });

const page = () => {
  return <Create_Market />;
};

export default page;
