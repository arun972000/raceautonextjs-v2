import React from "react";
import Post from "./post";
import Sidebar from "@/components/Sidebar/Sidebar";



const PostPage = ({
  params,
}: {
  params: {
    title_slug: string;
  };
}) => {
  return (
    <>
      <div className="container">
        <div className={`row`}>
          <Post title={params.title_slug} />
          <Sidebar/>
        </div>
      </div>
    </>
  );
};

export default PostPage;
