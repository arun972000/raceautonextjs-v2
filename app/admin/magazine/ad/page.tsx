import React from "react";
import dynamic from "next/dynamic";
const Newsletter_ad_form = dynamic(() => import("./ad"), { ssr: false });

const page = () => {
  return <Newsletter_ad_form />;
};

export default page;
