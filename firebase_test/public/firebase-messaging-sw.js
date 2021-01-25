importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    
  
    apiKey: "AIzaSyDr_dWaS9hsnJVLCYtKSbz5BF8_UhlgSe0",
    authDomain: "test-send-8c5ea.firebaseapp.com",
    projectId: "test-send-8c5ea",
    storageBucket: "test-send-8c5ea.appspot.com",
    messagingSenderId: "193301857879",
    appId: "1:193301857879:web:5e7c85a3e119f8cae18512",
    measurementId: "G-PP4V5YX02F"
    
};

firebase.initializeApp(firebaseConfig);
const initMessaging=firebase.messaging();