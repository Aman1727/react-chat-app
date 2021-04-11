import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyCmmWs8GeJvhI9lmhfUohiqSDoXysDD7OQ",
  authDomain: "http://localhost:3006/",
  databaseURL: "https://reactchat-efcb6-default-rtdb.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
