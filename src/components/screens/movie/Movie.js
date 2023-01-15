import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMG_URL } from '../../../constants/data-constant'
import './movie.scss'

const Movies = ({ movieInfo, category, isView, onMovieClick }) => {
  const navigate = useNavigate()

  const onMovieClickHandler = () => {
    if (isView) {
      onMovieClick(movieInfo)
      return
    }
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
