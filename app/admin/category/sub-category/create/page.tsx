import React from "react";
import dynamic from "next/dynamic";
const Create_sub = dynamic(() => import("./create"), { ssr: false });

const page = () => {
  return <Create_sub />;
};

export default page;
