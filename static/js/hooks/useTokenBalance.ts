import { useCallback, useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { filter, isNil } from "lodash";
import { AddressZero } from "@ethersproject/constants";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { getErc20Contract, getJinkoTokenContract } from "utils/contractHelpers";
import { multichainTokens } from "config/constants/tokens";
import { BIG_ZERO } from "utils/bigNumber";
import useRefresh from "./useRefresh";
import useLastUpdated from "./useLastUpdated";

type UseTokenBalanceState = {
  balance: BigNumber;
  fetchStatus: FetchStatus;
};

export enum FetchStatus {
  NOT_FETCHED = "not-fetched",
  SUCCESS = "success",
  FAILED = "failed",
}

const useTokenBalance = (tokenAddress: string, chainId?: number) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus;
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  });
  const { account, chainId: connChainId } = useActiveWeb3React(chainId);
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const selId = chainId || connChainId;
      const convertList = Object.values(multichainTokens);
      const filterToken = filter(convertList, (t) => {
        return t.address[selId] === tokenAddress;
      });

      if (
        isNil(filterToken[0]?.address[selId]) ||
        filterToken[0]?.address[selId] === AddressZero
      ) {
        setBalanceState({ balance: BIG_ZERO, fetchStatus: SUCCESS });
      } else {
        const contract = getErc20Contract(tokenAddress, selId);
        try {
          const res = await contract.balanceOf(account);
          setBalanceState({
            balance: new BigNumber(res.toString()),
            fetchStatus: SUCCESS,
          });
        } catch (e) {
          console.error(e);
          setBalanceState((prev) => ({
            ...prev,
            fetchStatus: FAILED,
          }));
        }
      }
    };

    if (account) {
      fetchBalance();
    }
  }, [
    account,
    tokenAddress,
    fastRefresh,
    SUCCESS,
    FAILED,
    chainId,
    connChainId,
  ]);

  return balanceState;
};

export const useGetEtherBalance = () => {
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.NOT_FETCHED);
  const [balance, setBalance] = useState(BIG_ZERO);
  const { account, library } = useActiveWeb3React();
  const { lastUpdated, setLastUpdated } = useLastUpdated();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const walletBalance = await library.getBalance(account);
        setBalance(new BigNumber(walletBalance.toString()));
        setFetchStatus(FetchStatus.SUCCESS);
      } catch {
        setFetchStatus(FetchStatus.FAILED);
      }
    };

    if (account) {
      fetchBalance();
    }
  }, [account, lastUpdated, setBalance, setFetchStatus, library]);

  return { balance, fetchStatus, refresh: setLastUpdated };
};

export const useJinkoTokenBalance = (
  tokenAddress: string,
  chainId?: number
) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus;
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  });
  const { account, chainId: connChainId } = useActiveWeb3React(chainId);
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const selId = chainId || connChainId;
      const convertList = Object.values(multichainTokens);
      const filterToken = filter(convertList, (t) => {
        return t.address[selId] === tokenAddress;
      });

      if (
        isNil(filterToken[0]?.address[selId]) ||
        filterToken[0]?.address[selId] === AddressZero
      ) {
        setBalanceState({ balance: BIG_ZERO, fetchStatus: SUCCESS });
      } else {
        const contract = getJinkoTokenContract(tokenAddress, selId);
        try {
          const res = await contract.balanceOf(account);
          setBalanceState({
            balance: new BigNumber(res.toString()),
            fetchStatus: SUCCESS,
          });
        } catch (e) {
          console.error(e);
          setBalanceState((prev) => ({
            ...prev,
            fetchStatus: FAILED,
          }));
        }
      }
    };

    if (account) {
      fetchBalance();
    }
  }, [
    account,
    tokenAddress,
    fastRefresh,
    SUCCESS,
    FAILED,
    chainId,
    connChainId,
  ]);

  return balanceState;
};

export const useJinkoTokenBalanceV2 = (
  tokenAddress: string,
  chainId?: number
) => {
  const { account, chainId: connChainId } = useActiveWeb3React(chainId);
  const handleGetJinkoTokenBalanceV2 = useCallback(async () => {
    try {
      const selId = chainId || connChainId;
      const convertList = Object.values(multichainTokens);
      const filterToken = filter(convertList, (t) => {
        return t.address[selId] === tokenAddress;
      });

      if (
        isNil(filterToken[0]?.address[selId]) ||
        filterToken[0]?.address[selId] === AddressZero
      ) {
        // return [BIG_ZERO, null]
        throw new Error("Token address not found");
      } else {
        const contract = getJinkoTokenContract(tokenAddress, selId)
        const res = await contract.balanceOf(account)
        return [new BigNumber(res.toString()), null]
      }
    } catch (e: any) {
      // eslint-disable-next-line
      const { message = "" } = e;
      console.error(message);
      return [BIG_ZERO, message];
    }
  }, [account,chainId,connChainId,tokenAddress]);

  return { onGetJinkoTokenBalanceV2: handleGetJinkoTokenBalanceV2 };
};

export default useTokenBalance;
