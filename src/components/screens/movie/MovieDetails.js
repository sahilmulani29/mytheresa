import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../../../api/request'
import { API_KEY, BASE_API } from '../../../constants/data-constant'
import { AppContext } from '../../../context/app-context'
import { isItemAddedToList } from '../../../utils/common-util'
import { Container } from '../../common/container/Container'
import { ItemInfo } from '../../ui/ItemInfo'
import './movie-details.scss'

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({})
  const [isAddedToWishList, setAddedToWishList] = useState(false)
  const params = useParams()
  const appCtx = useContext(AppContext)
  const state = appCtx?.rootState

  useEffect(() => {
    // Get the parameters and check if we are getting category and id
    if (
      state[params.category] &&
      state[params.category].length > 0 &&
      params.id &&
      !movieDetail.id
    ) {
      const data = state[params.category]
      // Find parameter id if its present in specified category
      const movie = data.find((item) => item.id.toString() === params.id)
      if (movie && movie.id) {
        getMovieDetails(movie.id)
      }
    }
  }, [params.category, params.id, state])

  // Fetch all movie details by passing id to API
  const getMovieDetails = async (id) => {
    // Set application on loading state
    appCtx.setRootStateHandler({ ...appCtx.rootState, isLoading: true })
    const response = await get(`${BASE_API}/${id}?api_key=${API_KEY}`)
    if (response.success) {
      // If API is success then set data
      setMovieDetail(response.data)
      appCtx.setRootStateHandler({ ...appCtx.rootState, isLoading: false })
      const flag = isItemAddedToList(response.data.id, state.wishList)
      setAddedToWishList(flag)
    }
  }

  const onAddToWishListHandler = () => {
    const wishList = state.wishList
    if (isAddedToWishList) {
      // If movie is already added to list then simply find it delete and again set context
      const index = wishList.findIndex((item) => item.id === movieDetail.id)
      wishList.splice(index, 1)
      appCtx.setRootStateHandler({
        ...appCtx.rootState,
        wishList: [...wishList]
      })
      setAddedToWishList(false)
    } else {
      // If not added then add
      wishList.push(movieDetail)
      appCtx.setRootStateHandler({
        ...appCtx.rootState,
        wishList: [...wishList]
      })
      setAddedToWishList(true)
    }
  }

  return (
    <Container>
      <div className="details-wrapper">
        {
          movieDetail && movieDetail.id
          // Item info will display all the information of movie
            ? <ItemInfo
              details={movieDetail}
              clickHandler={onAddToWishListHandler}
              isAddedToWishList={isAddedToWishList}
              buttonLable={'add-wishlist'}
              fromWishList={false}
            />
            // render error message
            : <div className="error-container">
              <h1>Data not found</h1>
            </div>
        }
      </div>
    </Container>
  )
}
export default MovieDetails
