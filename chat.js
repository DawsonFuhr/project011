// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBCWOkp3Q4W4RwAoV26AqWazySMb-gmz7k",
    authDomain: "project102-c455f.firebaseapp.com",
    databaseURL: "https://project102-c455f-default-rtdb.firebaseio.com",
    projectId: "project102-c455f",
    storageBucket: "project102-c455f.appspot.com",
    messagingSenderId: "699457490681",
    appId: "1:699457490681:web:f58705504941516dda1c28",
    measurementId: "G-P1P6510BE5"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
    
}
function logoutUser()
{
  
    
    localStorage.setItem("user_name", "");
    
    window.location = "index.html";
    
};

function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
        });
        localStorage.setItem("room_name", "")
        window.location = "chat_room.html"
    } 

