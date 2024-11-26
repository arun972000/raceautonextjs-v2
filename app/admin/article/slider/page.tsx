import dynamic from "next/dynamic";
import React from "react";
const SliderArticles = dynamic(() => import("./slider"), { ssr: false });

const page = () => {
  return <SliderArticles />;
};

export default page;
