import React from "react";
import dynamic from "next/dynamic";
const Main_Category = dynamic(() => import("./main"), { ssr: false });

const page = () => {
  return <Main_Category />;
};

export default page;
