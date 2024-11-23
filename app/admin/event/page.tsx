import React from "react";
import dynamic from "next/dynamic";
const EventTable = dynamic(() => import("./table"), { ssr: false });

const page = () => {
  return <EventTable />;
};

export default page;
