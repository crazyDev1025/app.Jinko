import React, { useState, useMemo } from 'react'
import { Dropdown } from '@nextui-org/react'
import { useTranslation } from 'contexts/I18nContext'
import { languageList, languages } from 'config/constants/languages'


const LangSelector: React.FC = () => {
  const { setLanguage, currentLanguage } = useTranslation()
  const [selected, setSelected] = useState(new Set([currentLanguage.locale]))
  const selectedValue = useMemo(() =>
    Array.from(selected),
    [selected]
  )

  return (
    <div></div>
  )
}

export default LangSelector