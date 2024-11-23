import React from "react";
import dynamic from "next/dynamic";
const Create_Main = dynamic(() => import("./create"), { ssr: false });
const page = () => {
  return <Create_Main />;
};

export default page;
