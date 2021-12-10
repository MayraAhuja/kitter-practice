const firebaseConfig = {
    apiKey: "AIzaSyA7Pw2NKopq6BrCwyIAlITTlyikNkbIu3E",
    authDomain: "lastchance-dc641.firebaseapp.com",
    databaseURL: "https://lastchance-dc641-default-rtdb.firebaseio.com",
    projectId: "lastchance-dc641",
    storageBucket: "lastchance-dc641.appspot.com",
    messagingSenderId: "217935306667",
    appId: "1:217935306667:web:dfd60b39b6c9f621537cee"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser() {
      var username= document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
          testing:"how do add data",
          tseting2:"how do you become smart"
      }); 
  }