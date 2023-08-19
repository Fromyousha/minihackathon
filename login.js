import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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

const btn1 = document.getElementById("login2")
btn1.addEventListener('click',()=>{
const email1 = document.getElementById("email").value
const password1 = document.getElementById("password").value
const sign = document.getElementById("sign")    
    signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        window.location.href = "./index.html"
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert("Wrong Email and password");
        window.location.href = "./signup.html"
    });
})
    
