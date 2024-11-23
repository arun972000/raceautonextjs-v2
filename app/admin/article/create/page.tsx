import React from "react";
import dynamic from "next/dynamic";
const AdminPost = dynamic(
  () => import("../../components/Post/PostCreate/Create"),
  { ssr: false }
);

const page = () => {
  return <AdminPost />;
};

export default page;
