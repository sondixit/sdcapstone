import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const config = {
    apiKey: "AIzaSyBUBSCgyFiYO3N2ifYLmtSznVjTrJ_BwZc",
    authDomain: "testwebpush-4b6b1.firebaseapp.com",
    projectId: "testwebpush-4b6b1",
    storageBucket: "testwebpush-4b6b1.appspot.com",
    messagingSenderId: "132730092092",
    appId: "1:132730092092:web:6205bf39dba22f96d96139"
};

const app = initializeApp(config);

const messaging = getMessaging(app);

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        console.log(firebaseToken);
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });