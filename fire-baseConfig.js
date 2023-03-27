// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getDatabase, set, update, ref ,push, child, onValue, get} from
"https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
import { getStorage, ref as heck, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDlmKx--kMF4Wo59AeOzCf-5XhNPaOBsGY",
authDomain: "chat-286c2.firebaseapp.com",
projectId: "chat-286c2",
storageBucket: "chat-286c2.appspot.com",
messagingSenderId: "1047026169847",
appId: "1:1047026169847:web:5c00213c513f076dfb20f2",
measurementId: "G-235Q42LNXR",
databaseURL: "https://chat-286c2-default-rtdb.europe-west1.firebasedatabase.app/"
};