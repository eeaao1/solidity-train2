// SPDX-License-Identifier: MIT
// BoxV1.sol
pragma solidity ^0.8.0;

contract BoxV1 {

    uint256 private value;

    function store(uint256 _value) public {
        value = _value;
    }

    function retrieve() public view returns (uint256) {
        return value;
    }


}
