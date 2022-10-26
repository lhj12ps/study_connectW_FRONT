// truffle/contracts/Counter.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Counter{
  uint256 private _count; //클라이언트가 수정할 수 없게 private

  // private라서 Counter변수를 반환해주는 getter를 만들어줘야한다
  function current() public view returns(uint256){
    return _count;
  }

  // 버튼을 누를때 1증가
  function increment() public {
    _count += 1;
  }

  // 버튼을 누를때 1감소
  function decrement() public {
    _count -= 1;
  }
}