"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { MdCreateNewFolder, MdDelete, MdModeEdit } from "react-icons/md";
import { toast } from "react-toastify";
import Link from "next/link";
import { eventType } from "@/app/page/event/eventCard";

const EventTable = () => {
  const [data, setData] = useState([]);

  const eventList = async () => {
    try {
      const res = await axios.get(`${process.env.BACKEND_URL}api/event`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${process.env.BACKEND_URL}api/event/delete/${id}`);
      toast.success("deleted event!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      eventList();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    eventList();
  }, []);
  return (
    <>
      <div className="col-12">
        <Link href="/admin/event/create-event">
          <Button variant="primary" className="mt-3">
            <MdCreateNewFolder />
          </Button>
        </Link>
        <div className="shadow-sm p-3 mb-5  mt-3 bg-white rounded border-0">
          <table className="table text-center">
            <thead className="bg-light">
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: eventType) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.event_date}</td>
                  <td>
                    <Link href={`/admin/event/${item.id}`}>
                      <button className="btn btn-primary me-3">
                        <MdModeEdit size={20} />
                      </button>
                    </Link>
                    <button className="btn btn-danger">
                      <MdDelete
                        size={20}
                        onClick={() => handleDelete(item.id)}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EventTable;
