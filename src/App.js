import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import { Message } from "./components/Message";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Eman">
       
        <p>this is the children of props</p>
      </Greet>
      <Greet name="Ahmad" />
      <Greet name="Samia" /> */}

      {/* <Welcome />
      <Hello /> */}

      <Message />
    </div>
  );
}

export default App;
