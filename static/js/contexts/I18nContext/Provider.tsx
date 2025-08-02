import React, { useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { EN, languages } from 'config/constants/languages'
import { initialState, languageMap, LanguageContext } from './Context'
import { ProviderState } from './types'
import { LS_KEY, fetchLocale, getLanguageCodeFromLS, getLanguageCodeFromQuery } from './helpers'


export const LanguageProvider: React.FC<any> = ({ children }) => {
  const [state, setState] = useState<ProviderState>(() => {
    const codeFromStorage = getLanguageCodeFromLS()
    const codeFromQuery = getLanguageCodeFromQuery()

    return {
      ...initialState,
      currentLanguage: languages[codeFromQuery ?? codeFromStorage],
    }
  })
  const { currentLanguage } = state

  useEffect(() => {
    const fetchInitialLocales = async () => {
      const codeFromStorage = getLanguageCodeFromLS()
      const codeFromQuery = getLanguageCodeFromQuery()

      const enLocale = languageMap.get(EN.locale)
      const currentLocale = await fetchLocale(codeFromQuery ?? codeFromStorage ?? EN.locale)
      languageMap.set(codeFromQuery ?? codeFromStorage ?? EN.locale, { ...enLocale, ...currentLocale })
      localStorage.setItem(LS_KEY, codeFromQuery ?? codeFromStorage ?? EN.locale)

      setState((prevState) => ({
        ...prevState,
        isFetching: false,

      }))

      // remove the query param from the url
      window.history.pushState({}, document.title, window.location.pathname)
    }

    fetchInitialLocales()
  }, [setState])

  const setLanguage = async (language: any) => {
    if (!languageMap.has(language.locale)) {
      setState((prevState) => ({
        ...prevState,
        isFetching: true,
      }))

      const locale = await fetchLocale(language.locale)
      const enLocale = languageMap.get(EN.locale)

      // Merge the EN locale to ensure that any locale fetched has all the keys
      languageMap.set(language.locale, { ...enLocale, ...locale })
      localStorage.setItem(LS_KEY, language.locale)

      setState((prevState) => ({
        ...prevState,
        isFetching: false,
        currentLanguage: language,
      }))
    } else {
      localStorage.setItem(LS_KEY, language.locale)
      setState((prevState) => ({
        ...prevState,
        isFetching: false,
        currentLanguage: language,
      }))
    }
  }

  return <LanguageContext.Provider value={{ ...state, setLanguage }}>
    <IntlProvider locale={currentLanguage?.locale} defaultLocale={EN.locale} messages={languageMap.get(currentLanguage.locale)}>
      {children}
    </IntlProvider>
  </LanguageContext.Provider>
}