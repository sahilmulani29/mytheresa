import React from 'react'
import Movies from '../../screens/movie/Movie'
import './carousels.scss'
import { CATEGORIES_DATA } from '../../../constants/data-constant'

const Carousels = ({ title, data, id, onMovieSelect }) => {
  // To scroll carousel on left or right depend on button press
  const onCarouselClickHandler = (isNext) => {
    const box = document.getElementById(id)
    const width = box.clientWidth
    // Scroll by actual width
    box.scrollLeft = isNext ? box.scrollLeft + width : box.scrollLeft - width
  }

  // Call back on wishlist component to renove the movie from wishlist
  const onMovieClick = (movie) => {
    if (onMovieSelect) {
      onMovieSelect(movie)
    }
  }

  return (
    <>
      <h2 className="category-pad">{title}</h2>
      <div className="carousel">
        <button
          data-testid="pre-btn"
          onClick={() => {
            onCarouselClickHandler(false)
          }}
          className="pre-btn"
        >
          <p>&lt;</p>
        </button>
        <button
          data-testid="next-btn"
          onClick={() => {
            onCarouselClickHandler(true)
          }}
          className="next-btn"
        >
          <p>&gt;</p>
        </button>

        <div className="carousel-container" id={id}>
          {data && data.length > 0
            ? (
                data.map((item) => (
              <Movies
                key={item.id}
                category={CATEGORIES_DATA[id]}
                movieInfo={item}
                isView={id === 'wishList'}
                onMovieClick={onMovieClick}
              />
                ))
              )
            : (
            <></>
              )}
        </div>
      </div>
    </>
  )
}

export default Carousels
