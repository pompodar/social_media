 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
 import { getDatabase, set, update, ref ,push, child, onValue, get} from
 "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
 import { getStorage, ref as heck, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js';

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const storage = getStorage(app);



 const starCountRef1 = ref(database, 'posts');
onValue(starCountRef1, (snapshot) => {
 snapshot.forEach(childSnapshot => {
     console.log(childSnapshot.val());
     const name = childSnapshot.val().name;
     const key = childSnapshot.key;
     const post = childSnapshot.val().post;
     const imageUrl = childSnapshot.val().image;
     let paraName = document.createElement("p");
     paraName.innerHTML = name;
     paraName.id = "id" + key;
     paraName.classList.add("userName");

     let paraPost = document.createElement("p");
     paraPost.innerHTML = post;

     if(imageUrl) {
         let image = document.createElement("img");
         image.setAttribute("src", imageUrl);
         document.querySelector('.data').appendChild(image);
     }
     document.querySelector('.data').appendChild(paraPost);

     document.querySelector('.data').appendChild(paraName);

     let counter = 0;
     
     paraName.addEventListener("click", () => {
         document.querySelector('.data1').innerHTML = "";
         onValue(starCountRef1, (snapshot) => {
 snapshot.forEach(childSnapshot => {
     console.log(childSnapshot.val());
     const name1 = childSnapshot.val().name;
     const key1 = childSnapshot.key;
     const post1 = childSnapshot.val().post;
     if (name1 == name ) {
     let paraName1 = document.createElement("p");
     paraName1.innerHTML = name1;
     paraName1.id = "id" + key;
     paraName1.classList.add("userName");

     if (counter == 0) {
        document.querySelector('.data1').appendChild(paraName1);
    }
     let paraPost1 = document.createElement("p");
     paraPost1.innerHTML = post1;
     document.querySelector('.data1').appendChild(paraPost1);
            console.log(paraPost1);
     

     counter++;


     }
 })
})
         
     })
 })
})

const btn = document.getElementById("btn");
const userName = document.getElementById("userName");
const pass = document.getElementById("pass");
const u = document.getElementById("u");
const p = document.getElementById("p");

const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

let usersArray = [];
let passArray = [];

const starCountRef2 = ref(database, 'users');
onValue(starCountRef2, (snapshot) => {
 snapshot.forEach(childSnapshot => {
     console.log(childSnapshot.val().name);
     usersArray.push(childSnapshot.val().name);
     passArray.push(childSnapshot.val().pass)
     console.log(usersArray);
})

messageBtn.addEventListener("click", () => {
 const myName = localStorage.getItem("userName");
 document.querySelector('.data').innerHTML = "";
 const now = Date.now();

 const file = fileInput.files[0]; // Get the first file selected by the user
 if(file) {
     const mountainsRef = heck(storage, fileInput.files[0].name);


uploadBytes(mountainsRef, file).then((snapshot) => {
console.log('Uploaded a file!');

getDownloadURL(heck(storage, file.name))
.then((url) => {
console.log(url);
set(ref(database, 'posts/' + now), { 
     name: myName,
     post: message.value,
     image: url
 });
})
.catch((error) => {
console.log(error);
});
});
 } else {
     set(ref(database, 'posts/' + now), { 
     name: myName,
     post: message.value
 });
 }
 
})


btn.addEventListener("click", () => {
 const fileInput = document.getElementById('file-input');


const file = fileInput.files[0]; // Get the first file selected by the user

 if (!usersArray.includes(userName.value) && file) {
      const mountainsRef = heck(storage, fileInput.files[0].name);


uploadBytes(mountainsRef, file).then((snapshot) => {
console.log('Uploaded a file!');

getDownloadURL(heck(storage, file.name))
.then((url) => {
console.log(url);
set(ref(database, 'users/' + userName.value), {
                 name: userName.value,
                 pass: pass.value,
                 image: url,
             })

             localStorage.setItem("userAvatar", url);

             alert("ви зареєструвалися!");
})
})

             } else {
     const index = usersArray.indexOf(userName.value);

     if (passArray[index] == pass.value) {
         localStorage.setItem("userName", userName.value);
         alert("ви увійшли!");
         messageBtn.classList.add("flex");
        message.classList.add("flex");
        p.classList.add("none")
        u.classList.add("none");
        
     } else {
         alert("таке імя вже існує або неправильний пароль або ви не вибрали аватар!");
     }
 }
})    
})

const fileInput = document.getElementById('file-input');
const btn1 = document.getElementById('btn1');


btn1.addEventListener("click", () => {
const file = fileInput.files[0]; // Get the first file selected by the user
const mountainsRef = heck(storage, file.name);


uploadBytes(mountainsRef, file).then((snapshot) => {
console.log('Uploaded a file!');

getDownloadURL(heck(storage, file.name))
.then((url) => {
console.log(url);
})
.catch((error) => {
console.log(error);
});


});
})
//vitaly was here!