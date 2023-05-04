// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomERC20Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("Custom Token", "CTK") {
        _mint(msg.sender, initialSupply);
    }
}
