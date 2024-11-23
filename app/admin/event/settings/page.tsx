import React from "react";
import dynamic from "next/dynamic";
const EventSettings = dynamic(() => import("./settings"), { ssr: false });

const page = () => {
  return <EventSettings />;
};

export default page;
