import React, {useState, useEffect, createContext, useContext} from 'react';

type Props = {
    children: React.ReactNode
    locales: Array<string>
    localStorageKey?: string
}

const Context = createContext<any>([[], () => null])
export const useDictionary = () => useContext(Context)

const Dictionary = ({children, locales, localStorageKey}: Props) => {
  const [locale, setLocale] = useState(locales[0])

  const setNextLocale = () => {
    const index = locales.findIndex(item => item === locale)
    const newLocale = locales[index < locales.length - 1 ? index + 1 : 0]
    setLocale(newLocale)

    if(!localStorageKey) return

    localStorage.setItem(localStorageKey, newLocale)
  }

  useEffect(() => {
    if(!localStorageKey) return

    const storageLocale = localStorage.getItem(localStorageKey) as string
    if (locales.includes(storageLocale)) setLocale(storageLocale)
  }, [])

  return <Context.Provider value={[locale, setNextLocale]}>
    {children}
  </Context.Provider>
}

export default Dictionary
