import dynamic from "next/dynamic";
import React from "react";
const AdminAccess = dynamic(() => import("./admin-access"), { ssr: false });
const page = () => {
  return <AdminAccess />;
};

export default page;
