import { useContext, useEffect } from 'react'
import { fetchAllCatMovies } from '../api/request'
import { AppContext } from '../context/app-context'

const useFetch = () => {
  const appCtx = useContext(AppContext)

  useEffect(() => {
    (async () => {
      appCtx.setRootStateHandler({ ...appCtx.rootState, isLoading: true })
      const response = await fetchAllCatMovies()
      if (response.success) {
        appCtx.setRootStateHandler({
          ...appCtx.rootState,
          isLoading: false,
          isError: false,
          ...response.state
        })
      } else {
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
