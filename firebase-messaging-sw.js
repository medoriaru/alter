importScripts('https://www.gstatic.com/firebasejs/11.7.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.7.3/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCw9Mc8gA2qBrhwJfvTE0iWuZZPK9AQlq0",
    authDomain: "medoria-a5818.firebaseapp.com",
    projectId: "medoria-a5818",
    storageBucket: "medoria-a5818.firebasestorage.app",
    messagingSenderId: "384299164898",
    appId: "1:384299164898:web:21b227e91e62456693eabb",
    measurementId: "G-HP48P9G147"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
   console.log(payload.notification.title);
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://alter.medoria.ru/icons/Icon-192.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});