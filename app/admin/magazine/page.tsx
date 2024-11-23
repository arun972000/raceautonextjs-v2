import React from "react";
import dynamic from "next/dynamic";
const Magazine = dynamic(() => import("./magazine"), { ssr: false });

const page = () => {
  return <Magazine />;
};

export default page;
