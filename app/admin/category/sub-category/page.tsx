import React from "react";
import dynamic from "next/dynamic";
const Sub_Category = dynamic(() => import("./sub"), { ssr: false });

const page = () => {
  return <Sub_Category />;
};

export default page;
