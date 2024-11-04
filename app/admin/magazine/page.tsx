import { magazineCardType } from "@/app/magazine/Magazine";
import { formatDate } from "@/components/Time";
import Image from "next/image";
import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";

const page = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}api/magazine`, {
    cache: "no-store",
  });
  const data: magazineCardType[] = await res.json();

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Magazine</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>
              <div className="d-flex">
                <Image
                  src={`${process.env.BACKEND_URL}${item.image_url}`}
                  alt={item.title}
                  width={80}
                  height={80}
                />
                <p className="p-0 ms-5">{item.title}</p>
              </div>
            </td>
            <td>{formatDate(item.created_date)}</td>
            <td>
              <button className="btn btn-primary me-3">
                <MdModeEdit size={20} />
              </button>
              <button className="btn btn-danger">
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default page;
