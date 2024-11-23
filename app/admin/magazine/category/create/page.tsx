import React from "react";
import dynamic from "next/dynamic";
const Create_newsLetterCategory = dynamic(() => import("./create"), {
  ssr: false,
});

const page = () => {
  return <Create_newsLetterCategory />;
};

export default page;
