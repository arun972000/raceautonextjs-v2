import React from "react";
import PageContent from "./PageContent";


const page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  
  return (
    <>
      <div className="container mt-5">
        <PageContent slug={params.slug} />
      </div>
    </>
  );
};

export default page;
