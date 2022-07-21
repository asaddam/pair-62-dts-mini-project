import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn6wJ7p7Lm3LOqp4N7e2uiVa2tfkw3qok",
  authDomain: "tmdb-movie-7ab1e.firebaseapp.com",
  projectId: "tmdb-movie-7ab1e",
  storageBucket: "tmdb-movie-7ab1e.appspot.com",
  messagingSenderId: "453645707381",
  appId: "1:453645707381:web:65902fecf29cd878a3f03c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth};

