import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv9Oy9hhECYxkTlZO5Sa-dylL7I5BDp1w",
  authDomain: "leetcollab-e2299.firebaseapp.com",
  databaseURL: "https://leetcollab-e2299-default-rtdb.firebaseio.com",
  projectId: "leetcollab-e2299",
  storageBucket: "leetcollab-e2299.appspot.com",
  messagingSenderId: "710099635216",
  appId: "1:710099635216:web:d93abfc3e4e9dad3248e95",
  measurementId: "G-4970DNSTCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
