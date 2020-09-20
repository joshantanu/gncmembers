import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { firestore, updateMemberYearlyData } from "../firebase/firebase.utils";
import AutoComplete from "./AutoComplete";

function UpdateMonthlyData() {
  const [validated, setValidated] = useState(false);
  const [membersData, setMembersData] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    // updateMemberYearlyData(101,{
    //   "2020": {
    //     Sept: {
    //       mode: "online",
    //       maint: 1500,
    //       note: "jan",
    //       lateFee: 0
    //     }
    //   }
    // })
  };

  useEffect(()=>{
    firestore
        .doc("members/register")
        .get()
        .then((querySnapshot) => {
          // querySnapshot.forEach((doc) => {
          //console.log("get-register>>",JSON.stringify(querySnapshot.data()));
          setMembersData(querySnapshot.data())
          //  });
        });
  },[])

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Row} md="4" controlId="validationCustom01">
        <Form.Label>Month &amp; Year</Form.Label>

        <Form.Group as={Col} controlId="month">
          <Form.Control as="select" defaultValue="Sep" >
            <option>Choose...</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">Aug</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>

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
        <AutoComplete membersData={membersData} />
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
        <Form.Label>Late Fee</Form.Label>
        <Form.Control
          type="text"
          placeholder="Late Fee"
        />
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
