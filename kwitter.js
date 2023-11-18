function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyB2MNvNsRxkcIb_AWEyPxIb8mlpTHYEK-c",
    authDomain: "kwitter-ca917.firebaseapp.com",
    databaseURL: "https://kwitter-ca917-default-rtdb.firebaseio.com",
    projectId: "kwitter-ca917",
    storageBucket: "kwitter-ca917.appspot.com",
    messagingSenderId: "908040585876",
    appId: "1:908040585876:web:0a2b52a4b32f81b48b6a81"
  };
  firebase.initializeApp(firebaseConfig);
