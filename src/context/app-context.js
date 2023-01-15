import React, { createContext, useState } from 'react'

// Initial context
export const initialContext = {
  topRated: [],
  upComing: [],
  nowPlaying: [],
  wishList: [],
  isLoading: false,
  isError: false
}

// App context will have two properties which will used to set and get data from contetx
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
