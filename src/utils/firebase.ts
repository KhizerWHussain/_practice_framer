import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MESEAURMENT_ID,
};

const vapidKey = process.env.FIREBASE_VAPID_KEY;

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestFcm = async () => {
  try {
    if (typeof window !== "undefined") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        return getToken(messaging, { vapidKey });
      } else {
        throw new Error("permission not granted");
      }
    }
  } catch (error) {
    console.log("error generating fcm token ==>", error);
  }
};

onMessage(messaging, (payload: any) => {
  console.log("Message received in foreground: ", payload);
});
