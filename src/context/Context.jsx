import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()

export default function ContextProvider(Props) {
  const [info, setInfo] = useState(null);
  const [countryFound, setCountryFound] = useState(null);
  return (
    <Context.Provider
      value={{
        info,
        setInfo,
        countryFound,
        setCountryFound,
      }}
    >
      {Props.children}
    </Context.Provider>
  )
}
