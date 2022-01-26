// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Calculate {
  function add(int param1, int param2) public pure returns (int x){
    return param1 + param2;
  }
  function minus(int param1, int param2) public pure returns (int x){
    return param1 - param2;
  }
  function multiple(int param1, int param2) public pure returns (int x){
    return param1 * param2;
  }
  function divide(int param1, int param2) public pure returns (int x){
    if (param2 == 0) return 1E9;
    return param1 / param2;
  }
  function square(int param1) public pure returns (int x){
    return param1 * param1;
  }
  function square_root(uint x) public pure returns (uint y){
        uint z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
  }
}
