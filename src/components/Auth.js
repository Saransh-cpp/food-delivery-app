import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useEffect } from "react";
import firebase from '../utils/Firebase'


const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export default function Auth({setUser}) {
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(
            (user) => {setUser(user)}
        )
      });
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
