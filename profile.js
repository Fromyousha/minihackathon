import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getStorage, ref, uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import {getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 

const firebaseConfig = {
    apiKey: "AIzaSyA5q_F3UUE6re_u3eodMoLqDbwgNnRcF7U",
    authDomain: "project-d6bc6.firebaseapp.com",
    projectId: "project-d6bc6",
    storageBucket: "project-d6bc6.appspot.com",
    messagingSenderId: "195227400536",
    appId: "1:195227400536:web:4fa21fefe9da1bdc964d2d"
  };
 
 const btn = document.getElementById("btn")
 btn.addEventListener('click',async()=>{



   const storage = getStorage();

   const file = document.getElementById("fileimg").files[0]
   
   
   
const storageRef = ref(storage, 'zunair');

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  alert("upload");
});



     getDownloadURL(ref(storage, 'zunair'))
     .then((url) => {
     
       const img = document.getElementById('myimg');
       img.setAttribute('src', url);
          
     })
     .catch((error) => {
       // Handle any errors
       console.log(error);
     });


     const name = document.getElementById("pname").value;
     const oldPass = document.getElementById("opass").value;
     const newPass = document.getElementById("npass").value;
     const repPass = document.getElementById("rpass").value;

     try {
        const docRef = await addDoc(collection(db, "zunair"), {
          name : name,
          oldPass : oldPass,
          NewPass : newPass,
          RepPass : repPass
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})







// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const db = getFirestore(app);
