// Initialize Firebase
var config = {
apiKey: "AIzaSyDD41gLrM6mTglhL_Rct1hpi74hMWfzn5A",
  authDomain: "commute-attitude-pandemic-test.firebaseapp.com",
  databaseURL: "https://commute-attitude-pandemic-test-default-rtdb.firebaseio.com",
  projectId: "commute-attitude-pandemic-test",
  storageBucket: "commute-attitude-pandemic-test.appspot.com",
  messagingSenderId: "179350052419",
  appId: "1:179350052419:web:d846b3d9957210a58dbef6",
  measurementId: "G-2FY42RPCHS"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
