import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function UpdateMonthlyData() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Row} md="4" controlId="validationCustom01">
        <Form.Label>Month &amp; Year</Form.Label>

        <Form.Group as={Col} controlId="month">
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>January</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="Year">
          <Form.Control as="select" defaultValue="2020">
            <option>Choose...</option>
            <option>2019</option>
            <option>2020</option>
          </Form.Control>
        </Form.Group>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Row} md="4" controlId="month">
        <Form.Label>Depositor's Name</Form.Label>
        <Form.Control as="select">
          <option>Choose...</option>
          <option>January</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Row} md="4" controlId="month">
        <Form.Label>Flat #</Form.Label>

        <Form.Label>406</Form.Label>
      </Form.Group>

      <Form.Group as={Row} md="4" controlId="validationCustom02">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Amount"
          defaultValue="1500"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Row} md="4" controlId="validationCustom02">
        <Form.Label>Note</Form.Label>
        <Form.Control required type="text" placeholder="Note" defaultValue="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default UpdateMonthlyData;
