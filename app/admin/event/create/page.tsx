import React from "react";
import dynamic from "next/dynamic";
const EventPost = dynamic(() => import("./create"), { ssr: false });

const page = () => {
  return <EventPost />;
};

export default page;
