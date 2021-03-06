import React, { PureComponent } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import { Message } from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
// import logo from './logo.svg';
import "./App.css";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Columns from "./components/Columns";
import Table from "./components/Table";
import Pure from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

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

      {/* <ParentComponent/> */}

      {/* <UserGreeting /> */}

      {/* <NameList/> */}

      {/* <Form/> */}

      {/* <LifeCycleA/> */}

      {/* <FragmentDemo/> */}

      {/* <Table/> */}

      {/* <Pure/> */}

      {/* <ParentComp/> */}

      {/* <RefsDemo/> */}

      {/* < PortalDemo/> */}

      {/* <ErrorBoundary>
        <Hero heroName="moon" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="eman" />
      </ErrorBoundary> */}

      <ClickCounter/>

      <HoverCounter/>
    </div>
  );
}

export default App;
