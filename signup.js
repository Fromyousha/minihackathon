import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCp7l3gm5hIG0wpP5mUkWZ9V-8Ud5WdChw",
    authDomain: "hackathonnew-9f0da.firebaseapp.com",
    projectId: "hackathonnew-9f0da",
    storageBucket: "hackathonnew-9f0da.appspot.com",
    messagingSenderId: "469381251771",
    appId: "1:469381251771:web:316fccd565a827024c1f9e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const btn = document.getElementById("signup")
btn.addEventListener('click',async()=>{

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
         window.location.href = "./login.html"
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode);
          console.log(errorMessage);
      });




      const fName = document.getElementById("first-name").value;
      const lname = document.getElementById("last-name").value;
      const useremail = document.getElementById("email").value;
      const userPass = document.getElementById("password").value;
      const conPass = document.getElementById("confirm-password").value;
 
      try {
         const docRef = await addDoc(collection(db, "yousha"), {
        firstName : fName,
        LastName : lname,
        UserEmail : useremail,
        UserPass : userPass,
        ConPass : conPass
         });
         console.log("Document written with ID: ", docRef.id);
       } catch (e) {
         console.error("Error adding document: ", e);
       }
  })
