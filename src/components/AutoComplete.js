import React, { useState } from "react";
import { FormControl, Dropdown } from "react-bootstrap";
//import { deflate } from 'zlib';
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const AutoComplete = props => {
  let [members, setMembers] = useState(props.membersData);
  let [filterVal, setFilterVal] = useState(props.name);

  const onchangeHandler = e => {
    console.log(e.target.value);
    let newVal = Object.keys(props.membersData).filter(
      child =>
        !e.target.value || child.toLowerCase().indexOf(e.target.value) >= 0
    );

    setFilterVal(e.target.value);
    setMembers(newVal);
  };

  const onItemClick = e => {
    
    setFilterVal(e.target.innerText);
    setMembers(null);
    props.setFormControlValue(e)

  };

  return (
    <div>
    
        <FormControl
          required
          placeholder="Type to filter..."
          onChange={onchangeHandler}
          value={filterVal}
          autoComplete="off"
        />
      {(members && filterVal) && <ul className="dropdown">
        
          {members.map((key, index) => (
              <li
                key={index}
                value={props.membersData[key]}
                onClick={onItemClick}
                id={"flat"}
              >
                {key}
              </li>
            ))}
         
          </ul> }
    </div>
  );
};

export default AutoComplete;
