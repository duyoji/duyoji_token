## Information

### In etherscan of rinkeby

- https://rinkeby.etherscan.io/token/0xa9248c8cdbb457c60759bb61c73761fa549be125?a=0x22e796412e218c1a2c612bb107696386ac578670


### With browser-solidity

```sol
pragma solidity ^0.4.18;

import "github.com/OpenZeppelin/zeppelin-solidity/contracts/token/StandardToken.sol";

contract DuyojiToken is StandardToken {
  string public constant name = "DuyojiToken"; // solium-disable-line uppercase
  string public constant symbol = "DYJ"; // solium-disable-line uppercase
  uint8 public constant decimals = 18; // solium-disable-line uppercase

  uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  function DuyojiToken() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    Transfer(0x0, msg.sender, INITIAL_SUPPLY);
  }
}

```
