import React, { Suspense } from "react";
import "./App.css";
import CounterProvider from "./provider/Counter";
const Button = React.lazy(() => import("./component/Button"));

function App() {
  return (
    <div className="App">
      <h1>Hello TypeScript</h1>
      <CounterProvider>
        <Suspense fallback={<p>This is Loading...</p>}>
          <Button text="Click Me!" />
        </Suspense>
      </CounterProvider>
    </div>
  );
}

export default App;
