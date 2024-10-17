import React from "react";
import SearchPage from "./SearchPage";

const page = (context: {
  params: { title: string };
  searchParams: { page: string };
}) => {
  const { params, searchParams } = context;

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <SearchPage title={params.title} page={searchParams.page} />
        </div>
      </div>
    </div>
  );
};

export default page;
