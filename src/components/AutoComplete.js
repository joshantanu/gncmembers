import React, { useState } from "react";
import { FormControl, Dropdown } from "react-bootstrap";
//import { deflate } from 'zlib';
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const AutoComplete = props => {
  let [members, setMembers] = useState(props.membersData);
  let [value, setValue] = useState("");
  let [show, setShow] = useState(false);

  const onchangeHandler = e => {
    console.log(e.target.value);
    let newVal = Object.keys(props.membersData).filter(
      child =>
        !e.target.value || child.toLowerCase().indexOf(e.target.value) >= 0
    );

    setValue(e.target.value);
    setMembers(newVal);
    setShow(true)
  };

  const onItemClick = e => {
    console.log(e.target.value);
  };

  console.log("inautocomplete>>", props.membersData, value, members);
  return (
    <React.Fragment>
    
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={onchangeHandler}
          value={value}
          autocomplete="off"
        />
      <Dropdown>
        <Dropdown.Menu show={show}>
          {members &&
            members.map((key, index) => (
              <Dropdown.Item
                eventKey={index}
                key={index}
                value={props.membersData[key]}
                
              >
                <span onClick={onItemClick}>{key}</span>
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};

export default AutoComplete;
