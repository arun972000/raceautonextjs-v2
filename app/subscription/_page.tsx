import React from "react";
import dynamic from "next/dynamic";
const SubscriptionPage = dynamic(() => import("./component/SubscriptionPage"), {
  ssr: false,
});

const page = () => {
  return <p>page</p>;
};

export default page;
