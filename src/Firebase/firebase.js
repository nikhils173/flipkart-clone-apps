import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDxBFd9FOWHq0hzmv3UAQEn2UuURVnZUI8",
    authDomain: "react-otp-42630.firebaseapp.com",
    databaseURL: "https://react-otp-42630.firebaseio.com",
    projectId: "react-otp-42630",
    storageBucket: "react-otp-42630.appspot.com",
    messagingSenderId: "401029332179",
    appId: "1:401029332179:web:399a51f5e8a80e6916a826"
}

firebase.initializeApp(config);
export default firebase