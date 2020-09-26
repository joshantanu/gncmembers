import React, { useState, useEffect } from "react";
import { getDuesData } from "../firebase/firebase.utils";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const Dues = () => {
  const [duesData, setDuesData] = useState([]);
  const [dueMembers, setDueMembers] = useState([]);

  useEffect(() => {
    getDuesData(setDuesData);
    
  }, []);

  useEffect(() => {
  //  const data = {
  //     "comment":"placeholder",
  //     "prevDue":0,
  //     "id":406,
  //     "isRented":false,
  //     "tenentName":"",
  //     "name":"Shantanu Joshi",
  //     "years":{
  //       "2020":{
  //         "Jul":{
  //           "lateFee":0,
  //           "note":"paid",
  //           "maint":1500
  //         },
  //         "Aug":{
  //           "maint":1500,
  //           "note":"again",
  //           "lateFee":""
  //         }
  //       }
  //     }
  //   }

    // const expectedData = {
    //   id:406,
    //   name:"shantanu",
    //   months: "2020:jun, july",
    //   maintDue: 1541,
    //   lateFee: 5456,
    //   totalDue: 654654
    // }
    
    const dueMembers = []
    duesData.forEach(member => {
      const id = member.id;
      const name = member.name;
      let months = "";
      let maintDue = 0;
      let lateFee = 0;
      let totalDue = 0;

      Object.keys(member.years).forEach(year => {
        months += `${year}: `;

        Object.keys(member.years[year]).forEach(mth => {
         const thisYear = member.years[year];
          //console.log(id,member.years[year][mth])
          if(thisYear[mth].maint){
            months += `${mth}, `;
            maintDue += eval(thisYear[mth].maint);
            lateFee += thisYear[mth].lateFee == "" ? 0 : eval(thisYear[mth].lateFee);
            totalDue = maintDue+lateFee;
          }
          
        });

        
      });

        dueMembers.push({
          id,
          name,
          months,
          maintDue,
          lateFee,
          totalDue
        })

       
    }); 
    
    setDueMembers(dueMembers)

  }, [duesData]);

  return (
    <React.Fragment>
      <h1>Dues</h1>
      <BootstrapTable data={dueMembers} striped version='4'>
            <TableHeaderColumn isKey dataField='id' dataSort={ true }>Flat Number</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Owner Name</TableHeaderColumn>
            <TableHeaderColumn dataField='months'>Description</TableHeaderColumn>
            <TableHeaderColumn dataField='maintDue'>Maintanance Due</TableHeaderColumn>
            <TableHeaderColumn dataField='lateFee'>Late Fee</TableHeaderColumn>
            <TableHeaderColumn dataField='totalDue'>Total Due</TableHeaderColumn>
        </BootstrapTable>
    </React.Fragment>
  );
};
export default Dues;
