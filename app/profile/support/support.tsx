"use client";
import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function HelpSupport() {
  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">How can we help you?</h1>
      </div>

      {/* Content Section */}
      <Card className="shadow p-4 border-0 rounded-3">
        <Row>
          {/* Help & Support Text */}
          <Col
            md={6}
            className="d-flex flex-column justify-content-center mb-4 mb-md-0"
          >
            <h4 className="fw-semibold mb-3">Help & Support</h4>
            <p>
              If you encounter any issues on our website, please fill out this
              form. Our technical team will contact you within 24 hours. Thank
              you.
            </p>
          </Col>

          {/* Form Section */}
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your Name"
                  className="rounded p-2"
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter Email*"
                  className="rounded p-2"
                />
              </Form.Group>

              <Form.Group controlId="formEnquiries" className="mb-3">
                <Form.Control as="select" className="rounded p-2">
                  <option>Select Enquiries</option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your Message"
                  className="rounded p-2"
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" className="rounded px-4 py-2">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default HelpSupport;
