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
    <Dropdown>
      <Dropdown.Button
        rounded={false}
        css={{
          // background: "var(--yellowColor)",
          backgroundColor: "transparent",
          color: "var(--yellowColor)",
          borderRadius: "20px",
          fontFamily: "var(--fontFamily1)",
          width: "fit-content",
          padding: "0px",
          textTransform: "uppercase",
        }}
      >
        {languageList.find(l => l.locale === selectedValue.toString())?.code}
      </Dropdown.Button>
      <Dropdown.Menu
        color="default"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={(la) => {
          setSelected(la as Set<string>)
          const newLocale = Object.values(la)[0]
          setLanguage(languageList.find(l => l.locale === newLocale.toString()))
        }}
        css={{
          fontFamily: "var(--fontFamily1)"
        }}
      >
        {languageList.map((la) => (
          <Dropdown.Item key={la.locale}>{la.language}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LangSelector