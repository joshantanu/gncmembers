import React, { useState, useEffect } from "react";

import "./App.css";

import { auth, firestore, updateMemberYearlyData } from "./firebase/firebase.utils";
import Header from './components/Header';
//import DataGrid from './components/DataGrid';
import DataGrid from './components/IndividualView';
import UpdateMonthlyData from './components/UpdateMonthlyData';

function App() {
  const [user, setUser] = useState("Guest");
  const [members, setMembers] = useState([]);
  let unsubscribeFromAuth = null;
  // useEffect(() => {
  //   unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
  //     console.log(user);
  //     if(!user) return false;
  //     setUser(user.displayName);

  //     firestore
  //       .collection("members")
  //       .get()
  //       .then((querySnapshot) => {
  //         let members = [];
  //         querySnapshot.forEach((doc) => {
  //           members.push(doc.data());
  //         });
  //         members.pop()
  //         setMembers(members)
  //         console.log("members", members)
  //       });

  //     // firestore
  //     //   .doc("members/register")
  //     //   .get()
  //     //   .then((querySnapshot) => {
  //     //     // querySnapshot.forEach((doc) => {
  //     //     console.log("get-register>>",JSON.stringify(querySnapshot.data()));
  //     //     //  });
  //     //   });


        
  //     // firestore.doc("members/207").set(
  //     //   {
  //     //     "years":{
  //     //        "2019":{
  //     //           "Sept":{
  //     //              "mode":"online",
  //     //              "maint":1500,
  //     //              "note":"jan",
  //     //              "lateFee":0
  //     //           }
  //     //        }
  //     //     },
  //     //     "tenentName":"",
  //     //     "isRented":false,
  //     //     "prevDue":0,
  //     //     "comment":"placeholder",
  //     //     "name":"Gajanan Keskar",
  //     //     "id":207
  //     //  },
  //     //   { merge: true }
  //     // );

  //     //  members.get().then(function(doc) {
  //     //    // if (doc.exists) {
  //     //         console.log("Document data:", doc);
  //     //     // } else {
  //     //     //     // doc.data() will be undefined in this case
  //     //     //     console.log("No such document!");
  //     //     // }
  //     //   })
  //   });

  //   return function cleanup() {
  //     unsubscribeFromAuth();
  //   };
  // }, []);

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
