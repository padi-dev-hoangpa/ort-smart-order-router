import { getCreate2Address } from '@ethersproject/address';
import { keccak256, pack } from '@ethersproject/solidity';
import { Token } from '@uniswap/sdk-core';

export const computePairAddress = (tokenA: Token, tokenB: Token): string => {
  const [token0, token1] = tokenA.sortsBefore(tokenB)
    ? [tokenA, tokenB]
    : [tokenB, tokenA]; // does safety checks
  return getCreate2Address(
    '0x7b6b8375cb273750243076f216F8dA983c175388',
    keccak256(
      ['bytes'],
      [pack(['address', 'address'], [token0.address, token1.address])]
    ),
    '0x0d9644501b732fa2d5c2633d3b6119ebd0f31d66af172e3fe0efd2cdedb2b8dd'
  );
};
