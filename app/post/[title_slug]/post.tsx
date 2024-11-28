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
  image_mid:string;
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
          <SocialButton title_slug={title}/>
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
            <Link href='/tag' key={item.id}><span className="badge badge-primary mr-3" style={{color:'red'}}>{item.tag}</span></Link>
        ))}
      </div>
    </>
  );
};

export default Post;
