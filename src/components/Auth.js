import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDtS6oZab6YAdD3MXr4jCzB7WuLVYkxRKk",
  authDomain: "fooddeliveryapp-7848a.firebaseapp.com",
  projectId: "fooddeliveryapp-7848a",
  storageBucket: "fooddeliveryapp-7848a.appspot.com",
  messagingSenderId: "207856320422",
  appId: "1:207856320422:web:25b49a642d91aee5c5d967",
  measurementId: "G-CKNT4QBHNZ",
};

firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export default function Auth() {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
