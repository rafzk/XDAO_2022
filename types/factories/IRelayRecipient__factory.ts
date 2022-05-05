/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRelayRecipient,
  IRelayRecipientInterface,
} from "../IRelayRecipient";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IRelayRecipient__factory {
  static readonly abi = _abi;
  static createInterface(): IRelayRecipientInterface {
    return new utils.Interface(_abi) as IRelayRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRelayRecipient {
    return new Contract(address, _abi, signerOrProvider) as IRelayRecipient;
  }
}
