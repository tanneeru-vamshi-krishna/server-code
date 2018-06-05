var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDXZ9xp43mMzVJhDFxLLuC6Ppks09PHkNg",
    authDomain: "interview-process.firebaseapp.com",
    databaseURL: "https://interview-process.firebaseio.com",
    projectId: "interview-process",
    storageBucket: "interview-process.appspot.com",
    messagingSenderId: "313383708845"
};
firebase.initializeApp(config);

var ref = firebase.database().ref('interviews').push();

var messageRef = ref.child('candidates');
var dbRef = ref.child('dashboard');

dbRef.set("");

var messsageRef = messageRef.push();

for (var i = 0; i < 100; i++) {

    console.log(messageRef.push());


console.log(messageRef);

const ref = messageRef.push()

ref.push({

    Name: 'vamshi',
    Email: 'vamshi.tanneeru@gmail.com'

});

}
