// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXVjhevpXW4CdYooZXa3M67hJIK9xLzuU",
  authDomain: "webbutveckling-slutp.firebaseapp.com",
  databaseURL: "https://webbutveckling-slutp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webbutveckling-slutp",
  storageBucket: "webbutveckling-slutp.appspot.com",
  messagingSenderId: "410982662212",
  appId: "1:410982662212:web:23576dadb713ca5c56fc11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, set, get, update, remove, ref, child}
from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

const db = getDatabase();

var enter_sesion = document.querySelector("#enter_sesion");
var enter_notes = document.querySelector("#enter_notes");

var insertBtn = document.querySelector("#save");
var removeBtn = document.querySelector("#remove");

function InsertData(){
  set(ref(db, "DnD/campaign1/Sesion/" + enter_sesion.value), {
      Notes: enter_notes.value,
  })
  .then(()=>{
      alert("Data saved");
  })
  .catch((error)=>{
      alert(error);
  });
}

function RemoveData(){
  remove(ref(db, "DnD/campaign1/Sesion/" + enter_sesion.value))
  .then(()=>{
      alert("Data removed");
  })
  .catch((error)=>{
      alert(error);
  });
}

insertBtn.addEventListener("click", InsertData);
removeBtn.addEventListener("click", RemoveData);