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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  console.log("room_name " +room_name);
  console.log("user_name " +user_name);

  function send(){
    Msg = document.getElementById("msg_input").value;
    console.log("Message "+Msg);
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
          dislike:0
    });

        
    document.getElementById("msg_input").value = "";
    
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }