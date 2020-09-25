import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDW_zMesDfN3E2nIwFY53ghN5s_Kf57YfI",
  authDomain: "gncmembers-b6908.firebaseapp.com",
  databaseURL: "https://gncmembers-b6908.firebaseio.com",
  projectId: "gncmembers-b6908",
  storageBucket: "gncmembers-b6908.appspot.com",
  messagingSenderId: "1095855812949",
  appId: "1:1095855812949:web:9d6ca6a484c686aa787fdc"
};
// Initialize Firebase
const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(app);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const updateMemberYearlyData = (flatNumber, data, callback) => {
  firestore
    .doc(`members/${flatNumber}`)
    .set(
      {
        years: data
      },
      { merge: true }
    )
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export const getDuesData = (callback) => {
     firestore
        .collection("members")
        .get()
        .then((querySnapshot) => {
          let members = [];
          querySnapshot.forEach((doc) => {
            members.push(doc.data());
          });
          members.pop()
          callback(members);
          //console.log("members", members)
        });
}

export default firebase;
