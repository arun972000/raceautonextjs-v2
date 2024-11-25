import React from "react";
import ArticleList from "../components/Post/ArticleList";
import ArticleListV2 from "../components/Post/ArticleListSA";

const page = (context: { searchParams: { page: string } }) => {
  const page = context.searchParams.page;

  return <ArticleListV2 page={page}/>;
};

export default page;
