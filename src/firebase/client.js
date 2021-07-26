import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5IzxWslSTm0WwG3rYLPh9_hIKMzlxX3Y",
  authDomain: "portfolio-d39b7.firebaseapp.com",
  projectId: "portfolio-d39b7",
  storageBucket: "portfolio-d39b7.appspot.com",
  messagingSenderId: "592912789007",
  appId: "1:592912789007:web:2d64ecefb00090c9b0fd7a",
  measurementId: "G-8YY6LYF8XG",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    userName: displayName,
    email,
    uid,
  };
};
export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};
export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

export const addReview = ({ avatar, content, userId, userName, type }) => {
  return db.collection("reviews").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    type,
  });
};

export const fetchLatestReviews = () => {
  return db
    .collection("reviews")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        };
      });
    });
};
