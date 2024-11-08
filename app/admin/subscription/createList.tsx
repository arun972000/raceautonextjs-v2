"use client";
/* eslint-disable react/prop-types */
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const PlanForm = () => {
  const router = useRouter();
  const [planName, setPlanName] = useState("");
  const [planTypes, setPlanTypes] = useState({
    platinum: false,
    gold: false,
    silver: false,
    bronze: false,
  });

  const handleInputChange = (e: any) => {
    const { value, checked, type } = e.target;
    if (type === "checkbox") {
      setPlanTypes((prevPlanTypes) => ({
        ...prevPlanTypes,
        [value]: checked,
      }));
    } else {
      setPlanName(value);
    }
  };

  const createTable = async () => {
    const formdata = { ...planTypes, plan: planName };
    try {
      await axios.post(
        `${process.env.BACKEND_URL}api/admin/subscription`,
        formdata
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTable();
    router.refresh()
    setPlanName("");
    setPlanTypes({
      ...planTypes,
      platinum: false,
      gold: false,
      silver: false,
      bronze: false,
    });
  };
  return (
    <>
      <tr>
        <td>
          <Form.Group controlId="formPlanName">
            <Form.Control
              type="text"
              placeholder="Plan Name"
              value={planName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </td>
        <td>
          <Form.Check
            type="checkbox"
            name="planType"
            value="platinum"
            checked={planTypes.platinum}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <Form.Check
            type="checkbox"
            name="planType"
            value="gold"
            checked={planTypes.gold}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <Form.Check
            type="checkbox"
            name="planType"
            value="silver"
            checked={planTypes.silver}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <Form.Check
            type="checkbox"
            name="planType"
            value="bronze"
            checked={planTypes.bronze}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <Form.Group>
            <Button onClick={handleSubmit}>Submit</Button>
          </Form.Group>
        </td>
      </tr>
    </>
  );
};

export default PlanForm;
