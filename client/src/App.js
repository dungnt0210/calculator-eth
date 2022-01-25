import React, { useState } from "react";
import "./App.css";
import Keyboard from "./Keyboard";
import Monitor from "./Monitor";

function App() {
  const [param1, setParam1] = useState(0);
  const [param2, setParam2] = useState(0);
  const [isParam1Done, setIsParam1Done] = useState(false);

  const [opt, setOpt] = useState("");
  return (
    <div>
      <Monitor param1={param1} param2={param2} opt={opt} />
      <Keyboard
        setParam1={setParam1}
        setParam2={setParam2}
        setOpt={setOpt}
        isParam1Done={isParam1Done}
        param1={param1}
        param2={param2}
        setIsParam1Done={setIsParam1Done}
      />
    </div>
  );
}

export default App;
