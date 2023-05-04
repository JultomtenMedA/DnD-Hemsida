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
var find_name = document.querySelector("#find_name");
var find_character_name = document.querySelector("#find_character_name");

var find_hp = document.querySelector("#find_hp");
var find_ac = document.querySelector("#find_ac");

var find_str = document.querySelector("#find_str"); 
var find_dex = document.querySelector("#find_dex");
var find_con = document.querySelector("#find_con");
var find_int = document.querySelector("#find_int");
var find_wis = document.querySelector("#find_wis");
var find_cha = document.querySelector("#find_cha");

var find_pp = document.querySelector("#find_pp");
var find_gp = document.querySelector("#find_gp");
var find_sp = document.querySelector("#find_sp");
var find_cp = document.querySelector("#find_cp");

var find_abilities = document.querySelector("#find_abilities");
var find_inventory = document.querySelector("#find_inventory");
var find_weapons = document.querySelector("#find_weapons");

var findBtn = document.querySelector("#find");

function FindDataCp1(){
    const dbref = ref(db);
    get(child(dbref, 'DnD/campaign1/' + find_id.value)).then((snapshot) => {
        if (snapshot.exists()) {
            find_name.innerHTML = "Name: " + snapshot.val().Name;
            find_character_name.innerHTML = "Character Name: " + snapshot.val().CharacterName;
            find_hp.innerHTML = "Hp: " + snapshot.val().Hp;
            find_ac.innerHTML = "Ac: " + snapshot.val().Ac;

            find_str.innerHTML = "Strength: " + snapshot.val().Strength;
            find_dex.innerHTML = "Dexterity: " + snapshot.val().Dexterity;
            find_con.innerHTML = "Constitution: " + snapshot.val().Constitution;
            find_int.innerHTML = "Intelligence: " + snapshot.val().Intelligence;
            find_wis.innerHTML = "Wisdom: " + snapshot.val().Wisdom;
            find_cha.innerHTML = "Charisma: " + snapshot.val().Charisma;

            find_pp.innerHTML = "Pp: " + snapshot.val().Pp;
            find_gp.innerHTML = "Gp: " + snapshot.val().Gp;
            find_sp.innerHTML = "Sp: " + snapshot.val().Sp;
            find_cp.innerHTML = "Cp: " + snapshot.val().Cp;
        } else {
            alert("No data available");
        }
    }).catch((error) => {
        alert(error);
    });
}
findBtn.addEventListener("click", FindDataCp1);