import { useCallback, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useDisconnectAccount } from './useUserAuth'

const useMiddlewareTranslation = () => {
  const intl = useIntl();
  const { onDisconnectAccount: handleDisconnectAccount } = useDisconnectAccount()
  const handleTranslation = useCallback(
    (translationText: string) => {
      switch (translationText) {
        //  API error message
        case "Old token, please login again":
        case "jwt expired":
          handleDisconnectAccount()
          return intl.formatMessage({ id: "your-login-session-has-expired", defaultMessage: "Your login session has expired. Please log in again." });
        case "The email or password you entered is incorrect.":
          return intl.formatMessage({ id: "incorrect-email-or-password-provided", defaultMessage: "Incorrect email or password provided." });
        case "Request failed with status code 429":
          return intl.formatMessage({ id: "request-failed-with-status-code-429", defaultMessage: "Request failed with status code 429." });
        case "Email already registered or invalid email entered":
          return intl.formatMessage({ id: "email-is-either-already-in-use-or-invalid", defaultMessage: "Email is either already in use or invalid format." });
        case "Username already registered":
          return intl.formatMessage({ id: "username-already-registered", defaultMessage: "Username already registered" });
        case "Token validation failed - E401":
          return intl.formatMessage({ id: "token-validation-failed", defaultMessage: "Token validation failed, Please request again." });
        case "not submitted":
          return intl.formatMessage({ id: "something-went-wrong", defaultMessage: "Something went wrong. Please try again later." });
        case "UserRejectedRequestError: User rejected request":
          return intl.formatMessage({ id: "user-denied-transactions-request", defaultMessage: "User denied the transaction request." });
        case "Error: Insufficient balance":
          return intl.formatMessage({ id: "insufficient-balance", defaultMessage: "Insufficient balance" });
        // case "Account with this wallet address already exists":
        //   return intl.formatMessage({ id: "account-with-this-wallet-already-exists", defaultMessage: "Account with this wallet address already exists" });
        // case "Email already registered or invalid email entered":
        //   return intl.formatMessage({ id: "email-already-registered-or", defaultMessage: "Email already registered or invalid email entered" });
        // case "Token validation failed - E401":
        //   return intl.formatMessage({ id: "token-validation-failed-e401", defaultMessage: "Token validation failed - E401" });
        // case "Too many password reset requests, please try again later":
        //   return intl.formatMessage({ id: "too-many-password-reset-requests-please", defaultMessage: "Too many password reset requests, please try again later" });
        // case "Email not found":
        //   return intl.formatMessage({ id: "email-not-found", defaultMessage: "Email not found" });

        default:
          return translationText;
      }
    }, [intl, handleDisconnectAccount]
  )
  return { onGetTranslation: handleTranslation }

}

export default useMiddlewareTranslation;
