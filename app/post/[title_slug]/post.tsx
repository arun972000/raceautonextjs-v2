import React from "react";
import PostSlider from "./Slider";
import Link from "next/link";
import SocialButton from "./SocialButton";
import { formatDate } from "@/components/Time";
import PostContent from "./postContent";

export type postsliderType = {
  image_default: string;
};

type TagType = {
  id: number;
  tag: string;
};

export type postType = {
  id: number;
  title: string;
  summary: string;
  created_at: any;
  images: postsliderType[];
  image_description: string;
  content: string;
  image_big: string;
  image_default: string;
  tag: TagType[];
  keywords: [];
};

const Post = async ({ title }: { title: string }) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}api/post/single-post/${title}`
  );
  const data: postType[] = await res.json();

  const post = data[0];

  return (
    <>
      <div className="col-lg-8 mt-3">
        <div>
          <h3>
            <b>{post.title}</b>
          </h3>
          <p className="post-summary">{post.summary}</p>
          <small className="">Date: {formatDate(post.created_at)} </small>
          <SocialButton />
          <hr />
        </div>
        <PostSlider images={post.images} title={post.title} />
        <p
          className="text-muted text-center mt-2"
          style={{ fontSize: "small" }}
        >
          {post.image_description}
        </p>
       <PostContent content={post.content}/>
        {post.tag.map((item) => (
          <Link href="/tag" className="badge badge-info mr-3" key={item.id}>
            {item.tag}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Post;
