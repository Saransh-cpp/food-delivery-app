// import logo from './logo.svg';
import './App.css';
import BaseLayout from './layouts/BaseLayout';
import {
BrowserRouter as Router,
} from "react-router-dom"
import { useState } from 'react';
import Auth from './components/Auth';

function App() {

  let [user, setUser] = useState(null);

  return (
    <Router>
      {user ? <BaseLayout user={user} setUser={setUser}/> : <Auth setUser={setUser} />}
    </Router>
  );
}

export default App;
