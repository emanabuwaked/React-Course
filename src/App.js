import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import { Message } from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
// import logo from './logo.svg';
import './App.css';
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

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

      {/* <Message /> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind/> */}

      <ParentComponent/>
    </div>
  );
}

export default App;
