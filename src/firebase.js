import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA90hHVx3uYPJyYjF9QoU4mChiGfJnNCFY",
    authDomain: "react-todo-app-e8921.firebaseapp.com",
    projectId: "react-todo-app-e8921",
    storageBucket: "react-todo-app-e8921.appspot.com",
    messagingSenderId: "16363422074",
    appId: "1:16363422074:web:10b8c0931513bb938416c3",
    measurementId: "G-LXT7TFMZ9V"
});

const db = firebaseApp.firestore();

export default db;