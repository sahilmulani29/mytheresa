import React, { createContext, useState } from 'react'

export const initialContext = {
  topRated: [],
  upComing: [],
  nowPlaying: [],
  wishList: [],
  isLoading: false,
  isError: false
}

export const AppContext = createContext({
  setRootState: () => {},
  rootState: {}
})

export function AppContextProvider (props) {
  const [rootState, setRootState] = useState(initialContext)

  const setRootStateHandler = (data) => {
    setRootState(data)
  }

  return (
        <AppContext.Provider
            value={{
              rootState,
              setRootStateHandler
            }}
        >
            {props.children}
        </AppContext.Provider>
  )
}
