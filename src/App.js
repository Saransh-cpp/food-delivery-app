// import logo from './logo.svg';
import './App.css';
import BaseLayout from './layouts/BaseLayout';
import {
BrowserRouter as Router,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <BaseLayout />
    </Router>
  );
}

export default App;
