import React from "react";
import dynamic from "next/dynamic";
const SubscriptionPage = dynamic(() => import("./SubscriptionPage"), {
  ssr: false,
});

const page = () => {
  return <SubscriptionPage />;
};

export default page;
