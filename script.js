  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBEFgOTPipELKXn4YdLXa37Ciz4azGPJh8",
    authDomain: "js17-firebase-2.firebaseapp.com",
    projectId: "js17-firebase-2",
    storageBucket: "js17-firebase-2.appspot.com",
    messagingSenderId: "498657327413",
    appId: "1:498657327413:web:79a6a039abce355329347c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {getDatabase, ref, set, get, child, update, remove}
  from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js"

  const db = getDatabase();

  //----------------------References------------------------//
  var IDbox = document.getElementById("enterID");  
  var namebox = document.getElementById("enterName");  
  var agebox = document.getElementById("enterAge");  
  var findID = document.getElementById("findID");

  var findName = document.getElementById("findName")
  var findAge = document.getElementById("findAge")
  
  var insBtn = document.getElementById("insBtn");
  var updBtn = document.getElementById("updBtn");
  var delBtn = document.getElementById("delBtn");
  var findBtn = document.getElementById("findBtn");

  //-------------------Insert Data Function------------------//
  function insertData() {
    set(ref(db, "People/"+ IDbox.value),{
      Name: namebox.value,
      ID: IDbox.value,
      Age: agebox.value
    })
    .then(()=>{
      alert("Data stored succesfully")
    })
    .catch((error)=>{
      alert("Unsuccesful, error"+error)
    });
  }

  //-------------------Update Data Function-------------------//
  function updateData() {
    update(ref(db, "People/"+ IDbox.value),{
      Name: namebox.value,
      ID: IDbox.value,
      Age: agebox.value
    })
    .then(()=>{
      alert("Data updated succesfully")
    })
    .catch((error)=>{
      alert("Unsuccesful, error"+error)
    });
  }

  //-------------------Delete Data Function-------------------//
  function deleteData() {
    remove(ref(db, "People/"+ IDbox.value))
    .then(()=>{
      alert("Data removed succesfully")
    })
    .catch((error)=>{
      alert("Unsuccesful, error"+error)
    });
  }

  //-------------------Select Data Function-------------------//
  function findData() {
    const dbref = ref(db);

    get(child(dbref,"People/"+ findID.value)).then((snapshot)=>{
      if(snapshot.exists()){
        findName.innerHTML = "Name: " + snapshot.val().Name;
        findAge.innerHTML = "Age: " + snapshot.val().Age;
      }
      else {
        alert("No data found")
      }
    })
    .catch((error)=>{
      alert("Unsuccesful, error"+error)
    });
  }

  //-------------------Asign Events To Btns------------------//
  insBtn.addEventListener("click", insertData);
  updBtn.addEventListener("click", updateData);
  delBtn.addEventListener("click", deleteData);
  findBtn.addEventListener("click", findData);