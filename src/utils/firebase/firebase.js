import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9C_q0Rx1UxC7ftQWOeupRmUO3zTImODA",
  authDomain: "outfit-archive-db.firebaseapp.com",
  projectId: "outfit-archive-db",
  storageBucket: "outfit-archive-db.appspot.com",
  messagingSenderId: "326857080844",
  appId: "1:326857080844:web:377deb689ba0d92622ee29",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
