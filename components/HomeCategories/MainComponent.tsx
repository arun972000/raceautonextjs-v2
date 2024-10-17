import React from "react";
import HomeCategories from "./HomeCategories";
import { category } from "@/types/category";

const MainComponent = async () => {
  const res = await fetch(
    `${process.env.BACKEND_URL}api/category/main-category`,
  );

  const data: category[] = await res.json();

  const showOnHome = data.filter((item) => item.show_at_homepage == 1);

  return (
    <>
      {showOnHome.map((item) => (
        <HomeCategories key={item.id} item={item} />
      ))}
    </>
  );
};

export default MainComponent;
