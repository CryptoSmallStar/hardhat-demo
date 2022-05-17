//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SGToken is ERC20 {
    constructor(uint initialSupply) ERC20("Sou Gold","SGT"){
        _mint(msg.sender, initialSupply);
    }
}
