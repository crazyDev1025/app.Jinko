import React, { useContext } from 'react'
import { EN } from 'config/constants/languages'
import { ContextApi, ProviderState } from './types'

export const initialState: ProviderState = {
  isFetching: true,
  currentLanguage: EN,
}

export const languageMap = new Map<string, Record<string, string>>()
languageMap.set(EN.locale, {})

export const LanguageContext = React.createContext<ContextApi>(undefined)

const useTranslation = () => {
  const languageContext = useContext(LanguageContext)

  if (languageContext === undefined) {
    throw new Error('Language context is undefined')
  }

  return languageContext
}

export default useTranslation