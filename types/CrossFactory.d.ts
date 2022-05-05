/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CrossFactoryInterface extends ethers.utils.Interface {
  functions: {
    "INIT_CODE_PAIR_HASH()": FunctionFragment;
    "allPairs(uint256)": FunctionFragment;
    "allPairsLength()": FunctionFragment;
    "createPair(address,address)": FunctionFragment;
    "feeTo()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getPair(address,address)": FunctionFragment;
    "informOfPair(address,address,address,address)": FunctionFragment;
    "nextNode()": FunctionFragment;
    "owner()": FunctionFragment;
    "prevNode()": FunctionFragment;
    "setFeeRates(uint8,(uint32,uint32,uint32,uint32),address)": FunctionFragment;
    "setFeeStores((address,address,address,address),address)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setNode(uint8,address,address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "wire(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "INIT_CODE_PAIR_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allPairs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allPairsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createPair",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "informOfPair",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "nextNode", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "prevNode", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFeeRates",
    values: [
      BigNumberish,
      {
        develop: BigNumberish;
        buyback: BigNumberish;
        liquidity: BigNumberish;
        treasury: BigNumberish;
      },
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeStores",
    values: [
      { develop: string; buyback: string; liquidity: string; treasury: string },
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setNode",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "wire",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "INIT_CODE_PAIR_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allPairsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "informOfPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextNode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prevNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeStores",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setNode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wire", data: BytesLike): Result;

  events: {
    "PairCreated(address,address,address,uint256)": EventFragment;
    "SetFeeRates(uint8,tuple)": EventFragment;
    "SetFeeStores(tuple)": EventFragment;
    "SetNode(uint8,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PairCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeRates"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeStores"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetNode"): EventFragment;
}

export type PairCreatedEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    token0: string;
    token1: string;
    pair: string;
    arg3: BigNumber;
  }
>;

export type SetFeeRatesEvent = TypedEvent<
  [
    number,
    [number, number, number, number] & {
      develop: number;
      buyback: number;
      liquidity: number;
      treasury: number;
    }
  ] & {
    _sessionType: number;
    _feeRates: [number, number, number, number] & {
      develop: number;
      buyback: number;
      liquidity: number;
      treasury: number;
    };
  }
>;

export type SetFeeStoresEvent = TypedEvent<
  [
    [string, string, string, string] & {
      develop: string;
      buyback: string;
      liquidity: string;
      treasury: string;
    }
  ] & {
    _feeStores: [string, string, string, string] & {
      develop: string;
      buyback: string;
      liquidity: string;
      treasury: string;
    };
  }
>;

export type SetNodeEvent = TypedEvent<
  [number, string, string] & {
    nodeType: number;
    node: string;
    msgSender: string;
  }
>;

export class CrossFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CrossFactoryInterface;

  functions: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<[string]>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getPair(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    informOfPair(
      pair: string,
      token0: string,
      token1: string,
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nextNode(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    prevNode(overrides?: CallOverrides): Promise<[string]>;

    setFeeRates(
      _sessionType: BigNumberish,
      _feeRates: {
        develop: BigNumberish;
        buyback: BigNumberish;
        liquidity: BigNumberish;
        treasury: BigNumberish;
      },
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeStores(
      _feeStores: {
        develop: string;
        buyback: string;
        liquidity: string;
        treasury: string;
      },
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNode(
      nodeType: BigNumberish,
      node: string,
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wire(
      _prevNode: string,
      _nextNode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<string>;

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

  createPair(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getPair(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  informOfPair(
    pair: string,
    token0: string,
    token1: string,
    caller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nextNode(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  prevNode(overrides?: CallOverrides): Promise<string>;

  setFeeRates(
    _sessionType: BigNumberish,
    _feeRates: {
      develop: BigNumberish;
      buyback: BigNumberish;
      liquidity: BigNumberish;
      treasury: BigNumberish;
    },
    caller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeStores(
    _feeStores: {
      develop: string;
      buyback: string;
      liquidity: string;
      treasury: string;
    },
    caller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    _feeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNode(
    nodeType: BigNumberish,
    node: string,
    caller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wire(
    _prevNode: string,
    _nextNode: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<string>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getPair(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    informOfPair(
      pair: string,
      token0: string,
      token1: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nextNode(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    prevNode(overrides?: CallOverrides): Promise<string>;

    setFeeRates(
      _sessionType: BigNumberish,
      _feeRates: {
        develop: BigNumberish;
        buyback: BigNumberish;
        liquidity: BigNumberish;
        treasury: BigNumberish;
      },
      caller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeStores(
      _feeStores: {
        develop: string;
        buyback: string;
        liquidity: string;
        treasury: string;
      },
      caller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;

    setNode(
      nodeType: BigNumberish,
      node: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    wire(
      _prevNode: string,
      _nextNode: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PairCreated(address,address,address,uint256)"(
      token0?: string | null,
      token1?: string | null,
      pair?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { token0: string; token1: string; pair: string; arg3: BigNumber }
    >;

    PairCreated(
      token0?: string | null,
      token1?: string | null,
      pair?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { token0: string; token1: string; pair: string; arg3: BigNumber }
    >;

    "SetFeeRates(uint8,tuple)"(
      _sessionType?: null,
      _feeRates?: null
    ): TypedEventFilter<
      [
        number,
        [number, number, number, number] & {
          develop: number;
          buyback: number;
          liquidity: number;
          treasury: number;
        }
      ],
      {
        _sessionType: number;
        _feeRates: [number, number, number, number] & {
          develop: number;
          buyback: number;
          liquidity: number;
          treasury: number;
        };
      }
    >;

    SetFeeRates(
      _sessionType?: null,
      _feeRates?: null
    ): TypedEventFilter<
      [
        number,
        [number, number, number, number] & {
          develop: number;
          buyback: number;
          liquidity: number;
          treasury: number;
        }
      ],
      {
        _sessionType: number;
        _feeRates: [number, number, number, number] & {
          develop: number;
          buyback: number;
          liquidity: number;
          treasury: number;
        };
      }
    >;

    "SetFeeStores(tuple)"(
      _feeStores?: null
    ): TypedEventFilter<
      [
        [string, string, string, string] & {
          develop: string;
          buyback: string;
          liquidity: string;
          treasury: string;
        }
      ],
      {
        _feeStores: [string, string, string, string] & {
          develop: string;
          buyback: string;
          liquidity: string;
          treasury: string;
        };
      }
    >;

    SetFeeStores(
      _feeStores?: null
    ): TypedEventFilter<
      [
        [string, string, string, string] & {
          develop: string;
          buyback: string;
          liquidity: string;
          treasury: string;
        }
      ],
      {
        _feeStores: [string, string, string, string] & {
          develop: string;
          buyback: string;
          liquidity: string;
          treasury: string;
        };
      }
    >;

    "SetNode(uint8,address,address)"(
      nodeType?: null,
      node?: null,
      msgSender?: null
    ): TypedEventFilter<
      [number, string, string],
      { nodeType: number; node: string; msgSender: string }
    >;

    SetNode(
      nodeType?: null,
      node?: null,
      msgSender?: null
    ): TypedEventFilter<
      [number, string, string],
      { nodeType: number; node: string; msgSender: string }
    >;
  };

  estimateGas: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getPair(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    informOfPair(
      pair: string,
      token0: string,
      token1: string,
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nextNode(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    prevNode(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeRates(
      _sessionType: BigNumberish,
      _feeRates: {
        develop: BigNumberish;
        buyback: BigNumberish;
        liquidity: BigNumberish;
        treasury: BigNumberish;
      },
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeStores(
      _feeStores: {
        develop: string;
        buyback: string;
        liquidity: string;
        treasury: string;
      },
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNode(
      nodeType: BigNumberish,
      node: string,
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wire(
      _prevNode: string,
      _nextNode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INIT_CODE_PAIR_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allPairs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPair(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    informOfPair(
      pair: string,
      token0: string,
      token1: string,
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nextNode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prevNode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeRates(
      _sessionType: BigNumberish,
      _feeRates: {
        develop: BigNumberish;
        buyback: BigNumberish;
        liquidity: BigNumberish;
        treasury: BigNumberish;
      },
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeStores(
      _feeStores: {
        develop: string;
        buyback: string;
        liquidity: string;
        treasury: string;
      },
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNode(
      nodeType: BigNumberish,
      node: string,
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wire(
      _prevNode: string,
      _nextNode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
