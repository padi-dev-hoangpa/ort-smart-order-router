import { getCreate2Address } from '@ethersproject/address';
import { keccak256, pack } from '@ethersproject/solidity';
import { Token } from '@uniswap/sdk-core';

export const computePairAddress = (tokenA: Token, tokenB: Token): string => {
  const [token0, token1] = tokenA.sortsBefore(tokenB)
    ? [tokenA, tokenB]
    : [tokenB, tokenA]; // does safety checks
  return getCreate2Address(
    '0x0C2A41a738eD4371c787fd6075fbA8c0590cF6B4',
    keccak256(
      ['bytes'],
      [pack(['address', 'address'], [token0.address, token1.address])]
    ),
    '0xd685c65fb3e67871aef1793119dea4159b71b38dd10211e120434c6b1ae4d09b'
  );
};
