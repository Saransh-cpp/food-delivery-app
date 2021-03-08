import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useEffect } from "react";
import firebase from "../utils/Firebase";
import axios from '../utils/axios'

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export default function Auth({ setUser }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token) => {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            console.log(token);
          });
      }
    });
  });
  return (
    <div>
      <h1>Food delivery app</h1>
      <p>Please sign-in first</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
