import React, { useEffect, useState } from "react";
import "./App.css";
import { Keyboard, Monitor } from "./components";
import { init } from "./actions";
import Web3 from "web3";
function App() {
  useEffect(() => {
    const providerUrl = 'http://localhost:8545';
    const web3 = new Web3(providerUrl);
    let provider = window.ethereum;
  
    if (typeof provider !== 'undefined') {
      provider
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          let selectedAccount = accounts[0];
          console.log(`Selected account is ${selectedAccount}`);
        })
        .catch((err) => {
          console.log(err);
          return;
        });
  
      window.ethereum.on('accountsChanged', function (accounts) {
        let selectedAccount = accounts[0];
        console.log(`Selected account changed to ${selectedAccount}`);
      });
    }
  },[]);
  const [param1, setParam1] = useState(0);
  const [param2, setParam2] = useState(0);
  const [isParam1Done, setIsParam1Done] = useState(false);
  const [opt, setOpt] = useState("");
  return (
    <div>
      <Monitor param1={param1} param2={param2} opt={opt} isParam1Done={isParam1Done} />
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
  );
}

export default App;
