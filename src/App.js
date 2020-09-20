import React, { useState, useEffect } from "react";

import "./App.css";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

import { auth, firestore } from "./firebase/firebase.utils";
import Header from './components/Header';
//import DataGrid from './components/DataGrid';
import DataGrid from './components/IndividualView';
import UpdateMonthlyData from './components/UpdateMonthlyData';

function App() {
  const [user, setUser] = useState("Guest");
  const [members, setMembers] = useState([]);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      //console.log(user);
      setUser(user.displayName);

      firestore
        .collection("members")
        .get()
        .then((querySnapshot) => {
          let members = [];
          querySnapshot.forEach((doc) => {
            members.push(doc.data());
          });
          setMembers(members)
          console.log("members", members)
        });

      firestore
        .doc("members/105")
        .get()
        .then((querySnapshot) => {
          // querySnapshot.forEach((doc) => {
          console.log("get-105>>",querySnapshot.data());
          //  });
        });

      // firestore.doc("members/105").set(
      //   {
      //     collection : {
      //       "2019": {
      //         "jan":{
      //           lateFee: 0,
      //           maint: 1500,
      //           mode: "online",
      //           note: "jan",
      //         }
      //       }
      //     }
      //   },
      //   { merge: true }
      // );

      //  members.get().then(function(doc) {
      //    // if (doc.exists) {
      //         console.log("Document data:", doc);
      //     // } else {
      //     //     // doc.data() will be undefined in this case
      //     //     console.log("No such document!");
      //     // }
      //   })
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      Welcome {user}!
      <UpdateMonthlyData />
      <DataGrid data={members} />
    </div>
  );
}

export default App;
