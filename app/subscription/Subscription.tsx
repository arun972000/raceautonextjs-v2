import { SubscriptionType } from "@/types/subscription";
import React from "react";
import SubscriptionCard from "./subscriptionCard";

const Subscription = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}api/subscription`, {
    next: {
      revalidate: 600,
    },
  });
  const data: SubscriptionType[] = await res.json();
  return (
    <>
      <SubscriptionCard data={data} />
    </>
  );
};

export default Subscription;
