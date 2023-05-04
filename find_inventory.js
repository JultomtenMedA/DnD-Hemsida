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

var find_id = document.querySelector("#find_id");
var find_character_name = document.querySelector("#find_character_name");

var find_abilities = document.querySelector("#find_abilities");
var find_inventory = document.querySelector("#find_inventory");
var find_weapons = document.querySelector("#find_weapons");

var findBtn = document.querySelector("#find");

function FindDataCp1(){
    const dbref = ref(db);
    get(child(dbref, 'DnD/campaign1/' + find_id.value)).then((snapshot) => {
        if (snapshot.exists()) {
            find_character_name.innerHTML = "Character Name: " + snapshot.val().CharacterName;
            find_abilities.innerHTML = "Abilities: " + snapshot.val().Abilities;
            find_weapons.innerHTML = "Weapons: " + snapshot.val().Weapons;
            find_inventory.innerHTML = "Inventory: " + snapshot.val().Inventory;
        } else {
            alert("No data available");
        }
    }).catch((error) => {
        alert(error);
    });
}
findBtn.addEventListener("click", FindDataCp1);