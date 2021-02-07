importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-messsaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyA4XIEP8uNWGBMLs089Dfeac8WzdAQdous",
    authDomain: "complete-navbar-using-gr-9ccc8.firebaseapp.com",
    databaseURL: "https://complete-navbar-using-gr-9ccc8-default-rtdb.firebaseio.com",
    projectId: "complete-navbar-using-gr-9ccc8",
    storageBucket: "complete-navbar-using-gr-9ccc8.appspot.com",
    messagingSenderId: "669573364396",
    appId: "1:669573364396:web:0920aa62e9f5d25c273d09",
    measurementId: "G-91F631BS1Z"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png',
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });