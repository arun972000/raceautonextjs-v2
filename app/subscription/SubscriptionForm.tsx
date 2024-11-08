import React, { useState } from "react";


const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    username: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="container shadow my-5 p-4">
            <h1 className="text-center mb-4">Subscription Form</h1>
            <form>
              <div className="row mb-3">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="formTitle">Title</label>
                    <select
                      className="form-control"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      id="formTitle"
                    >
                      <option value="">Select...</option>
                      <option value="Mr">Mr</option>
                      <option value="Ms">Ms</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="form-group">
                    <label htmlFor="formName">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your name"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      id="formName"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="formEmail">Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="formEmail"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="formPhone">Phone Number</label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  id="formPhone"
                />
              </div>

              <div className="payment-info mb-3">
                <h4>Subscribe using any of the payment methods below:</h4>
                <p>Account Name: RACE EDITORIALE LLP</p>
                <p>Account Number: 218505001886</p>
                <p>IFSC: ICIC0002185</p>
                <p>Branch Name: Saidapet Branch</p>
              </div>
              <hr />
              <div className="payment-info mb-3">
                <p>UPI ID: raceeditorialellp.9840490241.ibz@icici</p>
              </div>
              <hr />

              <div className="d-flex justify-content-center mb-3">
                {/* <Image src={scanner} fill alt="scanner" className="img-thumbnail" /> */}
              </div>
              <hr />

              <div className="form-group mb-3">
                <label htmlFor="formFile">
                  Upload your payment proof (screenshot or PDF)
                </label>
                <input
                  className="form-control-file"
                  type="file"
                  accept="image/*,.pdf"
                  required
                  id="formFile"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary submit-button">
                  Submit
                </button>
              </div>

              <p className="mt-3 text-center" style={{ fontSize: "1rem" }}>
                For any queries, contact us at: 9384857579, 9003031527
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
