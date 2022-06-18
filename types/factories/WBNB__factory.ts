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
  "0x60c0604052600b60808190526a2bb930b83832b21021272160a91b60a090815261002c9160009190610078565b50604080518082019091526004808252632ba1272160e11b602090920191825261005891600191610078565b506002805460ff1916601217905534801561007257600080fd5b5061014b565b82805461008490610111565b90600052602060002090601f0160209004810192826100a657600085556100ec565b82601f106100bf57805160ff19168380011785556100ec565b828001600101855582156100ec579182015b828111156100ec5782518255916020019190600101906100d1565b506100f89291506100fc565b5090565b5b808211156100f857600081556001016100fd565b600181811c9082168061012557607f821691505b60208210810361014557634e487b7160e01b600052602260045260246000fd5b50919050565b6107d98061015a6000396000f3fe6080604052600436106100a75760003560e01c8063313ce56711610064578063313ce5671461016e57806370a082311461019a57806395d89b41146101c7578063a9059cbb146101dc578063d0e30db0146101fc578063dd62ed3e1461020457600080fd5b806306fdde03146100ac578063095ea7b3146100d75780630dbe671f1461010757806318160ddd1461011157806323b872dd1461012e5780632e1a7d4d1461014e575b600080fd5b3480156100b857600080fd5b506100c161023c565b6040516100ce91906105e6565b60405180910390f35b3480156100e357600080fd5b506100f76100f2366004610657565b6102ca565b60405190151581526020016100ce565b61010f610336565b005b34801561011d57600080fd5b50475b6040519081526020016100ce565b34801561013a57600080fd5b506100f7610149366004610681565b610340565b34801561015a57600080fd5b5061010f6101693660046106bd565b6104c4565b34801561017a57600080fd5b506002546101889060ff1681565b60405160ff90911681526020016100ce565b3480156101a657600080fd5b506101206101b53660046106d6565b60036020526000908152604090205481565b3480156101d357600080fd5b506100c161056a565b3480156101e857600080fd5b506100f76101f7366004610657565b610577565b61010f61058b565b34801561021057600080fd5b5061012061021f3660046106f1565b600460209081526000928352604080842090915290825290205481565b6000805461024990610724565b80601f016020809104026020016040519081016040528092919081815260200182805461027590610724565b80156102c25780601f10610297576101008083540402835291602001916102c2565b820191906000526020600020905b8154815290600101906020018083116102a557829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103259086815260200190565b60405180910390a350600192915050565b61033e61058b565b565b6001600160a01b03831660009081526003602052604081205482111561036557600080fd5b6001600160a01b03841633148015906103a357506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b15610411576001600160a01b03841660009081526004602090815260408083203384529091529020548211156103d857600080fd5b6001600160a01b03841660009081526004602090815260408083203384529091528120805484929061040b908490610774565b90915550505b6001600160a01b03841660009081526003602052604081208054849290610439908490610774565b90915550506001600160a01b0383166000908152600360205260408120805484929061046690849061078b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516104b291815260200190565b60405180910390a35060019392505050565b336000908152600360205260409020548111156104e057600080fd5b33600090815260036020526040812080548392906104ff908490610774565b9091555050604051339082156108fc029083906000818181858888f19350505050158015610531573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b6001805461024990610724565b6000610584338484610340565b9392505050565b33600090815260036020526040812080543492906105aa90849061078b565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b600060208083528351808285015260005b81811015610613578581018301518582016040015282016105f7565b81811115610625576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461065257600080fd5b919050565b6000806040838503121561066a57600080fd5b6106738361063b565b946020939093013593505050565b60008060006060848603121561069657600080fd5b61069f8461063b565b92506106ad6020850161063b565b9150604084013590509250925092565b6000602082840312156106cf57600080fd5b5035919050565b6000602082840312156106e857600080fd5b6105848261063b565b6000806040838503121561070457600080fd5b61070d8361063b565b915061071b6020840161063b565b90509250929050565b600181811c9082168061073857607f821691505b60208210810361075857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156107865761078661075e565b500390565b6000821982111561079e5761079e61075e565b50019056fea2646970667358221220c450e91c13928f85a23ab543e030de49496c58abbd735417072b2e8e2aec614264736f6c634300080e0033";

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
