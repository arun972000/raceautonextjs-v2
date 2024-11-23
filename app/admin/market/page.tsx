import React from "react";
import dynamic from "next/dynamic";
const MarketList = dynamic(() => import("./market"), { ssr: false });

const page = () => {
  return <MarketList />;
};

export default page;
