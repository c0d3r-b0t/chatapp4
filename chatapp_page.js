var firebaseConfig = {
      apiKey: "AIzaSyAmY5iEyWh4tnRyN-incUXmWFRqzMzxBsQ",
      authDomain: "chat-app-2393a.firebaseapp.com",
      projectId: "chat-app-2393a",
      storageBucket: "chat-app-2393a.appspot.com",
      messagingSenderId: "859488635523",
      appId: "1:859488635523:web:95fb1a3aeef01bde3929b6"
    };

    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
    }
