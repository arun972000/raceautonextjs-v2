import React from "react";
import dynamic from "next/dynamic";

const SubscriptionTable = dynamic(() => import("./table"), { ssr: false });

const page = () => {
  return <SubscriptionTable />;
};

export default page;
