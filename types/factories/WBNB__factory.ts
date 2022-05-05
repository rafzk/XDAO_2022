/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WBNB, WBNBInterface } from "../WBNB";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "a",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600b60808190526a2bb930b83832b21021272160a91b60a090815261002c9160009190610078565b50604080518082019091526004808252632ba1272160e11b602090920191825261005891600191610078565b506002805460ff1916601217905534801561007257600080fd5b5061014c565b82805461008490610111565b90600052602060002090601f0160209004810192826100a657600085556100ec565b82601f106100bf57805160ff19168380011785556100ec565b828001600101855582156100ec579182015b828111156100ec5782518255916020019190600101906100d1565b506100f89291506100fc565b5090565b5b808211156100f857600081556001016100fd565b600181811c9082168061012557607f821691505b6020821081141561014657634e487b7160e01b600052602260045260246000fd5b50919050565b6107c38061015b6000396000f3fe6080604052600436106100975760003560e01c806306fdde031461009c578063095ea7b3146100c75780630dbe671f146100f757806318160ddd1461010157806323b872dd1461011e5780632e1a7d4d1461013e578063313ce5671461015e57806370a082311461018a57806395d89b41146101b7578063a9059cbb146101cc578063d0e30db0146101ec578063dd62ed3e146101f4575b600080fd5b3480156100a857600080fd5b506100b161022c565b6040516100be91906106ba565b60405180910390f35b3480156100d357600080fd5b506100e76100e2366004610679565b6102ba565b60405190151581526020016100be565b6100ff610326565b005b34801561010d57600080fd5b50475b6040519081526020016100be565b34801561012a57600080fd5b506100e761013936600461063e565b610330565b34801561014a57600080fd5b506100ff6101593660046106a2565b6104b4565b34801561016a57600080fd5b506002546101789060ff1681565b60405160ff90911681526020016100be565b34801561019657600080fd5b506101106101a53660046105f2565b60036020526000908152604090205481565b3480156101c357600080fd5b506100b161055a565b3480156101d857600080fd5b506100e76101e7366004610679565b610567565b6100ff61057b565b34801561020057600080fd5b5061011061020f36600461060c565b600460209081526000928352604080842090915290825290205481565b600080546102399061073c565b80601f01602080910402602001604051908101604052809291908181526020018280546102659061073c565b80156102b25780601f10610287576101008083540402835291602001916102b2565b820191906000526020600020905b81548152906001019060200180831161029557829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103159086815260200190565b60405180910390a350600192915050565b61032e61057b565b565b6001600160a01b03831660009081526003602052604081205482111561035557600080fd5b6001600160a01b038416331480159061039357506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b15610401576001600160a01b03841660009081526004602090815260408083203384529091529020548211156103c857600080fd5b6001600160a01b0384166000908152600460209081526040808320338452909152812080548492906103fb908490610725565b90915550505b6001600160a01b03841660009081526003602052604081208054849290610429908490610725565b90915550506001600160a01b0383166000908152600360205260408120805484929061045690849061070d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516104a291815260200190565b60405180910390a35060019392505050565b336000908152600360205260409020548111156104d057600080fd5b33600090815260036020526040812080548392906104ef908490610725565b9091555050604051339082156108fc029083906000818181858888f19350505050158015610521573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b600180546102399061073c565b6000610574338484610330565b9392505050565b336000908152600360205260408120805434929061059a90849061070d565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b80356001600160a01b03811681146105ed57600080fd5b919050565b600060208284031215610603578081fd5b610574826105d6565b6000806040838503121561061e578081fd5b610627836105d6565b9150610635602084016105d6565b90509250929050565b600080600060608486031215610652578081fd5b61065b846105d6565b9250610669602085016105d6565b9150604084013590509250925092565b6000806040838503121561068b578182fd5b610694836105d6565b946020939093013593505050565b6000602082840312156106b3578081fd5b5035919050565b6000602080835283518082850152825b818110156106e6578581018301518582016040015282016106ca565b818111156106f75783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561072057610720610777565b500190565b60008282101561073757610737610777565b500390565b600181811c9082168061075057607f821691505b6020821081141561077157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220bbf8cbb564c29c27b00f477954533f754e6fe03fdb92e082eafa0481ab8b703164736f6c63430008030033";

export class WBNB__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WBNB> {
    return super.deploy(overrides || {}) as Promise<WBNB>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WBNB {
    return super.attach(address) as WBNB;
  }
  connect(signer: Signer): WBNB__factory {
    return super.connect(signer) as WBNB__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WBNBInterface {
    return new utils.Interface(_abi) as WBNBInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WBNB {
    return new Contract(address, _abi, signerOrProvider) as WBNB;
  }
}
