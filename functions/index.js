const functions = require('firebase-functions');

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({credential: admin.credential.cert(serviceAccount), databaseURL: "https://playground-app-with-axios.firebaseio.com"});

var db = admin.database();
var ref = db.ref("mdms");

//  Create and Deploy Your First Cloud Functions
//  https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.saveData = functions.https.onRequest((request, response) => {
  ref.child('designation').set([
    {
      code: "D02",
      name: "Assistant02"
    }, {
      code: "D03",
      name: "Assistant03"
    }
  ]);
  response.send("Saved successfully!");
});

exports.updateData = functions.https.onRequest((request, response) => {
  ref.child('designation').update({
    "0": {
      code: "D04",
      name: "Assistant04"
    }
  });
  response.send("Updated successfully!");
});

var ref = db.ref("mdms");

exports.showData = functions.https.onRequest((request, response) => {
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    response.send(snapshot.val());
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});
