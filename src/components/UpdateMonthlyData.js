import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { firestore, updateMemberYearlyData } from "../firebase/firebase.utils";
import AutoComplete from "./AutoComplete";

function UpdateMonthlyData() {
  const [validated, setValidated] = useState(false);
  const [membersData, setMembersData] = useState(false);
  const [formData, setFormData] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    console.log(form)
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

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

  const setFormControlValue = e => {
    console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }

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
      <Form.Group as={Row} md="4">
        <Form.Label>Month &amp; Year</Form.Label>

        <Form.Group as={Col}>
          <Form.Control as="select" defaultValue="Sep" id="month" onChange={setFormControlValue} >
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
        <Form.Group as={Col}>
          <Form.Control as="select" defaultValue="2020" id="year" onChange={setFormControlValue}>
            <option>Choose...</option>
            <option>2019</option>
            <option>2020</option>
          </Form.Control>
        </Form.Group>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
 {console.log(formData)}
      <Form.Group as={Row} md="4">
        <Form.Label>Depositor's Name</Form.Label>
        <AutoComplete membersData={membersData} id="flat" setFormControlValue={setFormControlValue} />
      </Form.Group>

      <Form.Group as={Row} md="4">
        <Form.Label>Flat #</Form.Label>

        <Form.Label>{formData.flat}</Form.Label>
      </Form.Group>

      <Form.Group as={Row} md="4">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Amount"
          defaultValue="1500"
          id="amount" onChange={setFormControlValue}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Row} md="4">
        <Form.Label>Late Fee</Form.Label>
        <Form.Control
          type="text"
          placeholder="Late Fee"
          id="lateFee" onChange={setFormControlValue}
        />
      </Form.Group>
      <Form.Group as={Row} md="4">
        <Form.Label>Note</Form.Label>
        <Form.Control type="text" placeholder="Note" defaultValue="" id="note" onChange={setFormControlValue}/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default UpdateMonthlyData;
