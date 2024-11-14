"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { magazineCardType } from "./Magazine";
import MagazineCard_v2 from "./MagazineCard-v2";

const Magazine_v2 = () => {
  const [data, setData] = useState<magazineCardType[]>([]);
  const [sortedData, setSortedData] = useState<magazineCardType[]>([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCatgeory] = useState(0);
  const magazineData = async () => {
    try {
      const res = await axios.get(`${process.env.BACKEND_URL}api/magazine`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const magazineCategory = async () => {
    try {
      const res = await axios.get(
        `${process.env.BACKEND_URL}api/magazine/category`
      );
      setCategory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const magazineSorted = async () => {
    try {
      const res = await axios.get(
        `${process.env.BACKEND_URL}api/magazine/sorted/${selectedCategory}`
      );
      setSortedData(res.data);
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    magazineData();
    magazineCategory();
  }, []);

  useEffect(() => {
    magazineSorted();
  }, [selectedCategory]);
  return (
    <>
      <div
        style={{ aspectRatio: "2.88/1", width: "100%", position: "relative" }}
      >
        <Image src="/images/magazine banner.jpg" alt="magazine banner" fill />
      </div>
      <div className="container">
        <div className="row">
          <h2 className="mt-4">Latest Edition</h2>
          {data.map((item) => (
            <MagazineCard_v2 key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="container-fluid my-3">
        <div
          className="row justify-content-center text-white"
          style={{
            backgroundImage: "url('/images/category banner.jpg')",
            backgroundSize: "cover",
            height: 300,
          }}
        >
          <h2 className="m-0 mt-3">Categories</h2>
          <div className="col-md-3 col-lg-2 text-center">
            <button
              className="btn btn-light"
              onClick={() => setSelectedCatgeory(0)}
            >
              All Magazines
            </button>
          </div>
          {category.map((item: any) => (
            <div className="col-md-3 col-lg-2 text-center" key={item.id}>
              <button className="btn btn-light" onClick={()=>setSelectedCatgeory(item.id)}>{item.title}</button>
            </div>
          ))}
        </div>
        <div className="row">
            {sortedData.map(item=><MagazineCard_v2 item={item} key={item.id}/>)}
        </div>
      </div>
    </>
  );
};

export default Magazine_v2;
