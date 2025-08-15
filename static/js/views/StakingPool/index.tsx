import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Flex,
  Space,
  Container,
  Text,
  Accordion,
  Group,
  Avatar,
  Tabs,
  Button,
  Input,
  Table,
  Loader,
} from "@mantine/core";
import { FormattedMessage, useIntl } from "react-intl";
// import { yupResolver } from "@hookform/resolvers/yup"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDebounce, useRequest } from "ahooks";
import {
  Hash,
  prepareWriteContract,
  readContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { TransactionReceipt } from "@ethersproject/providers";
import BigNumber from "bignumber.js";
import styled from "@emotion/styled";
import axios, { AxiosRequestConfig } from "axios";

import Page from "components/Layout/Page";
import { useNotifications } from "reapop";
import { useTokenAuth } from "hooks/useTokenAuth";
import useMiddlewareTranslation from "hooks/useMiddlewareTranslation";
import stakeAbi from "config/abi/stake.json";
import jinkoAbi from "config/abi/jinko.json";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import {
  getFullDisplayBalance,
  getFormatNumberWithK,
  getBalanceAmount,
} from "utils/formatBalance";
import { getPaymentList, getStakePoolAddress } from "utils/addressHelpers";
import { ComponentsContext } from "contexts/ComponentsContext";
import PageLoader from "components/Loader/PageLoaderStudio";
import { useTranslation } from "contexts/I18nContext";
import { multicallv2 } from "utils/multicall";
import { useGetListOfNfts } from "views/ClaimRewards/hooks/useClaimRewards";

const formatStringWithDecimalsInWei = (value: string, decimals = 18) => {
  // value is a string that represents a number not a BigNumber
  // const decimals = 18
  const [integer, decimal] = value.split(".");
  if (!decimal) {
    return parseFloat(value) + "0".repeat(decimals);
  }
  if (decimal.length > decimals) {
    throw new Error("Too many decimal places");
  }
  return parseFloat(integer) + decimal + "0".repeat(decimals - decimal.length);
};

const formatStringWithDecimals = (value: string, decimals = 18) => {
  const [integer, decimal] = value.split(".");
  if (!decimal) {
    return parseFloat(value);
  }
  if (decimal.length > decimals) {
    // remove the value based on the decimals
    const decimalValue = decimal.slice(0, decimals);
    return parseFloat(`${integer}.${decimalValue}`);
  }
  return `${parseFloat(integer)}.${decimal}`;
};

interface PoolProps {
  id: number;
  name: string;
  staked: string;
  apy: number;
  tvl: string;
  maxStakeCap?: string;
  nftCount?: number;
  balance?: string;
  paymentDetails?: {
    value: string;
    decimals: number;
  };
  getPoolsDetailsFromContract?: {
    run: () => void;
  };
  getUserStakeAmountByPoolFromContract?: {
    run: () => void;
  };
  setIsOverlapLoading?: (loading: loadingType) => void;
}

interface UnstakeProps {
  user_stake_id: number;
  capital: string;
  stake_timestamp: number;
  stake_block_number: number;
  unstake: boolean;
  unstake_timestamp: number;
  unstake_block_number: number;
  can_unstake: boolean;
  can_unstake_at: number;
  current_reward: number;
}

type loadingType = {
  isLoading: boolean;
  title: {
    id: string;
    defaultMessage: string;
  };
};

type waitingForTransactionResult = {
  isLoading: boolean;
  hash: Hash;
  function: string;
};

type nftType = {
  nft_id: string;
  nft_contract: string;
  is_claimed: boolean;
  nft_data?: {
    token_address?: string;
    token_id?: string;
    owner_of?: string;
    block_number?: string;
    block_number_minted?: string;
    token_hash?: string;
    amount?: string;
    possible_spam?: boolean;
    contract_type?: string;
    name?: string;
    symbol?: string;
    token_uri?: string;
    metadata?: string;
    last_token_uri_sync?: string;
    last_metadata_sync?: string;
    minter_address?: string;
    verified_collection?: boolean;
  };
};

const LabelGrids = styled.div`
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    justify-items: center;
    grid-column-gap: 30px;
    grid-row-gap: 10px;
    width: 100%;
    align-items: center;
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-items: center;
    grid-column-gap: 30px;
    row-gap: 10px;
    width: 100%;
    align-items: center;
  }
`;

const AccordionLabel = ({
  id,
  name,
  staked,
  apy,
  tvl,
  maxStakeCap,
  nftCount,
  balance,
  paymentDetails,
  getPoolsDetailsFromContract,
  getUserStakeAmountByPoolFromContract,
  setIsOverlapLoading,
}: PoolProps) => {
  return (
    <Group>
      <LabelGrids
      // justify="space-between"
      // gap="10px"
      // style={{ width: "100%", flexWrap: "wrap", alignItems: "center" }}
      >
        <Flex direction="column" align="center" w="100%">
          <Avatar
            src="/images/tokens/0xE97dB8503dd3E3eB0286AAFC50327C598EFDb578.svg"
            radius="xl"
            size="45px"
          />
          <Text size="16px" weight={200}>
            {/* <FormattedMessage id="pool" defaultMessage="Pool" /> {id} */}
            {name}
          </Text>
        </Flex>
        <Flex
          direction="column"
          align="center"
          w="100%"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "100%",
            whiteSpace: "nowrap",
            textAlignLast: "center",
          }}
        >
          <Text size="md" weight={700} ff="var(--fontFamily3)" tt="uppercase">
            {parseFloat(staked).toFixed(4)}{" "}
            <FormattedMessage id="jinko" defaultMessage="Neko" />
          </Text>
          <Text
            size="sm"
            style={{ filter: `drop-shadow(var(--yellowColor) 0 0 8px)` }}
          >
            <FormattedMessage id="staked" defaultMessage="Staked" />
          </Text>
        </Flex>
        <Flex direction="column" align="center" w="100%">
          <Flex direction="row" align="center" w="fit-content" pos="relative">
            <Text
              size="md"
              weight={700}
              ff="var(--fontFamily3)"
              pos="relative"
              style={{
                textOverflow: "ellipsis",
                // overflow: "hidden",
                width: "100%",
                whiteSpace: "nowrap",
                textAlignLast: "center",
              }}
            >
              {parseFloat(apy.toString()).toFixed(2)}%
              {nftCount > 0 && (
                <Text
                  size="10px"
                  weight={700}
                  ff="var(--fontFamily3)"
                  pos="absolute"
                  top="0px"
                  right="-36px"
                  c="yellow.8"
                  tt="uppercase"
                  style={{
                    textShadow: "0 0 8px var(--yellowColor)",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textAlignLast: "center",
                  }}
                >
                  <FormattedMessage id="boost" defaultMessage="Boost" />
                </Text>
              )}
            </Text>
            {/* {nftCount > 0 && (
              <Text
                size="12px"
                weight={700}
                ff="var(--fontFamily3)"
                pos="absolute"
                // top="-15px"
                right="-30%"
                c="yellow.8"
                tt="uppercase"
                style={{
                  textShadow: "0 0 8px var(--yellowColor)",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textAlignLast: "center",
                }}
              >
                <FormattedMessage id="boost" defaultMessage="Boost" />
              </Text>
            )} */}
          </Flex>
          <Text
            size="sm"
            style={{ filter: "drop-shadow(var(--yellowColor) 0 0 8px)" }}
          >
            <FormattedMessage id="apy" defaultMessage="APY" />
          </Text>
        </Flex>
        <Flex direction="column" align="center" w="100%">
          <Text
            size="md"
            weight={700}
            ff="var(--fontFamily3)"
            tt="uppercase"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "100%",
              whiteSpace: "nowrap",
              textAlignLast: "center",
            }}
          >
            {tvl} <FormattedMessage id="jinko" defaultMessage="Neko" />
          </Text>
          <Text
            size="sm"
            style={{ filter: "drop-shadow(var(--yellowColor) 0 0 8px)" }}
          >
            <FormattedMessage id="tvl" defaultMessage="TVL" />
          </Text>
        </Flex>
        <div />
      </LabelGrids>
    </Group>
  );
};

const CustomAccordion = ({
  id,
  name,
  staked,
  apy,
  tvl,
  maxStakeCap,
  nftCount,
  balance,
  paymentDetails,
  getPoolsDetailsFromContract,
  getUserStakeAmountByPoolFromContract,
  setIsOverlapLoading,
}: PoolProps) => {
  const intl = useIntl();
  const { notify } = useNotifications();
  const {
    currentLanguage: { locale: currLang },
  } = useTranslation();
  const { onGetTranslation } = useMiddlewareTranslation();
  const { account, chainId } = useActiveWeb3React();
  const { value: paymentContractAddress, decimals: paymentDecimals } =
    paymentDetails;
  const [activeTab, setActiveTab] = useState<string | null>("stake");
  const [unstakeList, setUnstakeList] = useState<UnstakeProps[]>([]);
  const [claimList, setClaimList] = useState<any[]>([]);
  const [claimable, setClaimable] = useState<{
    valid_: boolean;
    amount: string;
  }>({ valid_: false, amount: "0" });
  const [waitForTransactionResult, setWaitingForTransactionResult] =
    useState<waitingForTransactionResult>({
      isLoading: false,
      hash: "0x0",
      function: "",
    });

  const [stakeLabelButton, setStakeLabelButton] = useState<string>(
    intl.formatMessage({
      id: "stake",
      defaultMessage: "Stake",
    })
  );

  // use string to prevent floating point precision issues
  const formSchema = Yup.object().shape({
    // amount: Yup.lazy(()=>Yup.number()
    // .required("Amount is required")
    // .positive("Amount must be positive")
    // .integer("Amount must be an integer")
    // .min(1, "Amount must be greater than 1")
    // .max(parseInt(balance), `Amount must be less than ${parseInt(balance)}`)),
    amount: Yup.lazy(() =>
      Yup.string()
        .required("Amount is required")

        .test(
          "min",
          "Amount must be greater than 0",
          (value) => parseFloat(value) > 0
        )
        .test("max", "Amount must be less than balance", (value) => {
          const bigNumber1 = new BigNumber(value);
          const bigNumber2 = new BigNumber(balance);
          const comparisonResult = bigNumber1.comparedTo(bigNumber2);
          return comparisonResult === -1 || comparisonResult === 0;
        })
        .test(
          "is-decimal",
          "Amount must be a decimal that less than 4 decimal places",
          (value) => {
            const regex = /^[0-9]+(\.[0-9]{1,4})?$/;
            return regex.test(value);
          }
        )
    ),
  });

  // handle read contract
  const handleReadContract = useCallback(
    async (_functionName, _paymentTokenAddress, _paymentAbi, _args) => {
      try {
        const config = {
          address: _paymentTokenAddress,
          abi: _paymentAbi,
          functionName: _functionName,
          args: _args,
        };
        const result = await readContract(config);
        // const receipt = await waitForTransaction({
        //   hash: result.hash,
        // })
        return {
          data: result,
          error: false,
        };
      } catch (e: any) {
        console.error(e);
        const { message } = e;
        return {
          data: message,
          error: true,
        };
      }
    },
    []
  );

  // handle write contract
  const handleWriteContract = useCallback(
    async (_functionName, _paymentTokenAddress, _paymentAbi, _args) => {
      try {
        const config = await prepareWriteContract({
          address: _paymentTokenAddress,
          abi: _paymentAbi,
          functionName: _functionName,
          args: _args,
        });
        const result = await writeContract(config);
        // const receipt = await result.wait()
        // const receipt = await waitForTransaction({
        //   hash: result.hash,
        // })
        return {
          data: result.hash,
          error: false,
        };
      } catch (e: any) {
        console.error(e);
        const { message } = e;
        // notify(intl.formatMessage({ id: "errorMsgGeneral", defaultMessage: "Please try again. Confirm the transaction and make sure you are paying enough gas!" }), 'error', { title: intl.formatMessage({ id: "error", defaultMessage: "Error" }) })
        return {
          data: message,
          error: true,
        };
      }
    },
    []
  );

  const getUnstakeList = useRequest(
    async () => {
      const options: AxiosRequestConfig = {
        headers: {
          accept: "application/json",
        },
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BITBULL_API_LINK}api/staking/pool/${id}?address=${account}`,
        options
      );
      const { data, status, statusText } = await response;
      if (status !== 200) throw new Error(statusText);
      if (data.error || data.status !== 200) throw new Error(data.message);
      return data.data;
    },
    {
      ready: activeTab === "unstake",
      loadingDelay: 300,
      onSuccess: (result) => {
        setUnstakeList(result.staked);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const unstakeStaking = useRequest(
    async (poolId: number, userStakeId: number) => {
      const options: AxiosRequestConfig = {
        headers: {
          accept: "application/json",
        },
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BITBULL_API_LINK}api/staking/pool/${poolId}/unstake`,
        {
          address: account,
          user_stake_id: userStakeId,
        },
        options
      );
      const { data, status, statusText } = await response;
      if (status !== 200) throw new Error(statusText);
      if (data.error || data.status !== 200) throw new Error(data.message);

      const unstakeParamsFromBE = data.data;
      const passUnstakeResponse = await handleWriteContract(
        "unstake",
        getStakePoolAddress(chainId),
        stakeAbi,
        [
          poolId,
          unstakeParamsFromBE.stake_id,
          unstakeParamsFromBE.capital,
          unstakeParamsFromBE.reward,
          unstakeParamsFromBE.signature,
        ]
      );
      if (passUnstakeResponse.error) throw new Error(passUnstakeResponse.data);
      return passUnstakeResponse.data;
    },
    {
      manual: true,
      ready: activeTab === "unstake",
      onBefore: () => {
        setIsOverlapLoading({
          isLoading: true,
          title: {
            id: "loading",
            defaultMessage: "Loading...",
          },
        });
      },
      onSuccess: async (result) => {
        notify(
          intl.formatMessage({
            id: "your-unstake-transaction-has-been-broadcasted",
            defaultMessage:
              "Your unstake transaction has been broadcasted. Please wait for the transaction to be confirmed in the network.",
          }),
          "success"
        );

        setWaitingForTransactionResult({
          isLoading: true,
          hash: result as `0x${string}`,
          function: "unstake",
        });
        // const receipt = await waitForTransaction({
        //   hash: result as `0x${string}`,
        // });
        // if (!receipt) throw new Error("Unstake failed");
        // console.log("receipt", receipt);
        // getUnstakeList.run();
      },
      onError: (error) => {
        console.error(error);
        if (error.message === "User rejected request") {
          notify(onGetTranslation(error.message), "error");
        } else
          notify(
            intl.formatMessage({
              id: "unbale-to-stake-at-the-moment",
              defaultMessage:
                "Unbale to stake at the moment. if you have perform unstake operation, please wait for the transaction to be confirmed and finalized in the network",
            }),
            "error"
          );
      },
      onFinally: () => {
        setIsOverlapLoading({
          isLoading: false,
          title: {
            id: "",
            defaultMessage: "",
          },
        });
      },
    }
  );

  const getClaimList = useRequest(
    async () => {
      const getClaimListResponse = await handleReadContract(
        "getUserPoolClaimList",
        getStakePoolAddress(chainId),
        stakeAbi,
        [id, account]
      );
      if (
        getClaimListResponse.error ||
        (getClaimListResponse.data as TransactionReceipt).status === 0
      )
        throw new Error(getClaimListResponse.data);
      return getClaimListResponse.data;
    },
    {
      ready: activeTab === "claim",
      loadingDelay: 300,
      onSuccess: (result) => {
        setClaimList(result);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const getIsClaimable = useRequest(
    async () => {
      const checkIsClaimableResponse = await handleReadContract(
        "getClaimable",
        getStakePoolAddress(chainId),
        stakeAbi,
        [id, account]
      );
      if (
        checkIsClaimableResponse.error ||
        (checkIsClaimableResponse.data as TransactionReceipt).status === 0
      )
        throw new Error(checkIsClaimableResponse.data);
      return checkIsClaimableResponse.data;
    },
    {
      pollingInterval: 60000,
      ready: activeTab === "claim",
      loadingDelay: 300,
      onSuccess: (result) => {
        const isClaimable = new BigNumber(result.toString()).isGreaterThan(0);
        setClaimable({
          valid_: isClaimable,
          amount: getFullDisplayBalance(result.toString(), 18),
        });
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const claimStaking = useRequest(
    async () => {
      const claimStakingResponse = await handleWriteContract(
        "claim",
        getStakePoolAddress(chainId),
        stakeAbi,
        [id]
      );
      if (claimStakingResponse.error)
        throw new Error(claimStakingResponse.data);
      return claimStakingResponse.data;
    },
    {
      manual: true,
      ready: activeTab === "claim",
      onBefore: () => {
        setIsOverlapLoading({
          isLoading: true,
          title: {
            id: "loading",
            defaultMessage: "Loading...",
          },
        });
      },
      onSuccess: (result) => {
        notify(
          intl.formatMessage({
            id: "your-claim-transaction-has-been-broadcasted",
            defaultMessage:
              "Your claim transaction has been broadcasted. Please wait for the transaction to be confirmed in the network.",
          }),
          "success"
        );

        setWaitingForTransactionResult({
          isLoading: true,
          hash: result as `0x${string}`,
          function: "claim",
        });
      },
      onError: (error) => {
        console.error(error);
        notify(onGetTranslation(error.message), "error");
      },
      onFinally: () => {
        setIsOverlapLoading({
          isLoading: false,
          title: {
            id: "",
            defaultMessage: "",
          },
        });
      },
    }
  );

  // TO BE IMPROVED:: if wait for multiple transaction, need to handle the transaction hash
  useRequest(
    async () => {
      const transactionReceipt = await waitForTransaction({
        hash: waitForTransactionResult.hash as Hash,
      });
      if (transactionReceipt.status === 0)
        throw new Error(
          intl.formatMessage({
            id: "errorMsgGeneral",
            defaultMessage:
              "Please try again. Confirm the transaction and make sure you are paying enough gas!",
          })
        );
      switch (waitForTransactionResult.function) {
        case "approve":
          notify(
            intl.formatMessage({
              id: "you-have-successfully-approved-the-transaction",
              defaultMessage: "You have successfully approved the transaction",
            }),
            "success"
          );
          break;
        case "stake":
          notify(
            intl.formatMessage({
              id: "you-have-successfully-staked",
              defaultMessage: "You have successfully staked.",
            }),
            "success"
          );

          getPoolsDetailsFromContract.run();
          getUserStakeAmountByPoolFromContract.run();
          break;
        case "unstake":
          notify(
            intl.formatMessage({
              id: "you-have-successfully-unstaked",
              defaultMessage: "You have successfully unstaked.",
            }),
            "success"
          );
          getUnstakeList.run();
          getClaimList.run();
          break;
        case "claim":
          notify(
            intl.formatMessage({
              id: "you-have-successfully-claimed",
              defaultMessage: "You have successfully claimed.",
            }),
            "success"
          );
          getUnstakeList.run();
          getClaimList.run();
          break;
        default:
          break;
      }
      setWaitingForTransactionResult({
        isLoading: false,
        hash: "0x0",
        function: "",
      });
      checkIsEnoughAllowance(
        formatStringWithDecimalsInWei(formik.values.amount)
      );
    },
    {
      // manual: true,
      ready:
        waitForTransactionResult.isLoading &&
        waitForTransactionResult.hash !== "0x0",
      onError: (error) => {
        console.error("error");
        notify(onGetTranslation(error.message), "error");
      },
    }
  );

  // const handleKeyPress = useCallback((e) => {
  //   // if (e.key === "Enter") {
  //   //   e.preventDefault();
  //   // }
  //   if (/^\d$/.test(e.key)) {
  //     e.preventDefault();
  //     console.log(e.key)
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!stakeInputRef.current) return;
  //   const stakeRef = stakeInputRef.current;
  //   stakeRef.addEventListener("keydown", handleKeyPress);

  //   return () => { // eslint-disable-line
  //     stakeRef.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, [handleKeyPress]);

  const checkIsWaitingForStakeTransaction = useMemo(() => {
    return (
      waitForTransactionResult.isLoading &&
      waitForTransactionResult.hash !== "0x0" &&
      (waitForTransactionResult.function === "stake" ||
        waitForTransactionResult.function === "approve")
    );
  }, [waitForTransactionResult]);

  const checkIsEnoughAllowance = useCallback(
    async (paymentAmountInWei) => {
      const getAllowanceResponse = await handleReadContract(
        "allowance",
        paymentContractAddress,
        jinkoAbi,
        [account, getStakePoolAddress(chainId)]
      );
      if (
        getAllowanceResponse.error ||
        (getAllowanceResponse.data as TransactionReceipt).status === 0
      )
        throw new Error(getAllowanceResponse.data);
      // check allowance, if not enough, approve allowance
      const allowanceAmountInWei = getAllowanceResponse.data.toString();
      // const paymentAmountInWei = formatStringWithDecimalsInWei(e.target.value);
      const allowanceAmountInBigNumber = new BigNumber(allowanceAmountInWei);
      const paymentAmountInBigNumber = new BigNumber(paymentAmountInWei);
      if (
        allowanceAmountInBigNumber.isLessThan(paymentAmountInBigNumber) ||
        allowanceAmountInBigNumber.isEqualTo(0)
      ) {
        setStakeLabelButton(
          intl.formatMessage({
            id: "approve",
            defaultMessage: "Approve",
          })
        );
      } else
        setStakeLabelButton(
          intl.formatMessage({
            id: "stake",
            defaultMessage: "Stake",
          })
        );
    },
    [account, chainId, handleReadContract, intl, paymentContractAddress]
  );

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: { amount: "0" },
    validationSchema: formSchema,
    validateOnChange: true,
    onSubmit: async (data, { resetForm }) => {
      try {
        setIsOverlapLoading({
          isLoading: true,
          title: {
            id: "loading",
            defaultMessage: "Loading...",
          },
        });
        notify(
          intl.formatMessage({
            id: "stake-in-progress",
            defaultMessage: "Staking in progress, please wait...",
          }),
          "info"
        );
        const paymentAmountInWei = formatStringWithDecimalsInWei(data.amount);
        const getAllowanceResponse = await handleReadContract(
          "allowance",
          paymentContractAddress,
          jinkoAbi,
          [account, getStakePoolAddress(chainId)]
        );
        if (
          getAllowanceResponse.error ||
          (getAllowanceResponse.data as TransactionReceipt).status === 0
        )
          throw new Error(getAllowanceResponse.data);
        // check allowance, if not enough, approve allowance
        const allowanceAmountInWei = getFullDisplayBalance(
          new BigNumber(getAllowanceResponse.data.toString()),
          0
        );
        if (parseFloat(allowanceAmountInWei) < parseFloat(paymentAmountInWei)) {
          // approve allowance
          notify(
            intl.formatMessage({
              id: "kindly-allows-us-to-spend-your",
              defaultMessage:
                "Kindly authorize the use of tokens to enable seamless interactions",
            }),
            "info"
          );
          const approveAllowanceResponse = await handleWriteContract(
            "approve",
            paymentContractAddress,
            jinkoAbi,
            [getStakePoolAddress(chainId), paymentAmountInWei]
          );
          if (approveAllowanceResponse.error)
            throw new Error(approveAllowanceResponse.data);
          notify(
            intl.formatMessage({
              id: "your-approved-transaction-has-been-broadcasted",
              defaultMessage:
                "Your approved transaction has been broadcasted. Once the transaction is confirmed, you may proceed to stake.",
            }),
            "success"
          );
          setWaitingForTransactionResult({
            isLoading: true,
            hash: approveAllowanceResponse.data as `0x${string}`,
            function: "approve",
          });
          setIsOverlapLoading({
            isLoading: false,
            title: { id: "", defaultMessage: "" },
          });
          return;
        }
        notify(
          intl.formatMessage({
            id: "please-confirm-the-transaction-for-staking",
            defaultMessage: "Please confirm the transaction for staking",
          }),
          "info"
        );

        const result = await handleWriteContract(
          "stake",
          getStakePoolAddress(chainId),
          stakeAbi,
          [id, paymentAmountInWei]
        );
        if (result.error) throw new Error(result.data);

        // const receipt = await waitForTransaction({
        //   hash: result.data as `0x${string}`,
        // });
        // if (!receipt) throw new Error("Stake failed");
        // getPoolsDetailsFromContract.run();
        // getUserStakeAmountByPoolFromContract.run();
        // notify(
        //   intl.formatMessage({
        //     id: "stake-successfully",
        //     defaultMessage: "Stake successfully",
        //   }),
        //   "success"
        // );
        notify(
          intl.formatMessage({
            id: "your-staking-transaction-has-been-broadcasted",
            defaultMessage:
              "Your staking transaction has been broadcasted. Please wait for the transaction to be confirmed in the network.",
          }),
          "success"
        );

        resetForm();
        setIsOverlapLoading({
          isLoading: false,
          title: { id: "", defaultMessage: "" },
        });
        setWaitingForTransactionResult({
          isLoading: true,
          hash: result.data as `0x${string}`,
          function: "stake",
        });
        return;
      } catch (e: any) {
        const { message } = e;
        console.error(e);
        notify(onGetTranslation(message), "error");
        setIsOverlapLoading({
          isLoading: false,
          title: { id: "", defaultMessage: "" },
        });
      }
    },
  });

  const debouncedStakeAmount = useDebounce(formik.values.amount, {
    wait: 800,
  });
  useEffect(() => {
    if (!debouncedStakeAmount) return;
    checkIsEnoughAllowance(formatStringWithDecimalsInWei(debouncedStakeAmount));
  }, [debouncedStakeAmount, checkIsEnoughAllowance]);

  const unstakeListTr = unstakeList.map((unstake) => (
    <tr key={unstake.stake_timestamp} aria-label={`${unstake.stake_timestamp}`}>
      <td>
        {new Date(unstake.stake_timestamp * 1000).toLocaleDateString(currLang, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </td>
      <td>{unstake.capital ? parseFloat(unstake.capital).toFixed(4) : 0}</td>
      <td>{unstake.current_reward ? unstake.current_reward.toFixed(4) : 0}</td>
      <td>
        {id === 0
          ? // current date
            new Date().toLocaleDateString(currLang, {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })
          : new Date(unstake.can_unstake_at * 1000).toLocaleDateString(
              currLang,
              {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }
            )}
      </td>
      <td>
        <Button
          variant="text"
          disabled={!unstake.can_unstake}
          onClick={() => {
            unstakeStaking.run(id, unstake.user_stake_id);
          }}
        >
          <FormattedMessage id="unstake" defaultMessage="Unstake" />
        </Button>
      </td>
    </tr>
  ));

  const claimListTr = claimList.map((claim) => (
    <tr>
      <td>
        {new Date(claim[0] * 1000).toLocaleDateString(currLang, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </td>
      <td>
        {/* {getFormatNumberWithK(
          getBalanceAmount(claim[1].toString(), 18).toString(),
          2
        )} */}
        {getFullDisplayBalance(claim[1].toString(), 18, 4)}
      </td>
    </tr>
  ));

  return (
    <Accordion.Item value={id.toString()} key={id}>
      <Accordion.Control>
        <AccordionLabel
          id={id}
          name={name}
          staked={staked}
          apy={apy}
          tvl={tvl}
          maxStakeCap={maxStakeCap}
          nftCount={nftCount}
        />
      </Accordion.Control>
      <Accordion.Panel>
        <Tabs variant="pills" value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List grow>
            <Tabs.Tab value="stake">
              <FormattedMessage id="stake" defaultMessage="Stake" />
            </Tabs.Tab>
            <Tabs.Tab value="unstake">
              <FormattedMessage id="unstake" defaultMessage="Unstake" />
            </Tabs.Tab>
            <Tabs.Tab value="claim">
              <FormattedMessage id="claim" defaultMessage="Claim" />
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="stake" pt="20px">
            <form
              onSubmit={
                // form.onSubmit(handleFormSubmit)
                formik.handleSubmit
              }
              autoComplete="off"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Flex direction="column" gap="20px" maw="625px" w="100%">
                <Flex direction="column" align="center" gap="10px">
                  <Text>
                    <FormattedMessage
                      id="disclaimer-stake"
                      defaultMessage="Disclaimer: you can claim your reward after unstaking for 7 days."
                    />
                  </Text>
                  {/* {maxStakeCap !== "0" && ( */}
                  <Text>
                    <FormattedMessage
                      id="max-stake-cap-jinko"
                      defaultMessage="Max Stake Cap: {maxStakeCap} JINKO"
                      values={{ maxStakeCap }}
                    />
                  </Text>
                  {/* )} */}
                  <Flex direction="row" justify="space-between" w="100%">
                    <Text color="yellow.8">
                      <FormattedMessage
                        id="amount-jinko"
                        defaultMessage="Amount (JINKO)"
                      />
                    </Text>
                    <Text color="yellow.8">
                      <FormattedMessage
                        id="balance-staking"
                        defaultMessage="Balance: {balance}"
                        values={{ balance }}
                      />
                    </Text>
                  </Flex>
                  <Input.Wrapper variant="studio" error={formik.errors.amount}>
                    <Input
                      // icon={<IconBrandTwitter size="1rem" />}
                      variant="studio"
                      required
                      name="amount"
                      placeholder={intl.formatMessage({
                        id: "enter-amount",
                        defaultMessage: "Enter Amount",
                      })}
                      onChange={async (e) => {
                        formik.setFieldValue("amount", e.target.value);
                      }}
                      // onBlur={(e) =>
                      //   checkIsEnoughAllowance(
                      //     formatStringWithDecimalsInWei(e.target.value)
                      //   )
                      // }
                      value={formik.values.amount}
                      defaultValue={formik.initialValues.amount}
                      // min={0}
                      // max={parseFloat(balance)}
                      // precision={paymentDecimals[chainId]}
                      // step={0.000000000000000001}
                      // decimalSeparator="."
                      // onChange={formik.handleChange}
                      // value={formik.values.amount}
                      // {...form.getInputProps("amount")}
                      // error={form.values.amount > 0 && form.errors.amount}
                      type="number"
                      error={formik.errors.amount}
                      rightSection={
                        <Button
                          variant="iconWithTransparentBg"
                          uppercase
                          onClick={() => {
                            formik.setFieldValue(
                              "amount",
                              `${formatStringWithDecimals(balance, 4)}`
                            );
                          }}
                          onMouseUp={() => {
                            checkIsEnoughAllowance(
                              formatStringWithDecimalsInWei(balance)
                            );
                          }}
                          styles={(theme) => ({
                            root: {
                              color: theme.colors.yellow[8],
                              backgroundColor: "transparent",
                            },
                          })}
                        >
                          <FormattedMessage id="max" defaultMessage="Max" />
                        </Button>
                      }
                    />
                  </Input.Wrapper>
                </Flex>
                <Button
                  variant="text"
                  type="submit"
                  uppercase
                  disabled={checkIsWaitingForStakeTransaction}
                >
                  {checkIsWaitingForStakeTransaction ? (
                    <Loader color="black" size="sm" />
                  ) : (
                    stakeLabelButton
                  )}
                </Button>
              </Flex>
            </form>
          </Tabs.Panel>

          <Tabs.Panel value="unstake" pt="xs">
            <Flex w="100%" h="100%" direction="column" gap="10px">
              <Flex
                direction="column"
                gap="10px"
                w="100%"
                style={{ overflowX: "auto" }}
              >
                <Table variant="unstake">
                  <thead>
                    <tr>
                      <th>
                        {intl.formatMessage({
                          id: "stake-date",
                          defaultMessage: "Stake Date",
                        })}
                      </th>
                      <th>
                        {intl.formatMessage({
                          id: "stake-amount-jinko",
                          defaultMessage: "Stake Amount (JINKO)",
                        })}
                      </th>
                      <th>
                        {intl.formatMessage({
                          id: "reward-jinko",
                          defaultMessage: "Reward (JINKO)",
                        })}
                      </th>
                      <th>
                        {intl.formatMessage({
                          id: "maturity-date",
                          defaultMessage: "Maturity Date",
                        })}
                      </th>
                      <th>
                        {intl.formatMessage({
                          id: "unstake",
                          defaultMessage: "Unstake",
                        })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getUnstakeList.loading ? (
                      <tr>
                        <td colSpan={5} style={{ textAlignLast: "center" }}>
                          <Loader />
                        </td>
                      </tr>
                    ) : unstakeList.length > 0 ? (
                      unstakeListTr
                    ) : (
                      <tr>
                        <td colSpan={5} style={{ textAlignLast: "center" }}>
                          <Text>
                            <FormattedMessage
                              id="no-stake-records"
                              defaultMessage="No stake records"
                            />
                          </Text>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Flex>
            </Flex>
          </Tabs.Panel>

          <Tabs.Panel value="claim" pt="xs">
            <Flex w="100%" h="100%" direction="column" gap="10px">
              <Flex
                direction="column"
                gap="10px"
                w="100%"
                style={{ overflowX: "auto" }}
              >
                <Table variant="unstake" style={{ textAlignLast: "center" }}>
                  <thead>
                    <tr>
                      <th>
                        {intl.formatMessage({
                          id: "unlock-date",
                          defaultMessage: "Unlock Date",
                        })}
                      </th>
                      <th>
                        {intl.formatMessage({
                          id: "amount-jinko",
                          defaultMessage: "Amount (JINKO)",
                        })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getClaimList.loading ? (
                      <tr>
                        <td colSpan={2} style={{ textAlignLast: "center" }}>
                          <Loader />
                        </td>
                      </tr>
                    ) : claimListTr.length > 0 ? (
                      claimListTr
                    ) : (
                      <tr>
                        <td colSpan={2} style={{ textAlignLast: "center" }}>
                          <Text>
                            <FormattedMessage
                              id="no-claim-records"
                              defaultMessage="No claim records"
                            />
                          </Text>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Flex>
              <Button
                variant="text"
                type="submit"
                uppercase
                disabled={!claimable.valid_}
                onClick={() => {
                  claimStaking.run();
                }}
              >
                <FormattedMessage
                  id="claim-(amount)-jinko"
                  defaultMessage="Claim ({amount} JINKO)"
                  values={{ amount: parseFloat(claimable.amount).toFixed(4) }}
                />
              </Button>
            </Flex>
          </Tabs.Panel>
        </Tabs>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

const StakingPool: React.FC = () => {
  const intl = useIntl();
  const { account, chainId } = useActiveWeb3React();
  const { content } = useTokenAuth();
  const { jinkoBalance } = useContext(ComponentsContext);
  const [isOverlapLoading, setIsOverlapLoading] = useState<loadingType>({
    isLoading: false,
    title: { id: "", defaultMessage: "" },
  });
  const [poolList, setPoolList] = useState<
    {
      pool_id: number;
      reward_apy: number;
      lock_period: number;
      staked?: string;
      tvl?: string;
      maxStakeCap?: string;
    }[]
  >([]);

  const getCurrentPaymentToken = useCallback(() => {
    const c = getPaymentList(chainId).filter(
      (item) => item.symbol === "Neko"
    )[0];
    return c;
  }, [chainId]);

  const { onGetListOfNfts: handleGetListOfNfts } = useGetListOfNfts();

  const [nftsList, setNftsList] = useState<nftType[]>([]);

  const getListOfNfts = useRequest(
    () => handleGetListOfNfts(content.token, content.walletAddress),
    {
      ready: content?.token !== undefined,
      onSuccess: (result) => {
        try {
          if (result.error || result.data.error)
            throw new Error(result.message);
          setNftsList(result.data.data.nfts);
        } catch (e) {
          console.error(e);
        }
      },
      onError: (error) => {
        setNftsList([]);
      },
    }
  );
  const getPool = useRequest(
    async () => {
      const options: AxiosRequestConfig = {
        headers: {
          accept: "application/json",
        },
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BITBULL_API_LINK}api/staking/pools`,
        options
      );
      const { data, status, statusText } = await response;
      if (status !== 200) throw new Error(statusText);
      if (data.error || data.status !== 200) throw new Error(data.message);
      return data.data;
    },
    {
      ready: content?.token !== undefined,
      onSuccess: (result) => {
        setPoolList(result);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const getPoolsDetailsFromContract = useRequest(
    async () => {
      const multicallParams = poolList.map((item) => {
        return {
          address: getStakePoolAddress(chainId),
          name: "pools",
          params: [item.pool_id],
        };
      });
      const getPoolMulticall = await multicallv2(
        stakeAbi,
        multicallParams,
        chainId
      );
      return getPoolMulticall;
    },
    {
      pollingInterval: 60000,
      ready: content?.token !== undefined && poolList.length > 0,
      onSuccess: (result) => {
        const updatePoolList = poolList.map((item, index) => {
          return {
            ...item,
            // staked:result[index].staked,
            tvl: getBalanceAmount(
              result[index].total_staked.toString(),
              18
            ).toFixed(4),
            maxStakeCap: new Intl.NumberFormat().format(
              getBalanceAmount(
                result[index].max_stake_cap.toString(),
                18
              ).toNumber()
            ),
          };
        });
        setPoolList(updatePoolList);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const getUserStakeAmountByPoolFromContract = useRequest(
    async () => {
      const multicallParams = poolList.map((item) => {
        return {
          address: getStakePoolAddress(chainId),
          name: "users",
          params: [account, item.pool_id],
        };
      });
      const getPoolMulticall = await multicallv2(
        stakeAbi,
        multicallParams,
        chainId
      );
      return getPoolMulticall;
    },
    {
      pollingInterval: 60000,
      ready: content?.token !== undefined && poolList.length > 0,
      onSuccess: (result) => {
        const updatePoolList = poolList.map((item, index) => {
          return {
            ...item,
            staked: getBalanceAmount(
              result[index].staked_amount.toString(),
              18
            ).toString(),
          };
        });
        setPoolList(updatePoolList);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  if (getPool.loading || poolList.length === 0)
    return (
      <PageLoader>
        <Text size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold">
          <FormattedMessage
            id="loading"
            defaultMessage="Loading..."
            values={{
              br: <br />,
            }}
          />
        </Text>
      </PageLoader>
    );

  const items =
    poolList.length > 0 &&
    poolList.map((item) => (
      <CustomAccordion
        id={item.pool_id}
        name={(() => {
          switch (item.pool_id) {
            case 0:
              return intl.formatMessage({
                id: "flexible",
                defaultMessage: "Flexible",
              });
            case 1:
              return intl.formatMessage({
                id: "30-days-lock",
                defaultMessage: "30 Days Lock",
              });
            case 2:
              return intl.formatMessage({
                id: "180-days-lock",
                defaultMessage: "180 Days Lock",
              });
            case 3:
              return intl.formatMessage({
                id: "360-days-lock",
                defaultMessage: "360 Days Lock",
              });
            default:
              return intl.formatMessage(
                {
                  id: "pool-unknown",
                  defaultMessage: "Pool {id}",
                },
                { id: item.pool_id }
              );
          }
        })()}
        staked={item.staked || "0"}
        apy={item.reward_apy}
        tvl={item.tvl || "0"}
        maxStakeCap={item.maxStakeCap || "0"}
        nftCount={nftsList.length}
        balance={getFullDisplayBalance(
          jinkoBalance.toString(),
          getCurrentPaymentToken().decimals[chainId]
        )}
        paymentDetails={getCurrentPaymentToken()}
        getPoolsDetailsFromContract={getPoolsDetailsFromContract}
        getUserStakeAmountByPoolFromContract={
          getUserStakeAmountByPoolFromContract
        }
        setIsOverlapLoading={setIsOverlapLoading}
      />
    ));

  return (
    <>
      <Page>
        <Container size="md" pb="30px">
          <Flex direction="column" justify="center" align="center">
            <Text
              align="center"
              size="clamp(2.8rem, 1vw, 3.125rem)"
              weight={900}
              color="var(--yellowColor)"
              transform="uppercase"
              lh={1}
            >
              <FormattedMessage
                id="stake-jinko-token"
                defaultMessage="Stake Neko Token"
              />
            </Text>
            <Space h="md" />
            <Accordion
              chevronPosition="right"
              variant="separated"
              style={{ width: "100%" }}
            >
              {items}
            </Accordion>
          </Flex>
        </Container>
      </Page>
      {isOverlapLoading.isLoading && (
        <PageLoader>
          <Text size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold">
            {isOverlapLoading.title.id && (
              <FormattedMessage
                {...isOverlapLoading.title}
                values={{
                  br: <br />,
                }}
              />
            )}
          </Text>
        </PageLoader>
      )}
    </>
  );
};

export default StakingPool;
