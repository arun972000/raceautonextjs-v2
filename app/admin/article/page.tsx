import React from "react";
import ArticleList from "../components/Post/ArticleList";

const page = (context: { searchParams: { page: string } }) => {
  const page = context.searchParams.page;

  return <ArticleList page={page}/>;
};

export default page;
