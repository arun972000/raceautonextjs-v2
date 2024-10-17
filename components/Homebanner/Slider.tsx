import React from "react";
import styles from "./HomeBanner.module.css";
import MySwiperComponent from "./Swiperslide";

type SliderType = {
  id: number;
  title: string;
  title_slug: string;
  image_big: string;
  slider_order: number;
};

const Slider = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}api/slider`, {
    next: {
      revalidate: 600,
    },
  });
  const slides: SliderType[] = await response.json();

  return <MySwiperComponent slides={slides} />;
};

export default Slider;
