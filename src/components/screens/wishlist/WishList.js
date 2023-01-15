import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/app-context'
import Carousels from '../../common/carousel/Carousels'
import { Container } from '../../common/container/Container'
import { ItemInfo } from '../../ui/ItemInfo'
import '../movie/movie-details.scss'

const WishList = () => {
  const [selectedMovie, setSelectedMovie] = useState({})
  const appCtx = useContext(AppContext)
  const state = appCtx?.rootState

  useEffect(() => {
    if (state.wishList.length > 0) {
      setSelectedMovie(state.wishList[0])
    }
  }, [state])

  const onRemoveHandler = (id) => {
    const wishList = state.wishList
    const index = state.wishList.findIndex((item) => item.id === id)
    wishList.splice(index, 1)
    appCtx.setRootStateHandler({
      ...appCtx.rootState,
      wishList: [...wishList]
    })
  }

  const onMovieSelect = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <Container>
      {state.wishList.length > 0
        ? <div className="details-wrapper">
          <ItemInfo
            details={selectedMovie}
            clickHandler={onRemoveHandler}
            isAddedToWishList={true}
            buttonLable={'remove-wishlist'}
            fromWishList={true}
          />
          <div className="carousel-info">
            <Carousels title="Contine watching for you" data={state.wishList} id={'wishList'} onMovieSelect={onMovieSelect} />
          </div>
        </div>
        : <div className="error-container">
          <h1>Your Wish list is empty</h1>
        </div>
      }
    </Container>
  )
}

export default WishList
