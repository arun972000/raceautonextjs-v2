'use client'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useMemo, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios';
import { FaFileImage } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from 'next/image';


const NewsLetterPost = () => {
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [image_url, setImage_url] = useState(null);
  const [pdf_url, setPdf_url] = useState(null);
  const [preview, setPreview] = useState('')
  const [categoryArray, setCategoryArray] = useState([])
  const [category, setCategory] = useState<any>(0)

  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };

  const focusedStyle = {
    borderColor: '#2196f3'
  };

  const acceptStyle = {
    borderColor: '#00e676'
  };

  const rejectStyle = {
    borderColor: '#ff1744'
  };

  const onDrop = useCallback((acceptedFiles:any) => {

    setImage_url(acceptedFiles[0]);
    setIsFileSelected(true);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      'image/*': []
    }, onDrop
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [isFocused, isDragAccept, isDragReject]);

  const handleFileChange = (e:any) => {
    const selectedFile = e.target.files[0];
    const maxSize = 40 * 1024 * 1024;

    if (selectedFile && selectedFile.size <= maxSize) {
      setPdf_url(selectedFile);

    } else {
      alert('Please select a file smaller than 40MB.');
      e.target.value = null;
    }


  };

  const handleKeywordsChange = (e:any) => {
    setKeywords(e.target.value);
  };

  const CategoryApi = async () => {
    try {
      const res = await axios.get(
        `${process.env.BACKEND_URL
        }api/magazine/category`
      );
      setCategoryArray(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!title || !keywords || !image_url || !pdf_url) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();

    formData.append('title', title);
    formData.append('keywords', keywords);
    formData.append('image_url', image_url);
    formData.append('pdf_url', pdf_url);
    formData.append('category', category)

    try {
      await axios.post(`${process.env.BACKEND_URL}api/admin/magazine`, formData)
      toast.success("E-magazine created!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err)
      toast.warn(
        "An error occurred while submitting the form. Please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  useEffect(() => {
    CategoryApi()
  }, [])

  return (
    <div className="col-12">
      <button
        className="btn btn-secondary mt-3 ms-2"
        // onClick={() => navigate("/admin/e-magazine/magazines")}
      >
        Back
      </button>
      <div className="shadow-sm p-3 mb-5  mt-5 bg-white rounded border-0">
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}

              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>


          <Form.Group controlId="formImage_url" className="mb-3">
            <Form.Label>Select Image</Form.Label>
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} style={{ display: 'none' }} />
              {isFileSelected ? (
                <p>Image file selected</p>
              ) : (<div className="text-center">
                <FaFileImage className="mb-3" style={{ fontSize: 35 }} />
                <p>Drag 'n' drop image files here, or click to select files</p>
              </div>
              )}
            </div>
          </Form.Group>
          {preview && <Image src={preview} alt="Banner Preview" className="my-3" height={200} width={200}/>}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select PDF</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} accept="application/pdf" required />
          </Form.Group>

          <Form.Group controlId="MainCategory" className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="none">None</option>
              {categoryArray.map((item:any) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formKeywords" className="mb-3">
            <Form.Label>Keywords</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter keywords"
              value={keywords}
              onChange={handleKeywordsChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewsLetterPost;