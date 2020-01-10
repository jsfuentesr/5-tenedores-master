import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVcHLHRXReEEiUZXN4_SBAoOtPDVo0D7I",
  authDomain: "bissnet-11a78.firebaseapp.com",
  databaseURL: "https://bissnet-11a78.firebaseio.com",
  projectId: "bissnet-11a78",
  storageBucket: "bissnet-11a78.appspot.com",
  messagingSenderId: "1083598393463",
  appId: "1:1083598393463:web:44afe1dd0d609561527672",
  measurementId: "G-10VCRVL4NK"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
