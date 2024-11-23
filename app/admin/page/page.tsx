import React from "react";
import dynamic from "next/dynamic";

const Admin_page = dynamic(()=>import('./pageList'),{ssr:false})

const page = () => {
  return <Admin_page />;
};

export default page;
