'use client'
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillFileExcel } from 'react-icons/ai';
import axios from 'axios';

const ExcelUpload = () => {
  const [file, setFile] = useState<any>(null);
  const [message, setMessage] = useState("");

  const onDrop = useCallback((acceptedFiles:any) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile); // Store the file in state for API actions
    setMessage(""); // Clear any previous messages
    console.log("Selected file:", selectedFile);
  }, []);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please upload an Excel file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/admin/subscriber/upload-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setMessage("File uploaded successfully!");
      } else {
        setMessage(response.data.message || "Upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("An error occurred during upload.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: {
    //   'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
    //   'application/vnd.ms-excel': ['.xls'],
    // },
    accept: {},
  });

  return (
    <>
      <h5>Bulk Emails Upload</h5>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #007BFF',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '8px',
          cursor: 'pointer',
          width: '100%',
          margin: 'auto',
        }}
      >
        <input {...getInputProps()} />
        <AiFillFileExcel size={50} color="#107C10" />
        <p>
          {isDragActive ? 'Drop the Excel file here...' : 'Drag and drop an Excel file here, or click to select'}
        </p>
      </div>

      {file && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>Selected File: {file.name}</p>
          <button onClick={handleUpload} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Upload File
          </button>
        </div>
      )}

      {message && (
        <p style={{ marginTop: '10px', color: message.includes("success") ? "green" : "red", textAlign: "center" }}>
          {message}
        </p>
      )}
    </>
  );
};

export default ExcelUpload;