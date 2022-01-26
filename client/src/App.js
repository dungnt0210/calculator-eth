import React, { useState } from "react";
import { CalculateProvider } from "./context/CalculateContext";

import "./App.css";
import { Keyboard, Monitor } from "./components";
function App() {
  const [param1, setParam1] = useState(0);
  const [param2, setParam2] = useState(0);
  const [isParam1Done, setIsParam1Done] = useState(false);
  const [opt, setOpt] = useState("");
  return (
    <CalculateProvider>
      <div style={{ width: "100vw" }}>
        <div style={{ margin: "100px auto 100px", display:"flex", flexDirection:"column", width: "max-content"}}>
          <Monitor
            param1={param1}
            param2={param2}
            opt={opt}
            isParam1Done={isParam1Done}
          />
          <Keyboard
            setParam1={setParam1}
            setParam2={setParam2}
            setOpt={setOpt}
            isParam1Done={isParam1Done}
            param1={param1}
            param2={param2}
            setIsParam1Done={setIsParam1Done}
            opt={opt}
          />
        </div>
      </div>
    </CalculateProvider>
  );
}

export default App;
