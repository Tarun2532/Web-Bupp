var firebaseConfig = {
    apiKey: "AIzaSyBMv4ebbZ-rUvRy-kGSqf6BqKIL8oglIeM",
    authDomain: "shor-3e17b.firebaseapp.com",
    projectId: "shor-3e17b",
    storageBucket: "shor-3e17b.appspot.com",
    messagingSenderId: "524649638932",
    appId: "1:524649638932:web:916ef9067b6233e9130b01",
    measurementId: "G-JHNNRZNPC9"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
   var subject = getInputVal('subject');
   var message = getInputVal('message');
    


   saveMessage(name, email, subject, message);
    }
    
    function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
}