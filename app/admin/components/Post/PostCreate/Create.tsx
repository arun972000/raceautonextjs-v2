'use client'
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {toast } from "react-toastify";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
import "./create.css"; // Custom CSS file for additional styling

export default function AdminPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    tags: "",
    category: "",
    subCategory: "",
    market: "",
    content: "",
    keywords: "",
    image: null,
    imageDescription: "",
    schedule: "",
    slider: false,
    featured: false,
    recommended: false,
    breaking: false,
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e: any) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const checkMissingFields = () => {
    const missingFields = [];

    if (!formData.title) missingFields.push("Title");
    if (!formData.summary) missingFields.push("Summary");
    if (!formData.category) missingFields.push("Category");
    if (!formData.image) missingFields.push("Image");
    if (!formData.content) missingFields.push("Content");

    return missingFields;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const missingFields = checkMissingFields();

    if (missingFields.length > 0) {
      toast.error(
        `Please fill in the following fields: ${missingFields.join(", ")}`
      );
      return;
    }

    // Submit form to the server
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/admin/create-post`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success("Post submitted successfully!");
      router.refresh();
    } catch (error) {
      toast.error("Failed to submit post.");
      console.log(error);
    }
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg form-card">
        <h1 className="text-center mb-4">Create New Post</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col md={8}>
              <Form.Group className="mb-4" controlId="title">
                <Form.Label className="form-label">Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Title is required.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="summary">
                <Form.Label className="form-label">Summary</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Summary is required.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="content">
                <Form.Label className="form-label">Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Write your content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Content is required.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-4" controlId="category">
                <Form.Label className="form-label">Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Category is required.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="subCategory">
                <Form.Label className="form-label">Sub Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter sub category"
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="image">
                <Form.Label className="form-label">Select Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="form-input"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please upload an image.
                </Form.Control.Feedback>
                <small className="text-muted">Max 5MB image size.</small>
              </Form.Group>

              <Form.Group className="mb-4" controlId="schedule">
                <Form.Label className="form-label">
                  Schedule Date and Time
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="tags">
                <Form.Label className="form-label">Tags</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add a tag"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Slider"
                  name="slider"
                  checked={formData.slider}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <Form.Check
                  type="checkbox"
                  label="Featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <Form.Check
                  type="checkbox"
                  label="Recommended"
                  name="recommended"
                  checked={formData.recommended}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <Form.Check
                  type="checkbox"
                  label="Breaking"
                  name="breaking"
                  checked={formData.breaking}
                  onChange={handleChange}
                  className="form-checkbox"
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className="btn btn-primary submit-btn">
            Submit Post
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
