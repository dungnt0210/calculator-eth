import React, { useEffect } from "react";
import { Button } from "antd";
import { add, minus, divide, multiple, square, squareRoot } from "../actions";
const Keyboard = ({
  setParam1,
  setParam2,
  setOpt,
  isParam1Done,
  param1,
  param2,
  setIsParam1Done,
  opt
}) => {
  useEffect(() => {
    if (opt) {
      if (!param1) {
        setIsParam1Done(true);
      }
      switch (opt) {
        case "square_root":
          if (param1) {
            setParam1(squareRoot(param1));
            setIsParam1Done(true);
          }
          break;
        case "square":
          if (param1) {
            setParam1(square(param1));
            setIsParam1Done(true);
          }
          break;
        case "add":
          if (isParam1Done) {
            setParam1(add(param1, param2));
          } else {
            setIsParam1Done(true);
          }
          break;
        case "minus":
          if (isParam1Done) {
            setParam1(minus(param1, param2));
          } else {
            setIsParam1Done(true);
          }
          break;
        case "multiple":
          if (isParam1Done) {
            setParam1(multiple(param1, param2));
          } else {
            setIsParam1Done(true);
          }
          break;
        case "divide":
          if (isParam1Done) {
            setParam1(divide(param1, param2));
          } else {
            setIsParam1Done(true);
          }
          break;
        default:
          break;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opt]);
  const onNumClick = (num) => {
    if (isParam1Done) {
      param2 ? setParam2(num) : setParam2(parseInt(param2) * 10 + num);
    } else {
      param1 ? setParam1(num) : setParam1(parseInt(param1) * 10 + num);
    }
  };

  const onDelete = () => {
    if (isParam1Done) {
      param2 > 9 ? setParam2(param2/10) : setParam2(0)
    } else {
      param1 > 9 ? setParam1(param1/10) : setParam1(0)
    }
  }
  const clearMath = () => {
    setParam1(0);
    setParam2(0);
    setIsParam1Done(false);
    setOpt("");
  }
  const calculate = () => {

  }
  return (
    <table>
      <tr>
        <td>
          <Button onClick={() => setOpt("square_root")} shape="circle">
            &radic;
          </Button>
        </td>
        <td>
          <Button onClick={() => setOpt("square")} shape="circle">
            ^2
          </Button>
        </td>
        <td>
          <Button onClick={() => onDelete()} shape="circle">&lArr;</Button>
        </td>
        <td>
          <Button onClick={() => setOpt("divide")} shape="circle">
            :
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => onNumClick(7)} shape="circle">
            7
          </Button>
        </td>
        <td>
          <Button onClick={() => onNumClick(8)} shape="circle">
            8
          </Button>
        </td>
        <td>
          <Button onClick={() => onNumClick(9)} shape="circle">
            9
          </Button>
        </td>
        <td>
          <Button onClick={() => setOpt("multiple")} shape="circle">
            x
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => onNumClick(4)} shape="circle">
            4
          </Button>
        </td>
        <td>
          <Button onClick={() => onNumClick(5)} shape="circle">
            5
          </Button>
        </td>
        <td>
          <Button onClick={() => onNumClick(6)} shape="circle">
            6
          </Button>
        </td>
        <td>
          <Button onClick={() => setOpt("add")} shape="circle">
            +
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button onClick={() => onNumClick(1)} shape="circle">
            1
          </Button>
        </td>
        <td>
          <Button onClick={() => onNumClick(2)} shape="circle">
            2
          </Button>
        </td>
        <td>
          <Button onClick={() => onNumClick(3)} shape="circle">
            3
          </Button>
        </td>
        <td>
          <Button onClick={() => setOpt("minus")} shape="circle">
            -
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button shape="circle" onClick={() => clearMath()}>C</Button>
        </td>
        <td>
          <Button onClick={() => onNumClick(0)} shape="circle">
            0
          </Button>
        </td>
        <td colspan="2">
          <Button shape="round" onClick={() => calculate()} type="primary" style={{ width: "100%" }}>
            =
          </Button>
        </td>
      </tr>
    </table>
  );
};
export default Keyboard;
