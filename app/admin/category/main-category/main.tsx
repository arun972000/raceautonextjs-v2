'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { MdCreateNewFolder, MdDelete, MdModeEdit } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import Link from "next/link";
import { category } from "@/types/category";

const Main_Category = () => {
  const [data, setData] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const MainCategoryApi = async () => {
    try {
      const res = await axios.get(
        `${process.env.BACKEND_URL}api/category/main-category`
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.BACKEND_URL}api/category/delete-category/${deleteId}`
      );
      toast.success("Category Deleted", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      MainCategoryApi();
      setSmShow(false);
    } catch (err) {
      toast.error("try again later", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(err);
      setSmShow(false);
    }
  };

  useEffect(() => {
    MainCategoryApi();
  }, []);
  return (
    <>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Are you sure you want to delete this Category?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-evenly">
            <button
              className="btn btn-secondary"
              onClick={() => setSmShow(false)}
            >
              cancel
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Yes
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <div className="col-12">
        <Link href="/admin/categories/create-mainCategory">
          <Button variant="primary" className="mt-3">
            <MdCreateNewFolder />
          </Button>
        </Link>
        <div className="shadow-sm p-3 mb-5  mt-3 bg-white rounded border-0">
          <table className="table text-center">
            <thead className="bg-light">
              <tr>
                <th>Category Name</th>

                <th>Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: category) => (
                <tr key={item.id}>
                  <td>{item.name}</td>

                  <td style={{ backgroundColor: item.color, color: "white" }}>
                    {item.color}
                  </td>
                  <td>
                    <Link
                      href={`/admin/categories/edit-mainCategory/${item.id}`}
                    >
                      <button className="btn btn-primary me-3">
                        <MdModeEdit size={20} />
                      </button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setSmShow(true);
                        setDeleteId(item.id);
                      }}
                    >
                      <MdDelete size={20} />
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

export default Main_Category;
