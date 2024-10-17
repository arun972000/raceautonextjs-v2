import React from "react";
import PostListCard from "../CategoryCard";
import PaginateComponent from "./paginate";

export type CateoryPostType = {
  id: number;
  title: string;
  title_slug: string;
  summary: string;
  created_at: any;
  image_description: string;
  image_big: string;
  image_mid: string;
};

const SubCategory = async ({
  page,
  categoryName,
}: {
  page: string;
  categoryName: string;
}) => {
  const res = await fetch(
    `${
      process.env.BACKEND_URL
    }api/post/sub-category?sub=${categoryName}&page=${page || 1}`,
    {
      next: {
        revalidate: 600,
      },
    },
  );
  const data = await res.json();

  const post: CateoryPostType[] = data.results;

  const totalCount: number = data.totalpost;

  return (
    <>
      <div className="row ">
        {post.map((item) => (
          <PostListCard key={item.id} item={item} />
        ))}
        <PaginateComponent totalCount={totalCount} />
      </div>
    </>
  );
};

export default SubCategory;
