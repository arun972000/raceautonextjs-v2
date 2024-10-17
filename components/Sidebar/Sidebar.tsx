import React from "react";
import RecommendedPost from "./RecommendedPost";
import LatestNews from "./LatestNews";
import ReactPlayer_Server from "./ReactPlayer";
import "./sidebar.css";

export type LatestNewsType = {
  id: number;
  title: string;
  title_slug: string;
};

export type RecommendedType = {
  id: number;
  title: string;
  title_slug: string;
  image_small: string;
  created_at: any;
};

const Sidebar = async () => {
  const latestnewsResponse = await fetch(
    `${process.env.BACKEND_URL}api/latest-news`
  );
  const latestNewsData: LatestNewsType[] = await latestnewsResponse.json();

  const recommendedResponse = await fetch(
    `${process.env.BACKEND_URL}api/recommended-news`
  );

  const recommendedNewsData: RecommendedType[] =
    await recommendedResponse.json();

  return (
    <>
      <div className="col-lg-4 mb-4">
        <ReactPlayer_Server />
        <div className="row mt-3">
          <div className="col-12">
            <div>
              <h6
                style={{
                  backgroundColor: "#00e0ae",
                  padding: 5,
                  color: "white",
                  fontWeight: 600,
                  fontStyle: "normal",
                }}
              >
                LATEST NEWS
              </h6>
              <div
                className="side-scrollbar side-scrollbar-primary"
                style={{ maxHeight: 300 }}
              >
                {latestNewsData.map((item) => (
                  <LatestNews item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-12">
            <h6
              style={{
                backgroundColor: "#00e0ae",
                padding: 5,
                color: "white",
                fontWeight: 600,
                fontStyle: "normal",
              }}
            >
              LATEST NEWS
            </h6>
            {recommendedNewsData.map((item) => (
              <RecommendedPost key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
