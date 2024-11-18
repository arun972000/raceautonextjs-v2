"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeaderAd = () => {
  const [data, setData] = useState<any>([]);

  const headerData = async () => {
    try {
      const res = await axios.get(
        `${process.env.BACKEND_URL}api/admin/adspace/header`
      );
      setData(res.data[0]);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    headerData();
  }, []);
  return (
    <div
      className="my-4"
      id="adImageContainer"
      style={{ position: "relative", aspectRatio: "8.9/1", width: "100%" }}
    >
      <Image
        src={`${process.env.BACKEND_URL}${data.ad_code_728}`}
        alt="index top"
        fill
      />
    </div>
  );
};

export default HeaderAd;
