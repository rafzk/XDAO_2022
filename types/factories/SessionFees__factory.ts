/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { SessionFees, SessionFeesInterface } from "../SessionFees";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "principal",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "develop",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "buyback",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "liquidity",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "treasury",
            type: "uint32",
          },
        ],
        internalType: "struct FeeRates",
        name: "rates",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "fromAllowance",
        type: "bool",
      },
    ],
    name: "payFeeCrssLogic",
    outputs: [
      {
        internalType: "uint256",
        name: "feesPaid",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class SessionFees__factory {
  static readonly abi = _abi;
  static createInterface(): SessionFeesInterface {
    return new utils.Interface(_abi) as SessionFeesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SessionFees {
    return new Contract(address, _abi, signerOrProvider) as SessionFees;
  }
}
