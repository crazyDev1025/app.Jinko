import React, { useCallback, useEffect, useMemo, useState, useContext } from 'react'
import styled from '@emotion/styled'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  Button as MButton,
  Flex,
  Drawer,
  Select,
  Checkbox,
  Radio as MRadio,
  Loader
} from '@mantine/core'
import { FormattedMessage, useIntl } from 'react-intl'
import { useMediaQuery } from 'react-responsive'
import { IoWalletOutline } from 'react-icons/io5'
import { Hash, prepareWriteContract, readContract, waitForTransaction, writeContract } from '@wagmi/core'
import BigNumber from 'bignumber.js'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { useNotifications } from 'reapop';
import { useRequest } from 'ahooks'

import { GeneralText } from 'components/GlobalStyle'
import { useGetJinkoPrice, usePurchaseCreditsPackages } from 'hooks/useCredit'
import { getPaymentList } from 'utils/addressHelpers'
import constantsContracts from 'config/constants/contracts'
import useMiddlewareTranslation from 'hooks/useMiddlewareTranslation';
import jinkoAbi from 'config/abi/jinko.json'
import paymenHanlderAbi from 'config/abi/paymentHandler.json'
import { TransactionReceipt } from '@ethersproject/providers';
import PageLoaderStudio from 'components/Loader/PageLoaderStudio'
import { ComponentsContext } from 'contexts/ComponentsContext'
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { multichainTokens } from 'config/constants/tokens';
import { getFullDisplayBalance, getFormatNumberWithK, getFormatNumberWithDecimal } from 'utils/formatBalance'
import { useTokenAuth } from 'hooks/useTokenAuth';
 
// const ButtonBalance = styled(Button)`
// flex-direction: row;
// align-items: center;
// justify-content: space-between;
// border-radius: 10px;
// border: 2px solid var(--yellowColor);
// height: 60px;
// max-width: 138px;
// min-width: 125px;
// width: 100%;
// padding: 0px;
// >span{
//   width: 100%;
// }
// `

const IconBalance = styled(Flex)`
width:30px;
min-width: 0px;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
height:100%;  
justify-content: center;  
place-items: center;

`

const WalletComponentWrapper = styled(Flex)`
gap:5px;
place-items:center;
flex-direction:row;
width: 100%;
place-content: end;
@media only screen and (min-width: 0px) and (max-width: 767px) {
  // min-width: 220px;
}
@media only screen and (min-width: 768px) {
  // min-width: 260px;
}
`


// const ButtonIcon = styled(Button) <{ minWidth: string, minheight: string, padding?: string }>`
// min-width:${({ minWidth }) => minWidth};
// min-height:${({ minheight }) => minheight};
// // min-width:fit-content;
// padding:${({ padding }) => padding || ""};
// background: transparent;
// // border: none;
// margin: 0px;
// align-items: center;
// height: auto;
// cursor: pointer;
// box-sizing: border-box;
// border-radius: var(--nextui-space-5);
// :hover {
//     cursor: pointer;
//   }
// `

// const ButtonText = styled(Button) <{ height: string, width: string, bg: string, padding?: string }>`
//   height: ${({ height }) => height};
//   width: ${({ width }) => width};
//   padding: ${({ padding }) => padding || '0px'};
//   border-radius: 20px;
//   min-width: ${({ width }) => width};
//   background-color: ${({ bg }) => bg}!important;
//   color: black!important;
//   :hover {
//     cursor: pointer;
//   }
//   :disabled {
//     cursor: not-allowed;
//     background-color: #E6E8EC!important;
//     pointer-events: visible;
//   }
// `

// const ButtonCredits = styled(Button) <{ isselected?: boolean, height: string, width: string, padding?: string }>`
//   height: ${({ height }) => height};
//   width: ${({ width }) => width};
//   padding: ${({ padding }) => padding || '0px'};
//   border-radius: 20px;
//   min-width: ${({ width }) => width};
//   background-color: transparent!important;
//   background-image: ${({ isselected }) => isselected ? "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%)" : "transparent"}!important;
//   border: ${({ isselected }) => isselected ? "1px solid #E5FF00" : "1px solid #E6E8EC"}!important;
//   border-radius: 5px;
//   :hover {
//     cursor: pointer;
//   }
// `

const CreditGrid = styled(MRadio.Group)`
width: 100%;
height: 100%;
  display: grid;
  grid-gap: 12px;
  grid-auto-flow: dense;
  grid-template-columns:repeat(3, 1fr);
  // grid-template-rows: repeat(3, 1fr);
  
`

// const CreditGridItem = styled(MRadio)`
// width: 100%;
// >div{
//   width: 100%;
// }
// .nextui-radio-point{
//   display:none;
// }
// .nextui-radio-text{
//   width: 100%;
// }
// `

const CustomForm = styled.form`
display:flex;
flex-direction:column;
gap:20px;
width:100%;
height:100%;
`

const SelectWrapper = styled(Flex)`
height:fit-content;
background-color:#16181A;
border:1px solid #777E90;
border-radius:9px;
padding:8px 12px;
width: 100%;
display: grid;
// grid-gap: 5px;
grid-auto-flow: dense;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  & :nth-of-type(1) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  & :nth-of-type(2) {
    grid-column: 2/2;
    grid-row: 1/2;
  }
  & :nth-of-type(3) {
    grid-column: 1/3;
    grid-row: 2/2;
  }

`

type jinkoPrice = {
  usd: string,
  jinko: string
}

type waitingForTransactionResult = {
  isLoading: boolean,
  hash: Hash
  function: string
}

const WalletDrawer: React.FC<any> = () => {
  const intl = useIntl()
  const { content } = useTokenAuth()
  const { notify } = useNotifications()
  const { onGetTranslation } = useMiddlewareTranslation()
  const { chainId, account } = useActiveWeb3React()
  const { onPurchaseCreditsPackages: handlePurchaseCreditsPackages } = usePurchaseCreditsPackages()
  const { onGetJinkoPrice: handleGetJinkoPrice } = useGetJinkoPrice()
  const { walletOpened, walletClose, credit, getCredit, creditsPackages, getCreditsPackages, jinkoBalance } = useContext(ComponentsContext)
  const [paymentList, setPaymentList] = useState<any[]>(getPaymentList(chainId))
  const [jinkoPrice, setJinkoPrice] = useState<jinkoPrice>({ usd: "0.00", jinko: "0.00" })
  const [dropdownBalance, setDropdownBalance] = useState<string>("0")
  const [waitForTransactionResult, setWaitingForTransactionResult] = useState<waitingForTransactionResult>({ isLoading: false, hash: "0x0", function: "" })
  const [isOverlapLoading, setIsOverlapLoading] = useState<{ isLoading: boolean, title: { id: string, defaultMessage: string } }>({ isLoading: false, title: { id: "", defaultMessage: "" } })
  const formSchema = Yup.object().shape({
    selectedCreditsPackage: Yup.string()
      .required(intl.formatMessage({ id: "credits-package-is-required", defaultMessage: "Credits Package is required" }))
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { selectedCreditsPackage: null, paymentToken: paymentList[0].value, isAgreed: false },
    validationSchema: formSchema,
    onSubmit: async (data, { resetForm }) => {
      try {
        setIsOverlapLoading({ isLoading: true, title: { id: "processing", defaultMessage: "Processing..." } })
        // get purchase param from server
        const getPurchaseCreditParamResponse = await handlePurchaseCreditsPackages(content.token, data.selectedCreditsPackage, account, data.paymentToken, chainId)
        if (getPurchaseCreditParamResponse.error || getPurchaseCreditParamResponse.data.error) throw new Error(getPurchaseCreditParamResponse.message)
        // get allowance
        const getAllowanceResponse = await handleReadContract('allowance', data.paymentToken, jinkoAbi, [account, constantsContracts.paymentHandlerContr[chainId]])
        if (getAllowanceResponse.error || (getAllowanceResponse.data as TransactionReceipt).status === 0) throw new Error(intl.formatMessage({ id: "errorMsgGeneral", defaultMessage: "Please try again. Confirm the transaction and make sure you are paying enough gas!" }))
        // check allowance, if not enough, approve allowance
        const decimals = getCurrentPaymentToken().decimals[chainId]
        const allowanceAmount = getFullDisplayBalance(new BigNumber((getAllowanceResponse.data).toString()), decimals)
        const tokenPaymentAmount = getFullDisplayBalance(new BigNumber((getPurchaseCreditParamResponse.data.data.token_payment_amount_wei).toString()), decimals)
        if (allowanceAmount < tokenPaymentAmount) {
          // approve allowance
          notify(intl.formatMessage({ id: "kindly-allows-us-to-spend-your", defaultMessage: "Kindly authorize the use of tokens to enable seamless interactions" }), 'info')
          const approveAllowanceResponse = await handleWriteContract('approve', data.paymentToken, jinkoAbi, [constantsContracts.paymentHandlerContr[chainId], getPurchaseCreditParamResponse.data.data.token_payment_amount_wei])
          if (approveAllowanceResponse.error) throw new Error(intl.formatMessage({ id: "errorMsgGeneral", defaultMessage: "Please try again. Confirm the transaction and make sure you are paying enough gas!" }))
          notify(intl.formatMessage({ id: "you-have-successfully-submit-the-approve", defaultMessage: "You have successfully submitted the approve transaction, Please wait for the transaction to be confirmed" }), 'success')
          setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
          setWaitingForTransactionResult({ isLoading: true, hash: approveAllowanceResponse.data as Hash, function: "approve" })
          return ''
        }
        // purchase credits
        const purchaseCreditResponse = await handleWriteContract('purchase', constantsContracts.paymentHandlerContr[chainId], paymenHanlderAbi, [getPurchaseCreditParamResponse.data.data.PurchaseParams, getPurchaseCreditParamResponse.data.data.signature])
        if (purchaseCreditResponse.error || (purchaseCreditResponse.data as TransactionReceipt).status === 0) throw new Error(intl.formatMessage({ id: "errorMsgGeneral", defaultMessage: "Please try again. Confirm the transaction and make sure you are paying enough gas!" }))
        notify(intl.formatMessage({ id: "you-have-successfully-submit-the-purchase", defaultMessage: "You have successfully submitted the purchase transaction, your credit will be topup once the on chain transaction is confirmed" }), 'success')
        setWaitingForTransactionResult({ isLoading: true, hash: purchaseCreditResponse.data as Hash, function: "purchase" })
        getBalanceOf.run()
        getJinkoPrice.run()
        setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
        resetForm()
        return ''
      } catch (e: string | any) {
        console.error(e)
        setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
        return notify(onGetTranslation(e.message), 'error')
      }
    }
  })

  // get current payment token from payment list
  const getCurrentPaymentToken = useCallback(() => {
    return paymentList.filter((item) => item.value === formik.values.paymentToken)[0]
  }, [paymentList, formik.values.paymentToken])

  // get current credits package from credits package list
  const getCurrentCreditsPackage = useCallback(() => {
    return creditsPackages?.filter((item) => item.id === formik.values.selectedCreditsPackage)[0]
  }, [creditsPackages, formik.values.selectedCreditsPackage])

  // handle read contract
  const handleReadContract = useCallback(async (_functionName, _paymentTokenAddress, _paymentAbi, _args) => {
    try {
      const config = {
        address: _paymentTokenAddress,
        abi: _paymentAbi,
        functionName: _functionName,
        args: _args
      }
      const result = await readContract(config)
      // const receipt = await waitForTransaction({
      //   hash: result.hash,
      // })
      return {
        data: result,
        error: false
      }

    } catch (e) {
      console.error(e)
      return {
        data: e,
        error: true
      }
    }
  }, [])

  // handle write contract
  const handleWriteContract = useCallback(async (_functionName, _paymentTokenAddress, _paymentAbi, _args) => {
    try {
      const config = await prepareWriteContract({
        address: _paymentTokenAddress,
        abi: _paymentAbi,
        functionName: _functionName,
        args: _args
      })
      const result = await writeContract(config)
      // const receipt = await result.wait()
      // const receipt = await waitForTransaction({
      //   hash: result.hash,
      // })
      return {
        data: result.hash,
        error: false
      }

    } catch (e) {
      console.error(e)
      // notify(intl.formatMessage({ id: "errorMsgGeneral", defaultMessage: "Please try again. Confirm the transaction and make sure you are paying enough gas!" }), 'error', { title: intl.formatMessage({ id: "error", defaultMessage: "Error" }) })
      return {
        data: e,
        error: true
      }
    }
  }, [])

  const getBalanceOf = useRequest(() => handleReadContract('balanceOf', formik.values.paymentToken, jinkoAbi, [account]), {
    refreshDeps: [account, chainId, formik.values.paymentToken, getCurrentPaymentToken],
    pollingInterval: 30000,
    ready: content?.token !== undefined,
    onSuccess: (result) => {
      if (result.error || (result.data as TransactionReceipt).status === 0) throw new Error(intl.formatMessage({ id: "unable-to-get-balance", defaultMessage: "Unable to get balance." }))
      const decimals = getCurrentPaymentToken().decimals[chainId]
      const balance = getFullDisplayBalance(new BigNumber((result.data).toString()), decimals)
      const balanceWith2Decimals = getFormatNumberWithDecimal(balance, 2)
      setDropdownBalance(balanceWith2Decimals)
    },
    onError: (error) => {
      console.error(error)
      // notify(onGetTranslation(error.message), 'error')
    }
  }
  );

  const getJinkoPrice = useRequest(() => handleGetJinkoPrice(content.token), {
    refreshDeps: [account, chainId, content?.token],
    ready: content?.token !== undefined,
    onSuccess: (result) => {
      if (result.error || result.data.error) throw new Error(result.message)
      // const jinkoUsd = result.data.data['jinko-usd']
      const usdJinko = result.data.data['usd-jinko']
      const usd = (Number(getCurrentCreditsPackage()?.credits || 0) / 100)
      setJinkoPrice({ usd: getFormatNumberWithK(usd, 1, 8), jinko: getFormatNumberWithDecimal(usd * Number(usdJinko), 8) })
    },
    onError: (error) => {
      console.error(error)
      // notify(onGetTranslation(error.message), 'error')
    }
  });

  const isSufficientBalance = useMemo(() => {
    const spendsAmount = Number(getCurrentPaymentToken()?.symbol === "USDT" ? jinkoPrice.usd : jinkoPrice.jinko)
    return spendsAmount <= Number(dropdownBalance)
  }, [getCurrentPaymentToken, dropdownBalance, jinkoPrice])

  const isValidTopUp = useMemo(() => {
    return creditsPackages?.length > 0 && formik.values.selectedCreditsPackage && formik.values.isAgreed && isSufficientBalance && waitForTransactionResult.isLoading === false
  }, [formik, creditsPackages, isSufficientBalance, waitForTransactionResult.isLoading])

  const formikValues = useMemo(() => {
    return formik.values
  }, [formik.values])

  const bonusCredits = useMemo(() => {
    return getCurrentCreditsPackage()?.credits * (getCurrentCreditsPackage()?.bonus)
  }, [getCurrentCreditsPackage])

  // handle change payment token
  const handleChangePaymentToken = (value) => {
    formik.setFieldValue('paymentToken', value)
    getJinkoPrice.run()
  }

  const handleChooseCreditsPackage = (id) => {
    formik.setFieldValue('selectedCreditsPackage', id)
    getJinkoPrice.run()
  }

  useEffect(() => {
    const getTransactionStatus = async () => {
      const transactionReceipt = await waitForTransaction({
        hash: waitForTransactionResult.hash as Hash,
      })
      if (transactionReceipt.status === 0) throw new Error(intl.formatMessage({ id: "errorMsgGeneral", defaultMessage: "Please try again. Confirm the transaction and make sure you are paying enough gas!" }))
      switch (waitForTransactionResult.function) {
        case "approve":
          notify(intl.formatMessage({ id: "you-have-successfully-broadcasted-the-approve", defaultMessage: "You have successfully broadcasted the approve transaction. Once the approval is confirmed in the network, you will be able to proceed with the credit purchase." }), 'success')
          break;
        case "purchase":
          getBalanceOf.run()
          getJinkoPrice.run()
          getCredit.run()
          notify(intl.formatMessage({ id: "you-have-successfully-broadcasted-the-purchase", defaultMessage: "You have successfully broadcasted the purchase transaction. Once the purchase is confirmed in the network, your credit will be topup." }), 'success')
          break;
        default:
          break;
      }
      setWaitingForTransactionResult({ isLoading: false, hash: "0x0", function: "" })
    }
    if (content?.token && waitForTransactionResult.isLoading && waitForTransactionResult.hash !== "0x0") {
      getTransactionStatus()
    }
  }, [content?.token, waitForTransactionResult, intl, notify]) // eslint-disable-line react-hooks/exhaustive-deps

  //  get payment list for dropdown based on chainId
  useEffect(() => {
    setPaymentList(getPaymentList(chainId))
  }, [chainId])

  // reset formik values when drawer is closed
  useEffect(() => {
    if (!walletOpened && (formikValues.selectedCreditsPackage || formikValues.paymentToken || formikValues.isAgreed)) {
      formik.resetForm()
    }
  }, [walletOpened, formikValues]) // eslint-disable-line react-hooks/exhaustive-deps

  return <>
    <Drawer
      opened={walletOpened}
      onClose={walletClose}
      withCloseButton={false}
      position="right"
      overlayProps={{ opacity: 0.5, blur: 4 }}
      transitionProps={{ duration: 400, timingFunction: '' }}
      styles={() => ({
        inner: {
          top: "76px",
        },
        content: {
          backgroundColor: "var(--blackColor)",
          backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%)"
        }
      })} >
      <CustomForm onSubmit={formik.handleSubmit}>
        <Flex direction="row-reverse" style={{ width: "100%" }}>
          <MButton variant="iconWithTransparentBg" onClick={() => { walletClose() }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white" />
            </svg>
          </MButton>
        </Flex>
        <GeneralText size="clamp(1.70rem,2vw,2rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }}>
          {`${intl.formatMessage({ id: "pricing", defaultMessage: "Pricing" })}`}
        </GeneralText>
        {/* Your Current Balance Section */}
        <Flex direction="column">
          <GeneralText size="clamp(0.9rem,2vw,1.1rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "uppercase" }}>
            {`${intl.formatMessage({ id: "your-current-balance", defaultMessage: "Your Current Balance" })}`}
          </GeneralText>
          <Flex gap="30px" style={{ width: "100%" }}>
            <Flex align="center">
              <img src="/images/tokens/credits.svg" alt="credit" style={{ width: "26px", height: "26px" }} />
              <Flex direction="column" style={{ marginLeft: "10px" }}>
                <GeneralText size="clamp(1.1rem,2vw,1.25rem)" color="white" weight="extrabold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }}>
                  {getFormatNumberWithK(Number(credit), 1, 2)}
                </GeneralText>
                <GeneralText size="clamp(0.7rem,2vw,0.75rem)" color="white" weight="extrabold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }}>
                  {`${intl.formatMessage({ id: "credit", defaultMessage: "Credit" })}`}
                </GeneralText>
              </Flex>
            </Flex>
            <Flex align="center">
              <img src="/images/tokens/0x82C0A81632A021085a59e9FFA16c77577CD13aE8.svg" alt="token" style={{ width: "26px", height: "27px" }} />
              <Flex direction="column" style={{ marginLeft: "10px" }}>
                <GeneralText size="clamp(1.1rem,2vw,1.25rem)" color="white" weight="extrabold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }}>
                  { getFormatNumberWithK(getFullDisplayBalance(jinkoBalance, (multichainTokens.jinko.decimals[chainId])), 1, 2)}
                </GeneralText>
                <GeneralText size="clamp(0.7rem,2vw,0.75rem)" color="white" weight="extrabold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }}>
                  {`${intl.formatMessage({ id: "jinko", defaultMessage: "Jinko" })}`}
                </GeneralText>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <svg width="28" height="1" viewBox="0 0 28 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="4.91949e-08" y1="0.5" x2="28" y2="0.500002" stroke="white" />
        </svg>
        {/* Choose your credits plan Section */}
        <Flex direction="column" gap="10px">
          <GeneralText size="clamp(0.9rem,2vw,1.1rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "uppercase" }}>
            {`${intl.formatMessage({ id: "choose-your-credits-plan", defaultMessage: "Choose your credits plan" })}:`}
          </GeneralText>
          <CreditGrid role="group" name="selectedCreditsPackage"  value={formik.values.selectedCreditsPackage} onChange={(value) => formik.setFieldValue('mode', value)}>
            {
              getCreditsPackages.loading === false && creditsPackages?.length > 0 &&
              creditsPackages?.map((item) => {
                return <MRadio variant="wallet-drawer" key={item.id} type="radio" name="selectedCreditsPackage" value={item.id}  label={
                  <MButton variant="wallet-drawer-credit" data-active={formik.values.selectedCreditsPackage === item.id?true:null}  aria-label={`${item?.credit} credits`} aria-labelledby={`${item?.credit} credits`} onClick={() => handleChooseCreditsPackage(item.id)} >
                  <Flex direction="column" style={{ width: "100%", height: "100%",alignItems:"center" }}>
                    {/* <Flex direction="row" align="center" justify="space-between" style={{ width: "100%" }}> */}
                    <GeneralText size="clamp(1.1rem,2vw,1.25rem)" color="white" weight="extrabold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1.2", textTransform: "uppercase" }}>
                      {getFormatNumberWithK(item?.credits, 1)}
                    </GeneralText>
                    {/* {
                          getCurrentPaymentToken()?.symbol === "Jinko" && item?.bonus > 0 &&
                          <GeneralText size="clamp(0.625rem,2vw,0.725rem)" color="white" weight="extrabold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }}>
                            {`+${getFormatNumberWithDecimal((item?.bonus * 100), 1)}%`}
                          </GeneralText>
                        } */}
                    {/* </Flex> */}
                    <GeneralText size="clamp(0.625rem,2vw,0.725rem)" color="white" weight="extrabold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }}>
                      {`${intl.formatMessage({ id: "credits", defaultMessage: "Credits" })}`}
                    </GeneralText>
                  </Flex>
                </MButton>
                } />              })
            }
          </CreditGrid>
        </Flex>
        {/* Payment Section */}
        <Flex direction="column" gap="5px" style={{ width: "100%", justifyContent: "center" }}>
          <SelectWrapper>
            {/* <Flex direction="column"> */}
            <div>
              
              <GeneralText size="clamp(1rem,2vw,1rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: "36px", letterSpacing: "0.1px" }}>
                {getCurrentPaymentToken()?.symbol === "USDT" ? jinkoPrice.usd : jinkoPrice.jinko}
              </GeneralText>
            </div>
              {/* <GeneralText size="clamp(0.9375rem,2vw,0.9375rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase", visibility: getCurrentPaymentToken()?.symbol === "Jinko" && "hidden" }}>
                {`~ ${getCurrentPaymentToken()?.symbol === "USDT" ? jinkoPrice.jinko : '0'} Jinko`}
              </GeneralText> */}
            {/* </Flex> */}
            <Select
              variant="wallet-drawer"
              placeholder={`${intl.formatMessage({ id: "select", defaultMessage: "Select" })}`}
              onChange={(value) => handleChangePaymentToken(value)}
              data={paymentList}
              value={formik?.values?.paymentToken}
              radius={14}
              icon={<img src={`/images/tokens/${formik?.values?.paymentToken}.svg`} alt="payment" style={{ width: "25px", height: "25px" }} />}
              rightSection={<svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1.03846L8.33333 0.5L5 3.34615L1.66667 0.5L1 1.03846L5 4.5L9 1.03846Z" fill="#E5FF00" stroke="#E5FF00" strokeWidth="0.6" />
              </svg>
              }
              />
              <div>
          <GeneralText size="clamp(0.9375rem,2vw,0.9375rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase", visibility: getCurrentPaymentToken()?.symbol === "Jinko" && "hidden" }}>
                {`~ ${getCurrentPaymentToken()?.symbol === "USDT" ? jinkoPrice.jinko : '0'} Jinko`}
              </GeneralText>

              </div>
          </SelectWrapper>
          <GeneralText size="clamp(1rem,2vw,1rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }}>
            {`${intl.formatMessage({ id: "balance", defaultMessage: "Balance" })}: ${dropdownBalance} ${getCurrentPaymentToken()?.symbol}`}
          </GeneralText>
        </Flex>
        {/* Total Section */}
        <Flex direction="column" gap="5px" style={{ width: "100%", justifyContent: "center" }}>

          < GeneralText size="clamp(0.9375rem,2vw,0.9375rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", visibility: (getCurrentPaymentToken()?.symbol === "USDT" || getCurrentCreditsPackage()?.credits === 0) && "hidden", alignSelf: "center" }}>
            {!Number.isNaN(bonusCredits)&&`You will get extra ${bonusCredits} Credits`}
          </GeneralText>

          <MButton variant="text" type="submit" disabled={!isValidTopUp} >
            {waitForTransactionResult.isLoading ?
              <Loader color="black" size="sm" /> :
              <GeneralText size="clamp(0.985rem,2vw,1rem)" color="" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "1" }} >
                <FormattedMessage
                  id='top-up-credits'
                  defaultMessage='Top up {credits} Credits'
                  values={{
                    credits: formik.values.selectedCreditsPackage ? getFormatNumberWithK(creditsPackages?.filter((item) => item.id === formik.values.selectedCreditsPackage)[0]?.credits, 1, 2) : 0
                  }}
                />
              </GeneralText>
            }</MButton>
          {!isSufficientBalance &&
            <GeneralText size="clamp(1rem,2vw,1rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase", alignSelf: "center" }}>
              {`${intl.formatMessage({ id: "in-sufficient-balance", defaultMessage: "Insufficient Balance" })}`}
            </GeneralText>
          }
        </Flex>
        {/* Terms and Condition Section */}
        {/* <Checkbox isSelected={formik.values.isAgreed} onChange={() => { formik.setFieldValue("isAgreed", !formik.values.isAgreed) }} containerCss={{
          background: "transparent",
          color: "blue",
          border: "1px solid #E6E8EC",
          '--nextui--checkboxColor': 'transparent',
          '--nextui--checkboxColorHover': 'transparent'
        }}>
          <GeneralText size="clamp(0.9rem,2vw,1rem)" color="white" weight="light" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "" }}>
            {`${intl.formatMessage({ id: "i-agree-to-the-TNC", defaultMessage: "I agree to the Terms of Service and Privacy Policy" })}`}
          </GeneralText>
        </Checkbox> */}
        <Checkbox variant='wallet-drawer' checked={formik.values.isAgreed}
        onChange={() => { formik.setFieldValue("isAgreed", !formik.values.isAgreed) }}
          label={`${intl.formatMessage({ id: "i-agree-to-the-TNC", defaultMessage: "I agree to the Terms of Service and Privacy Policy" })}`}
        />
      </CustomForm>
    </Drawer >
    {
      isOverlapLoading.isLoading && <PageLoaderStudio>
        <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }} >
          {isOverlapLoading.title.id &&
            <FormattedMessage
              {...isOverlapLoading.title}
              values={{
                br: <br />
              }}
            />
          }
        </GeneralText>
      </PageLoaderStudio>
    }
  </>
}


export const ConnectWallet: React.FC = () => {
  const intl = useIntl()
  const { chainId } = useActiveWeb3React()
  const { content } = useTokenAuth()
  const isShowAddr = useMediaQuery({ query: `(max-width: 767px)` })
  const {
    walletOpened, walletOpen, walletClose, credit, jinkoBalance
  } = useContext(ComponentsContext)


  // useEffect(() => {
  //   if (isSideMenuOpen) {
  //     gsap.timeline()
  //       .to("#slider-wrapper", { xPercent: -100, autoAlpha: 1, duration: 0.8 })
  //       .set("#slider-wrapper", { visibility: "visible" })
  //       .play();
  //   } else {
  //     gsap.timeline()
  //       .to("#slider-wrapper", { xPercent: 0, autoAlpha: 1, duration: 0.8 })
  //       .set("#slider-wrapper", { visibility: "hidden" })
  //       .play();
  //   }
  // }, [isSideMenuOpen])

  const handleToggleWalletSideBar = () => {
    if (walletOpened) {
      walletClose()
    } else {
      walletOpen()
    }
  }

  return <>
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          content?.token && // check if token is available
          (!authenticationStatus ||
            authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
            style={{ width: !connected ? "" : '100%', maxWidth: !connected ? "" : "230px" }}
          >
            {(() => {
              if (!connected) {
                return (
                  <MButton
                    onClick={openConnectModal}

                    style={{
                      background: "var(--yellowColor)",
                      color: "var(--blackColor)",
                      height: '40px',
                      borderRadius: "20px",
                      fontFamily: "var(--fontFamily1)"
                    }}
                  >
                    {intl.formatMessage({ id: "connectWallet", defaultMessage: "Connect Wallet" })}
                  </MButton>
                )
              }
              if (chain.unsupported) {
                return (
                  <MButton
                    color="red"
                    onClick={openChainModal}
                    style={{
                      height: '40px',
                      borderRadius: "20px",
                      fontFamily: "var(--fontFamily1)"
                    }}
                  >
                    {intl.formatMessage({ id: "wrongNetwork", defaultMessage: "Wrong Network" })}
                  </MButton>
                )
              }

              return (
                <WalletComponentWrapper>
                  {/* <MButton
                  onClick={openChainModal}
                  style={{
                    background: "var(--yellowColor)",
                    color: "var(--blackColor)",
                    height: '40px',
                    borderRadius: "0px",
                    fontFamily: "var(--fontFamily1)"
                  }}
                >
                  <Badge variant="dot" shape="circle" size="xs" css={{ marginRight: '10px' }} /> <img
                    alt={chain.name ?? 'Chain icon'}
                    src={chain.iconUrl}
                    style={{ width: '26px', height: '26px', fontFamily: "var(--fontFamily1)" }}
                  />
                </MButton> */}
                  <MButton
                    onClick={openAccountModal}
                    style={{
                      // background: "var(--yellowColor)",
                      // color: "var(--blackColor)",
                      backgroundColor: "transparent",
                      color: "var(--whiteColor)",
                      height: '40px',
                      borderRadius: "20px",
                      fontFamily: "var(--fontFamily1)",
                      padding: "0px 10px"
                    }}
                  >
                    {!isShowAddr ? account.displayName : <IoWalletOutline fontSize="30px" />}
                  </MButton>
                  <MButton variant='nav-bar-wallet' onClick={handleToggleWalletSideBar}>
                    <Flex direction="column" style={{ backgroundColor: "black", width: "100%",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px" }}>
                      <Flex direction="row" gap="5px" style={{ alignItems: "center", margin: "0px 5px" }}>
                        <img src="/images/tokens/credits.svg" alt="credit" style={{ width: "22px", height: "22px", padding: "2px" }} />
                        <GeneralText size="1rem" color="white" weight="bold" >
                          {getFormatNumberWithK(Number(credit), 1, 2)}
                        </GeneralText>
                      </Flex>
                      <Flex direction="row" gap="3px" style={{ alignItems: "center", margin: "0px 5px" }}>
                        <img src="/images/tokens/0x82C0A81632A021085a59e9FFA16c77577CD13aE8.svg" alt="token" style={{ width: "22px", height: "22px", padding: "2px" }} />
                        <GeneralText size="1rem" color="white" weight="bold" style={{ overflow: "hidden", textOverflow: "ellipsis" }} >
                          { getFormatNumberWithK(getFullDisplayBalance(jinkoBalance, (multichainTokens.jinko.decimals[chainId])), 1, 2)}
                        </GeneralText>
                      </Flex>
                    </Flex>
                    <IconBalance>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="black" />
                      </svg>
                    </IconBalance>
                  </MButton>
                </WalletComponentWrapper>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
    <WalletDrawer />
  </>
}