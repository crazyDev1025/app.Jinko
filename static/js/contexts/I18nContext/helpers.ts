import { EN, languageList } from 'config/constants/languages'

const publicUrl = process.env.PUBLIC_URL

export const LS_KEY = `${process.env.REACT_APP_PROJECT_NAME}_language`

export const fetchLocale = async (locale) => {
  const response = await fetch(`${publicUrl}/locales/${locale}.json`)
  const data = await response.json()
  return data
}

export const getLanguageCodeFromLS = () => {
  try {
    const codeFromStorage = localStorage.getItem(LS_KEY)

    return codeFromStorage || EN.locale
  } catch {
    return EN.locale
  }
}

export const getLanguageCodeFromQuery = () => {
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const codeFromQuery = urlParams.get('lang')

    // Check if the language code is valid
    if (languageList.findIndex((item) => item.locale === codeFromQuery) === -1) {
      return null
    }

    return codeFromQuery
  } catch {
    return null
  }
}