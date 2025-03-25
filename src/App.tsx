import { auth } from './firebase-config';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import './App.css';
import { TextEditor } from './components/text-editor';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(`User logged in with id: `,user.uid); 
      }
    })
  },[]);

  return (
    <div className="app">
      <header>
        <h1>Escribir</h1>
      </header>

      <TextEditor />

    </div>
  )
}

export default App
