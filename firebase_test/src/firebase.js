import firebase from 'firebase'


const config={
    apiKey: "AIzaSyDr_dWaS9hsnJVLCYtKSbz5BF8_UhlgSe0",
    authDomain: "test-send-8c5ea.firebaseapp.com",
    projectId: "test-send-8c5ea",
    storageBucket: "test-send-8c5ea.appspot.com",
    messagingSenderId: "193301857879",
    appId: "1:193301857879:web:5e7c85a3e119f8cae18512",
    measurementId: "G-PP4V5YX02F"
}

firebase.initializeApp(config)

export default firebase