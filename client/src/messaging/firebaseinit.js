import { initializeApp } from "firebase/app";
import { getMessaging, getToken,onMessage } from "firebase/messaging";

const config = {
    apiKey: "AIzaSyBUBSCgyFiYO3N2ifYLmtSznVjTrJ_BwZc",
    authDomain: "testwebpush-4b6b1.firebaseapp.com",
    projectId: "testwebpush-4b6b1",
    storageBucket: "testwebpush-4b6b1.appspot.com",
    messagingSenderId: "132730092092",
    appId: "1:132730092092:web:6205bf39dba22f96d96139"
};

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    })
}

const app = initializeApp(config);

export const messaging = getMessaging(app);

export const callMessaging = () => { getToken(messaging, {vapidKey: "BGyzrWOwGknjeAOyOJ0X38oXIsx5ZDuYrZGiTcqQo2PH_-umCoZAKay1hSCZa9Rq08LRugmQC2jIwNbzsGGHYCw"})
    .then((currentToken) => {
        if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken);
        } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        requestPermission();
        }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
}

onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // ...
  });
