import React, { useEffect, useState } from "react";
import CalculateContract from "../contracts/Calculate.json";
import Web3 from "web3";
export const CalculateContext = React.createContext();

export const CalculateProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [calculateContract, setCalculateContract] = useState({});
  const [result, setResult] = useState(0);

  const init = async () => {
    let provider = window.ethereum;

    if (typeof provider !== "undefined") {
      provider
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
		  console.log(accounts);
          setSelectedAccount(accounts[0]);
          console.log(`Selected account is ${selectedAccount}`);
        })
        .catch((err) => {
          console.log(err);
          return;
        });

      window.ethereum.on("accountsChanged", function (accounts) {
        setSelectedAccount(accounts[0]);
		console.log(accounts);
      });
    }

    const web3 = new Web3(provider);

    const networkId = await web3.eth.net.getId();

    setCalculateContract(
      new web3.eth.Contract(
        CalculateContract.abi,
        CalculateContract.networks[networkId].address
      )
    );

    setIsInitialized(true);
  };

  const add = async (param1, param2) => {
    if (!isInitialized) {
      await init();
    }

    return calculateContract.methods
      .add(param1, param2)
      .call()
      .then((res) => {
        setResult(res);
      });
  };

  const minus = async (param1, param2) => {
    if (!isInitialized) {
      await init();
    }

    return calculateContract.methods
      .minus(param1, param2)
      .call()
      .then((res) => {
        setResult(res);
      });
  };

  const multiple = async (param1, param2) => {
    if (!isInitialized) {
      await init();
    }

    return calculateContract.methods
      .multiple(param1, param2)
      .call()
      .then((res) => {
        setResult(res);
      });
  };

  const divide = async (param1, param2) => {
    if (!isInitialized) {
      await init();
    }

    return calculateContract.methods
      .divide(param1, param2)
      .call()
      .then((res) => {
        setResult(res);
      });
  };

  const square = async (param1) => {
    if (!isInitialized) {
      await init();
    }

    return calculateContract.methods
      .square(param1)
      .call()
      .then((res) => {
        setResult(res);
      });
  };

  const squareRoot = async (param1) => {
    if (!isInitialized) {
      await init();
    }

    return calculateContract.methods
      .square_root(param1)
      .call()
      .then((res) => {
        setResult(res);
      });
  };

  useEffect(() => {
    if (!isInitialized) {
      init();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  return (
    <CalculateContext.Provider
      value={{
        add,
        minus,
        square,
        squareRoot,
        divide,
        multiple,
		result
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};
