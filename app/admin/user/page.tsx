import React from "react";
import dynamic from "next/dynamic";
const UserTable = dynamic(() => import("./user"), { ssr: false });

const page = () => {
  return <UserTable />;
};

export default page;
