import React, { useState, useEffect } from "react";
import { getDuesData } from "../firebase/firebase.utils";

const Dues = () => {
  const [duesData, setDuesData] = useState({});

  useEffect(() => {
    getDuesData(setDuesData);
  }, []);

  useEffect(() => {

    //array manupulation

  }, [duesData]);

  return (
    <React.Fragment>
      <h1>Dues </h1>
    </React.Fragment>
  );
};
export default Dues;
