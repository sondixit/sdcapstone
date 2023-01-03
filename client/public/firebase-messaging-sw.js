importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const config = {
  apiKey: "AIzaSyBUBSCgyFiYO3N2ifYLmtSznVjTrJ_BwZc",
  authDomain: "testwebpush-4b6b1.firebaseapp.com",
  projectId: "testwebpush-4b6b1",
  storageBucket: "testwebpush-4b6b1.appspot.com",
  messagingSenderId: "132730092092",
  appId: "1:132730092092:web:6205bf39dba22f96d96139"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });