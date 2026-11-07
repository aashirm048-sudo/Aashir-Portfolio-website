import { auth } from "./FirebaseConfig.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;

  if (!email || !password ||!name) {
    return alert("Please enter Email Password and name");
  }
  createUserWithEmailAndPassword(auth, email, password,name)

    .then((userCredential) => {
      const user = userCredential.user;

      alert("User Created Successfully!");
      console.log(user);
    })

    .catch((error) => {
      alert(error.message);
    });

});