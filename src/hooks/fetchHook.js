import { useContext, useEffect } from 'react'
import { fetchAllCatMovies } from '../api/request'
import { AppContext } from '../context/app-context'

const useFetch = () => {
  const appCtx = useContext(AppContext)

  useEffect(() => {
    (async () => {
      // Set laoding state
      appCtx.setRootStateHandler({ ...appCtx.rootState, isLoading: true })
      const response = await fetchAllCatMovies()
      // API success
      if (response.success) {
        appCtx.setRootStateHandler({
          ...appCtx.rootState,
          isLoading: false,
          isError: false,
          ...response.state
        })
      } else {
        // API failed
        appCtx.setRootStateHandler({
          ...appCtx.rootState,
          isLoading: false,
          isError: true
        })
      }
    })()
  }, [])
}

export default useFetch
