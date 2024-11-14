import React from "react";
import PageContent from "./PageContent";
import Navbar from "@/components/Navbar/Navbar";


const page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  
  return (
    <>
    <Navbar/>
      <div className="mt-4">
        <PageContent slug={params.slug} />
      </div>
    </>
  );
};

export default page;
