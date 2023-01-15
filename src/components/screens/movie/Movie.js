import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMG_URL } from '../../../constants/data-constant'
import './movie.scss'

const Movies = ({ movieInfo, category, isView, onMovieClick }) => {
  const navigate = useNavigate()

  const onMovieClickHandler = () => {
    // isView Will work only in case if request is from wishlist component since we need
    // remove the moview from wish list
    if (isView) {
      onMovieClick(movieInfo)
      return
    }
    // If request is from home page then on click of movie go to moview details page
    navigate(`/movie-details/${category}/${movieInfo.id}`)
  }

  return (
    <div
      data-testid={'movie'}
      onClick={() => {
        onMovieClickHandler()
      }}
      className="movie-container"
    >
      <img src={`${IMG_URL}${movieInfo.poster_path}`} className='img-container'/>
    </div>
  )
}

export default Movies
