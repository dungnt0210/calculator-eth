import React from "react";
import { Button } from "antd";

const Keyboard = ({
  setParam1,
  setParam2,
  setOpt,
  isParam1Done,
  param1,
  param2,
  setIsParam1Done,
}) => {
  const onNumClick = (num) => {
    if (isParam1Done) {
      param2 ? setParam2(num) : setParam2(parseInt(param2) * 10 + num);
    } else {
      param1 ? setParam1(num) : setParam1(parseInt(param1) * 10 + num);
    }
  };
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
          <Button shape="circle">&lArr;</Button>
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
          <Button shape="circle">C</Button>
        </td>
        <td>
          <Button onClick={() => onNumClick(0)} shape="circle">
            0
          </Button>
        </td>
        <td colspan="2">
          <Button shape="round" type="primary" style={{ width: "100%" }}>
            =
          </Button>
        </td>
      </tr>
    </table>
  );
};
export default Keyboard;
