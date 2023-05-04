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

var enter_campaign = document.querySelector("#enter_campaign");

var enter_name = document.querySelector("#enter_name");
var enter_character_name = document.querySelector("#enter_character_name");
var enter_hp = document.querySelector("#enter_hp");
var enter_ac = document.querySelector("#enter_ac");

var enter_str = document.querySelector("#enter_str");
var enter_dex = document.querySelector("#enter_dex");
var enter_con = document.querySelector("#enter_con");
var enter_int = document.querySelector("#enter_int");
var enter_wis = document.querySelector("#enter_wis");
var enter_cha = document.querySelector("#enter_cha");

var enter_pp = document.querySelector("#enter_pp");
var enter_gp = document.querySelector("#enter_gp");
var enter_sp = document.querySelector("#enter_sp");
var enter_cp = document.querySelector("#enter_cp");
var enter_abilities = document.querySelector("#enter_abilities");
var enter_inventory = document.querySelector("#enter_inventory");
var enter_weapons = document.querySelector("#enter_weapons");

var insertBtn = document.querySelector("#insert"); 
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");

    
function InsertData(){
  set(ref(db, "DnD/" + enter_campaign.value + "/" + enter_character_name.value), {
      Name: enter_name.value,
      CharacterName: enter_character_name.value,
      Campaign: enter_campaign.value,

      Ac: enter_ac.value,
      Hp: enter_hp.value,

      Strength: enter_str.value,
      Dexterity: enter_dex.value,
      Constitution: enter_con.value,
      Intelligence: enter_int.value,
      Wisdom: enter_wis.value,
      Charisma: enter_cha.value,

      Abilities: enter_abilities.value,
      Inventory: enter_inventory.value,
      Weapons: enter_weapons.value,

      Pp: enter_pp.value,
      Gp: enter_gp.value,
      Sp: enter_sp.value,
      Cp: enter_cp.value,
  })
  .then(()=>{
      alert("Data saved");
  })
  .catch((error)=>{
      alert(error);
  });
}

function UpdateDataCp1(){
    var id = enter_character_name.value;
    var name = enter_name.value;

    var hp = enter_hp.value;
    var ac = enter_ac.value;
    
    var strength = enter_str.value;
    var dexterity = enter_dex.value;
    var constitution = enter_con.value;
    var intelligence = enter_int.value;
    var wisdom = enter_wis.value;
    var charisma = enter_cha.value;
    var abilities = enter_abilities.value;

    var pp = enter_pp.value;
    var gp = enter_gp.value;
    var sp = enter_sp.value;
    var cp = enter_cp.value;

    var abilities = enter_abilities.value;
    var inventory = enter_inventory.value;
    var weapons = enter_weapons.value;



    update(ref(db, 'DnD/campaign1/' + id), {
         Name: name,
         Hp: hp,
         Ac: ac,
         
         Strength: strength,
         Dexterity: dexterity,
         Constitution: constitution,
         Intelligence: intelligence,
         Wisdom: wisdom,
         Charisma: charisma,
         
         Pp: pp,
         Gp: gp,
         Sp: sp,
         Cp: cp,

         Abilities: abilities,
         Inventory: inventory,
         Weapons: weapons
    })
    .then(() => {
        alert("Data updated");
    })
    .catch((error) => {
        alert(error);
    });
}

function RemoveDataCp1(){
    var id = enter_character_name.value;

    remove(ref(db, 'DnD/campaign1/' + id))
    .then(() => {
        alert("Data removed");
    })
    .catch((error) => {
        alert(error);
    });
}

insertBtn.addEventListener("click", InsertData);
updateBtn.addEventListener("click", UpdateDataCp1);
removeBtn.addEventListener("click", RemoveDataCp1);