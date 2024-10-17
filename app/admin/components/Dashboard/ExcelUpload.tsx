'use client'
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillFileExcel } from 'react-icons/ai'; // Excel icon from react-icons

const ExcelUpload = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Process the files here (e.g., upload, read, etc.)
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
    },
  });

  return (
    <>
    <h5>Bulk Emails Upload</h5>
    <div {...getRootProps()} 
         style={{
           border: '2px dashed #007BFF', 
           padding: '20px', 
           textAlign: 'center', 
           borderRadius: '8px', 
           cursor: 'pointer',
           width: '100%', 
           margin: 'auto',
         }}>
      <input {...getInputProps()} />
      <AiFillFileExcel size={50} color="#107C10" />
      <p>
        {isDragActive ? 'Drop the Excel file here...' : 'Drag and drop an Excel file here, or click to select'}
      </p>
    </div>
    </>
  );
};

export default ExcelUpload;
