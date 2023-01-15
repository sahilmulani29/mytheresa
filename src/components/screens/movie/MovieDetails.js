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
    if (
      state[params.category] &&
      state[params.category].length > 0 &&
      params.id &&
      !movieDetail.id
    ) {
      const data = state[params.category]
      const movie = data.find((item) => item.id.toString() === params.id)
      if (movie && movie.id) {
        getMovieDetails(movie.id)
      }
    }
  }, [params.category, params.id, state])

  const getMovieDetails = async (id) => {
    appCtx.setRootStateHandler({ ...appCtx.rootState, isLoading: true })
    const response = await get(`${BASE_API}/${id}?api_key=${API_KEY}`)
    if (response.success) {
      setMovieDetail(response.data)
      appCtx.setRootStateHandler({ ...appCtx.rootState, isLoading: false })
      const flag = isItemAddedToList(response.data.id, state.wishList)
      setAddedToWishList(flag)
    }
  }

  const onAddToWishListHandler = () => {
    const wishList = state.wishList
    if (isAddedToWishList) {
      const index = wishList.findIndex((item) => item.id === movieDetail.id)
      wishList.splice(index, 1)
      appCtx.setRootStateHandler({
        ...appCtx.rootState,
        wishList: [...wishList]
      })
      setAddedToWishList(false)
    } else {
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
            ? <ItemInfo
              details={movieDetail}
              clickHandler={onAddToWishListHandler}
              isAddedToWishList={isAddedToWishList}
              buttonLable={'add-wishlist'}
              fromWishList={false}
            />
            : <div className="error-container">
              <h1>Data not found</h1>
            </div>
        }
      </div>
    </Container>
  )
}
export default MovieDetails
