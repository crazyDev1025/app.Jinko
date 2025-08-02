import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'

export const BIG_TEN = new BigNumber(10)
export const BIG_ZERO = new BigNumber(0)
/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */
export const getDecimalAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).times(BIG_TEN.pow(decimals))
}

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals))
}

export const getBalanceAmountDependDecimals = (amount: number, decimals: number) => {
  // return (amount / 100000).toFixed(decimals).replace(/\.?0+$/, '');
  return Number(Number(amount).toFixed(decimals).replace(/\.?0+$/, ''));

}

// if amount has decimal, return true
export const hasDecimal = (amount: number | string) => {
  if (typeof amount === 'string') {
    return Number(amount) % 1 !== 0;
  }
  return amount % 1 !== 0;
}

// if amount that has decimal, return amount with decimal
export const getFormatNumberWithDecimal = (amount: number | string, fixed = 0) => {
  const a = (typeof amount === 'string' ? Number(amount) : amount)
  if (hasDecimal(a)) {
    return a.toFixed(fixed)
  }
  return a.toFixed(0)
}

// if amount > 1000, return 1K
// decimals: 1 => 1000
// decimals: 10 => 10000
// fixed: display decimal
export const getFormatNumberWithK = (amount: number | string, decimals: number, fixed = 0) => {
  const a = Number(amount)
  const d = decimals * 1000
  if (a >= d) {
    return `${getFormatNumberWithDecimal((a / d), fixed)}K`
  }
  return getFormatNumberWithDecimal(a.toFixed(0), fixed)

}


/**
 * This function is not really necessary but is used throughout the site.
 */
export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  return getBalanceAmount(balance, decimals).toNumber()
}

export const getFullDisplayBalance = (balance: BigNumber, decimals = 18, displayDecimals?: number) => {
  return getBalanceAmount(balance, decimals).toFixed(displayDecimals)
}

export const getFullDisplayBalanceFull = (balance: BigNumber, decimals = 18, displayDecimals?: number) => {
  return getBalanceAmount(balance, decimals).toFixed(displayDecimals, 1)
}

export const formatNumber = (number: number, minPrecision = 2, maxPrecision = 2) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return number.toLocaleString(undefined, options)
}

/**
 * Method to format the display of wei given an ethers.BigNumber object
 * Note: does NOT round
 */
export const formatBigNumber = (number: ethers.BigNumber, displayDecimals = 18, decimals = 18) => {
  const remainder = number.mod(ethers.BigNumber.from(10).pow(decimals - displayDecimals))
  return formatUnits(number.sub(remainder), decimals)
}

/**
 * Method to format the display of wei given an ethers.BigNumber object with toFixed
 * Note: rounds
 */
export const formatBigNumberToFixed = (number: ethers.BigNumber, displayDecimals = 18, decimals = 18) => {
  const formattedString = formatUnits(number, decimals)
  return (+formattedString).toFixed(displayDecimals)
}

/**
 * Formats a FixedNumber like BigNumber
 * i.e. Formats 9763410526137450427.1196 into 9.763 (3 display decimals)
 */
export const formatFixedNumber = (number: ethers.FixedNumber, displayDecimals = 18, decimals = 18) => {
  // Remove decimal
  const [leftSide] = number.toString().split('.')
  return formatBigNumber(ethers.BigNumber.from(leftSide), displayDecimals, decimals)
}
