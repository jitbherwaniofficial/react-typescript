import React from "react";
import "./App.css";
import Button from "./component/Button";
import CounterProvider from "./provider/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hello TypeScript</h1>
      <CounterProvider>
        <Button text="Click Me!" />
      </CounterProvider>
    </div>
  );
}

export default App;
